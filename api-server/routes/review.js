var express = require("express");
var router = express.Router();

const reviewModel = require("../models/review.model");

// review ticket_id로 조회
router.get("/reviews/:ticket", async (req, res, next) => {
  try {
    const ticket = Number(req.params.ticket);
    const article = await reviewModel.findByTicket(ticket);
    res.json(article);
  } catch (err) {
    next(err);
  }
});

// review 작성
router.post("/", async (req, res, next) => {
  // req.body = {rating,ticket_id,user_id,content}
  try {
    const review = await reviewModel.create(req.body);
    res.json({ review });
  } catch (err) {
    next(err);
  }
});

// best review 조회
router.get("/best", async (req, res, next) => {
  try {
    const result = await reviewModel.bestReview(req);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
