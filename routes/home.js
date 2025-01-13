const express = require('express');
const router = express.Router();

// Home Page Route
router.get("/", (req, res) => {
    res.redirect("/api_market");
});

router.get("/api_market", (req, res) => {
    res.render("listings/home.ejs");
});

module.exports = router;
