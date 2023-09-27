const mongoose = require("mongoose");


const connectDB = (URL) => {
  console.log("MongoDB Connection Successful")
  return mongoose.connect(URL, { useUnifiedTopology: true });
};

module.exports = connectDB;

/* .then(() => )
.catch((err) => console.log(err));

*/

