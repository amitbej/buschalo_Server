const addnewTicket = require("../models/newTickeM");

const getNewTicket = async (req, res) => {
  try {
    const myTicket = await addnewTicket.find();
    res.status(200).json({ myTicket });
  } catch (error) {
    console.error("Error fetching NewTickets:", error);
    res.status(500).json({ error: "An error occurred while fetching tickets" });
  }
};

const postTicket = async (req, res) => {
  try {
    const newTicket = new addnewTicket(req.body);
    const saveTicket = await newTicket.save();
    res.status(200).json({ saveTicket });
  } catch (error) {
    console.error("Error Adding NewTickets:", error);
    res.status(500).json({ error: "An error occurred while Adding tickets" });
  }
};

module.exports = { getNewTicket, postTicket };
