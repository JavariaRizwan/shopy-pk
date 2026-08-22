
require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("MongoDB Connected ✅"); console.log("Connected to Database Name:", mongoose.connection.name);})
  .catch((err) => console.log("MongoDB Connection Failed ❌", err.message));

module.exports = connection;
