const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const {
  createChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge
} = require("../controllers/challengeController");

router.post("/", auth, createChallenge);
router.get("/", auth, getChallenges);
router.put("/:id", auth, updateChallenge);
router.delete("/:id", auth, deleteChallenge);

module.exports = router;