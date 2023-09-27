const express = require("express");
const router = express.Router();

const { getLocation,postLocation } = require("../controllers/locationC");

router.route("/").get(getLocation);
router.route("/").post(postLocation);

module.exports = router;
