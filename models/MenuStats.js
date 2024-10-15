import mongoose from "mongoose";

const MenuStatSchema = new mongoose.Schema({
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

export default mongoose.model("MenuStat", MenuStatSchema);
