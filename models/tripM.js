const mongoose = require("mongoose");

const newTripSchema = new mongoose.Schema({
  date: { type: Date, required: true }, 
  from: { type: String, required: true }, 
  to: { type: String, required: true }, 
  busOwnerID: { type: Number, required: true },
  startTime: { type: Date, required: true }, 
  EndTime: { type: Date, required: true }, 
  category: { type: String, required: true }, 
  SeatBooked: { type: [String], required: true }, 
  bus_no: { type: String }, 
  animeties_list: { type: [String] }, 
  busFare: { type: Number, required: true }, 
  busName: { type: String, required: true },
});

const newTrip = new mongoose.model("NewTrip", newTripSchema);

module.exports = newTrip;
