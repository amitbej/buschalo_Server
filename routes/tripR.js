const express = require("express");
const router = express.Router();

const { getTrip, postTrip } = require("../controllers/tripC");

router.route("/").get(getTrip);
router.route("/").post(postTrip);

module.exports = router;
