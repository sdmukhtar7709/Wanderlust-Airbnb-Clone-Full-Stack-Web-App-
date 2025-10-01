const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");   
//reviews

const reviewsControllers = require("../controllers/reviews.js");
const { route } = require("./listing");


 

//post review route
router.post("/" ,   
  isLoggedIn,
    validateReview, 
    wrapAsync (reviewsControllers.createReview));


//delete route for reviews
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewsControllers.destroyReview)
);


module.exports = router;

