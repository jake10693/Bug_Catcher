const path = require("path");
const router = require("express").Router();
const bugRoutes = require("./bugs");
// const googleRoutes = require("./google");

// Bug routes
router.use("/bugs", bugRoutes);

// Google Routes
// router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
