const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js")

const {reviewSchema} = require("../schema.js")
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })



//Index Route,Create Route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post( isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));
  
  
  //New Route
  router.get("/new", isLoggedIn, listingController.RenderNewForm);
  
   //Show Route,Update Route,Delete Route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOwner,upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));
  
  //Edit Route
  router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.RenderEditForm));
  
  module.exports = router;