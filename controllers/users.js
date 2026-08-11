const User = require("../models/user.js");
const Listing = require("../models/listing.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs", { hideFooter: true });
}
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, async (err) => {
            if (err) {
                return next(err);
            }
            if (req.session && Array.isArray(req.session.wishlist) && req.session.wishlist.length) {
                const user = await User.findById(req.user._id);
                const existingIds = user.wishlist.map((item) => item.toString());
                req.session.wishlist.forEach((item) => {
                    if (!existingIds.includes(item.toString())) {
                        user.wishlist.push(item);
                    }
                });
                await user.save();
                delete req.session.wishlist;
            }
            req.flash("success", "Welcome to Destino");
            const redirectUrl = res.locals.redirectUrl || "/listings";
            res.redirect(redirectUrl);
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderWishlist = async (req, res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    res.render("users/wishlist.ejs", { wishlist: user.wishlist || [] });
}

module.exports.toggleWishlist = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }
    if (req.user) {
        const user = await User.findById(req.user._id);
        const existingIndex = user.wishlist.findIndex((item) => item.equals(id));
        if (existingIndex >= 0) {
            user.wishlist.splice(existingIndex, 1);
            await user.save();
            req.flash("success", "Removed from wishlist.");
        } else {
            user.wishlist.push(listing._id);
            await user.save();
            req.flash("success", "Added to wishlist.");
        }
        const redirectUrl = req.get("referer") || "/listings";
        return res.redirect(redirectUrl);
    }
    if (!req.session.wishlist) req.session.wishlist = [];
    const index = req.session.wishlist.findIndex((item) => item.toString() === id.toString());
    if (index >= 0) {
        req.session.wishlist.splice(index, 1);
        req.flash("success", "Removed from wishlist.");
        return res.redirect(req.get("referer") || "/listings");
    }
    req.session.wishlist.push(id);
    req.session.redirectUrl = req.get("referer") || "/listings";
    req.flash("success", "Added to wishlist. Please log in to save it permanently.");
    res.redirect("/login");
}

module.exports.renderLoginForm = (req, res) => {
    // show signup below login if user was redirected from an action like become-host, book or review
    const redirect = req.session && req.session.redirectUrl ? req.session.redirectUrl : '';
    const showSignupBelow = /listings\/new|book|review|reviews/i.test(redirect);
    res.render("users/login.ejs", { hideFooter: true, showSignupBelow });
}

module.exports.login = async (req, res) => {
    if (req.session && Array.isArray(req.session.wishlist) && req.session.wishlist.length) {
      const user = await User.findById(req.user._id);
      const existingIds = user.wishlist.map((item) => item.toString());
      req.session.wishlist.forEach((item) => {
        if (!existingIds.includes(item.toString())) {
          user.wishlist.push(item);
        }
      });
      await user.save();
      delete req.session.wishlist;
    }
    req.flash("success", "Welcome to Destino! You are logged in.");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}
module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
}