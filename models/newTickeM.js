const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
});

const newTTicket = mongoose.model("NewTicket", ticketSchema);

module.exports = newTTicket;
