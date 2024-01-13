const mongoose = require("mongoose");
require("dotenv").config;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
    });
    console.log("conncected to database");
  } 
  catch (error) {
    console.error("error connected to database", error);
  }
};
module.exports = connectDB;
