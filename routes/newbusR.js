const express = require("express");
const router = express.Router();

const { getBusdetails, addBusdetails } = require("../controllers/newbusC");

router.route("/").get(getBusdetails);
router.route("/").post(addBusdetails);

module.exports = router;
