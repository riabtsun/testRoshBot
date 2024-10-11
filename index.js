const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.port || 5000;
require("dotenv").config();

const app = express();

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://riabtsundv:3m6sEVeLZN2ojcr0@cluster0.chmox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log(`Started on port: ${PORT}`);
  } catch (err) {
    console.log(err);
  }
};

start();
