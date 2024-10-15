const mongoose = require("mongoose");

const MenuStat = new mongoose.Schema({
  menuItem: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("MenuStat", MenuStat);
