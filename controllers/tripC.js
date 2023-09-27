const addnewTrip = require("../models/tripM");

const getTrip = async (req, res) => {
  try {
    const trips = await addnewTrip.find();
    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ error: "An error occurred while fetching trips" });
  }
};

const postTrip = async (req, res) => {
  try {
    const newTrip = new addnewTrip(req.body);
    const saveTrip = await newTrip.save();
    res.status(200).json({ saveTrip });
  } catch (error) {
    console.error("Error posting trip:", error);
    res.status(500).json({ error: "An error occurred while posting the trip" });
  }
};

module.exports = { getTrip, postTrip };
