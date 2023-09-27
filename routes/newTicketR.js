const express = require("express");
const router = express.Router();

const { getNewTicket, postTicket } = require("../controllers/newTicketC");

router.route("/").get(getNewTicket);
router.route("/").post(postTicket);

module.exports = router;
