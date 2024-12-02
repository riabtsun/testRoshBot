const mongoose = require("mongoose");
const express = require("express");
const authRouter = require("./authRouter.js");
const PORT = 3030 || process.env.MONGODB_URI;
require("dotenv/config");

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (err) {
    console.log("Помилка підключення до MongoDB", err);
  }
};

module.exports = connectDB;
