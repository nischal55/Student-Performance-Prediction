const express = require("express");
const feedbackRoutes = express.Router();

const {
  addFeedBack,
  getAllFeedBack,
} = require("../Controllers/feedBackController");

feedbackRoutes.get("/feedbacks", getAllFeedBack);
feedbackRoutes.post("/feedbacks", addFeedBack);

module.exports = feedbackRoutes;
