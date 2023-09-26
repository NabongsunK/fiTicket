var express = require("express");
var router = express.Router();

const reviewModel = require("../models/review.model");
const ReviewService = require("../services/review.service");

//review 조회
router.get("/reviews", async (req, res, next) => {
  try {
    const review = await ReviewService.getReview();
    console.log(review);
    res.json(review);
  } catch (err) {
    next(err);
  }
});

// review ticket_id로 조회
router.get("/reviews/:ticket", async (req, res, next) => {
  try {
    const ticket = Number(req.params.ticket);
    const article = await ReviewService.findReviewByTicket(ticket);
    res.json(article);
  } catch (err) {
    next(err);
  }
});

// review 작성
router.post("/write", async (req, res, next) => {
  // req.body = {rating,ticket_id,user_id,content}
  try {
    const review = await ReviewService.writeReview(req.body);
    res.json({ review });
  } catch (err) {
    next(err);
  }
});

// best review 조회
router.get("/best", async (req, res, next) => {
  try {
    const result = await ReviewService.getBestReview(req);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
