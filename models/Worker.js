const { Schema, model } = require("mongoose");

const Worker = new Schema({
  username: { type: String, unique: false, default: `user_${Date.now}` },
  first_name: { type: String },
  phoneNumber: { type: String, required: true, unique: true },
  telegramId: { type: Number, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("Worker", Worker);
