const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: String,
  target: { type: String, required: true },
  startDate: String,
  endDate: String,
  status: { type: String, default: "ongoing" }
});

module.exports = mongoose.model("Challenge", challengeSchema);