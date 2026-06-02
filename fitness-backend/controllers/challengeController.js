const Challenge = require("../models/Challenge");

// CREATE
exports.createChallenge = async (req, res) => {
  const data = await Challenge.create({
    ...req.body,
    user: req.user.id
  });

  res.json(data);
};

// GET ALL
exports.getChallenges = async (req, res) => {
  const data = await Challenge.find({ user: req.user.id });
  res.json(data);
};

// UPDATE
exports.updateChallenge = async (req, res) => {
  const updated = await Challenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

// DELETE
exports.deleteChallenge = async (req, res) => {
  await Challenge.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};