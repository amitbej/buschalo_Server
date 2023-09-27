const addnewBus = require("../models/newBusM");

const getBusdetails = async (req, res) => {
  try {
  const mybusData = await addnewBus.find();
  res.status(200).json({ mybusData });
  }catch(error) {
    console.error("Error fetching New BusDetails:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching Bus Details" });
  }
};

const addBusdetails = async (req, res) => {
  try {
    const newBus = new addnewBus(req.body);
    const saveBus = await newBus.save();
    res.status(200).json({ saveBus });
  } catch (error) {
    console.error("Error Adding NewBus:", error);
    res.status(500).json({ error: "An error occurred while Adding Bus" });
  }
};

module.exports = { getBusdetails, addBusdetails };
