const mongoose = require("mongoose");

const busDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  totalWindowSeatsAvailable: { type: Number, required: true },
  rating: { type: Number, required: true },
  amenities: [{ type: String }],
});



const Busdetail = new mongoose.model("Busdetail", busDetailsSchema);

module.exports = Busdetail;
