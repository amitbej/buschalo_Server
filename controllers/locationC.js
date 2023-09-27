const Location = require("../models/locationM");

const getLocation = async (req, res) => {
  try {
    const locate = await Location.find();
    res.status(200).json({ locate });
  } catch (error) {
    console.error("Error fetching Location:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching Location" });
  }
};

const postLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    const saveLocation = await newLocation.save();
    res.status(200).json({ saveLocation });
  } catch (error) {
    console.error("Error posting Location:", error);
    res
      .status(500)
      .json({ error: "An error occurred while posting the Location" });
  }
};

module.exports = { getLocation, postLocation };
