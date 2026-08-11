const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
module.exports.index = async (req, res) => {
  const fullListings = await Listing.find({});
  const allowedCategories = ['beach','mountains','villas','cabins','city','luxury','unique','experiences'];
  const category = (req.query.category || '').toLowerCase();
  if (category && !allowedCategories.includes(category)) {
    req.flash('error', 'Category not recognized — showing all listings');
    return res.redirect('/listings');
  }
  let wishlistIds = [];
  if (req.user) {
    const user = await User.findById(req.user._id).select('wishlist');
    if (user) {
      wishlistIds = user.wishlist.map((id) => id.toString());
    }
    if (req.session && Array.isArray(req.session.wishlist)) {
      wishlistIds = Array.from(new Set([...wishlistIds, ...req.session.wishlist.map((id) => id.toString())]));
    }
  } else if (req.session && Array.isArray(req.session.wishlist)) {
    wishlistIds = req.session.wishlist.map((id) => id.toString());
  }
  res.render("listings/index.ejs", { allListings: fullListings, selectedCategory: category, wishlistIds });
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" }, }).populate("owner");
  if (!listing) {
    req.flash("error", "Cannot find that listing , Listing may be deleted");
    return res.redirect("/listings");
  }
  const locationParts = [listing.location, listing.country].filter(Boolean);
  const locationQuery = locationParts.length ? locationParts.join(", ") : "";
  const googleMapsSearchUrl = locationQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`
    : "";
  res.render("listings/show.ejs", { listing, googleMapsApiKey: GOOGLE_MAPS_API_KEY, locationQuery, googleMapsSearchUrl });
}
module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "Successfully made a new listing");
  res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Cannot find that listing , Listing may be deleted");
    return res.redirect("/listings");
  }

let orignalImageUrl= listing.image.url;
orignalImageUrl= orignalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing,orignalImageUrl});
}

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if(typeof req.file !== "undefined"){
  let url = req.file.path;
  let filename = req.file.filename;
  listing.image = { url, filename };
  await listing.save();
  }
  req.flash("success", "Successfully updated listing");
  res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully");
  res.redirect("/listings");
}