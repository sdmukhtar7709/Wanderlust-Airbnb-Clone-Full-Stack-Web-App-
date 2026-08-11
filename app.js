if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

const sessionSecret = process.env.SECRET;
if (!sessionSecret) {
  throw new Error("SECRET is not defined");
}

const ExpressError = require("./utils/ExpressError.js");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const primaryDbUrl = process.env.ATLASDB_URL;
const fallbackDbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/destino';

if (process.env.NODE_ENV === 'production' && !primaryDbUrl) {
  throw new Error("ATLASDB_URL is not defined");
}

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// ===============================
// SESSION STORE
// ===============================

const store = MongoStore.create({
  mongoUrl: primaryDbUrl || fallbackDbUrl,
  crypto: {
    secret: sessionSecret,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (e) => {
  console.log("SESSION STORE ERROR", e);
});


// ===============================
// SESSION
// ===============================

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
};

app.use(session(sessionOptions));

app.use(flash());


// ===============================
// PASSPORT
// ===============================

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===============================
// GLOBAL LOCALS
// ===============================

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  res.locals.wishlistCount = 0;

  if (req.user && req.user.wishlist) {
    res.locals.wishlistCount = req.user.wishlist.length;
  } else if (
    req.session &&
    Array.isArray(req.session.wishlist)
  ) {
    res.locals.wishlistCount = req.session.wishlist.length;
  }

  next();
});


// ===============================
// ROUTES
// ===============================

app.use("/listings", listingsRouter);

app.use(
  "/listings/:id/reviews",
  reviewsRouter
);

app.use("/", userRouter);


// ===============================
// VIEW ENGINE
// ===============================

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");

app.set(
  "views",
  path.join(__dirname, "views")
);


// ===============================
// STATIC FILES
// ===============================

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);


// ===============================
// DATABASE
// ===============================

async function connectDB() {
  // Try primary (Atlas) first when provided; on failure, fall back to local during development.
  if (primaryDbUrl) {
    try {
      await mongoose.connect(primaryDbUrl);
      console.log('Connected to MongoDB (primary)');
      return;
    } catch (err) {
      console.error('MongoDB primary connection failed:', err.message);
      if (process.env.NODE_ENV === 'production') {
        process.exit(1);
      }
      // continue to attempt fallback in non-production
    }
  }

  // Fallback for development (local MONGO_URL or embedded default)
  try {
    await mongoose.connect(fallbackDbUrl);
    console.log('Connected to MongoDB (fallback)');
  } catch (err) {
    console.error('Fallback MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

connectDB();


// ===============================
// 404
// ===============================

app.all("*", (req, res, next) => {
  next(
    new ExpressError(
      "Page Not Found",
      404
    )
  );
});


// ===============================
// ERROR HANDLER
// ===============================

app.use(
  (err, req, res, next) => {
    const {
      statusCode = 500,
      message = "Something went wrong",
    } = err;

    res
      .status(statusCode)
      .render("error.ejs", { err });
  }
);


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Destino running on port ${PORT}`
  );
});