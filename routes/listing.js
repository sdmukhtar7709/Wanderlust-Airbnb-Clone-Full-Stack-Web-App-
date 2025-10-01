const express= require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
//const {listingSchema, reviewSchema} = require("../schema.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js"); 


const ListingController= require("../controllers/listings.js");
// Index Route - Show all listings
const multer = require('multer');
const { cloudinary, storage } = require('../cloudinary');
const upload = multer({ storage });



router.route("/")
.get(wrapAsync(ListingController.index))
  .post(
    isLoggedIn,
    
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.createListing)    
  );
  

// New Route - Show form to create listing
router.get("/new", isLoggedIn, ListingController.renderNewForm);


router.route("/:id")
  .get(wrapAsync(ListingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(ListingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(ListingController.destroyListing)
  );




// Show Route - Show one listing
// router.get(
//   "/:id",
//   wrapAsync(ListingController.showListing)
// );




// Create Route - Add new listing
// router.post(
//   "/", isLoggedIn, validateListing,
//   wrapAsync(ListingController.createListing)
// );

// Edit Route - Show edit form
router.get(
  "/:id/edit", isLoggedIn, isOwner,
  wrapAsync(ListingController.renderEditForm)
);

// Update Route - Update a listing
// router.put(
//   "/:id", 
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(ListingController.updateListing)
// );

// Delete Route
// router.delete(
//   "/:id",
//   isLoggedIn,isOwner,
//   wrapAsync(ListingController.destroyListing)
// );

module.exports = router;