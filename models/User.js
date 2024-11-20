const { Schema, model } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    unique: false,
    required: true,
    default: `user_${Date.now}`,
  },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", User);
