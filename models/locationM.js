const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  state: {
    type: String,
    description: "Name of the State.",
    required: true,
  },
  districts: {
    type: [String],
    description: "District's within the state.",
    required: true,
  },
});

const Location = new mongoose.model("Location", locationSchema);

module.exports = Location;
