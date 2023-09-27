const express = require("express");
require("dotenv").config();
const connectDB = require("./Database/dataBase");
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const tripRoutes = require("./routes/tripR");
const newTicket = require("./routes/newTicketR");
const locaTion = require("./routes/locationR");
const newBus = require("./routes/newbusR");


const app = express();
const PORT = process.env.PORT || 5000;

//middlewear

app.use(bodyParser.json());



app.use(express.json());
app.use("/location", locaTion);
app.use("/trip", tripRoutes);
app.use("/ticket", newTicket);
app.use("/bus", newBus);


app.get("/", (req, res) => {
  res.send("Hi i am From Server Home");
});


/*
app.use(express.json());
app.use(bodyParser.json());
*/
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Connected at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();