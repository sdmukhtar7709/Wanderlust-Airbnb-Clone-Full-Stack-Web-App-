const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl, isLoggedIn}=require("../middleware.js");
const userController=require("../controllers/users.js");
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: '/login',
      failureFlash: true,
    }),
    userController.login
  );

router.get("/wishlist", isLoggedIn, wrapAsync(userController.renderWishlist));
router.post("/wishlist/:id", wrapAsync(userController.toggleWishlist));







// router.post("/signup", wrapAsync(userController.signup));





// router.get("/login", userController.renderLoginForm);

// router.post("/login",
//     saveRedirectUrl,
//     passport.authenticate("local", {
//         failureRedirect: '/login',
//         failureFlash: true,
//     }),
//     userController.login
    
// );

router.get("/logout", userController.logout);



module.exports = router;