var express = require("express");
var router = express.Router();

// const reviewModel = require("../models/review.model");
const ReviewService = require("../services/review.service");

//review 조회
router.get("/reviews", async (req, res, next) => {
  try {
    const review = await ReviewService.getReview();
    // console.log(review);
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

// review user_id로 조회
router.get("/reviews/:user/:ticket", async (req, res, next) => {
  try {
    const user = Number(req.params.user);
    const ticket = Number(req.params.ticket);
    const article = await ReviewService.findReviewByUser(user, ticket);
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

// best review toggle
router.put("/reviews/best/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await ReviewService.toggleReview(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 리뷰 삭제
router.delete("/reviews/staff/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await ReviewService.deleteReview(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// 리뷰 수정
router.put("/reviews/staff/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const article = req.body;
    const result = await ReviewService.updateReview(id, article);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
