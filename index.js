import mongoose from "mongoose";
import express from "express";
import authRouter from "./authRouter.js";
const PORT = 8080 || process.env.MONGODB_URI;
import "dotenv/config";

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
export default connectDB;
