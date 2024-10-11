const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB подключен");
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
