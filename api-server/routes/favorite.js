var express = require("express");
var router = express.Router();

// const reviewModel = require("../models/review.model");
const FavoriteService = require("../services/favorite.service");

// 좋아요 취소
router.delete("/dislike/:fes/:id", async (req, res, next) => {
  try {
    const fes = Number(req.params.fes);
    const id = Number(req.params.id);
    const result = await FavoriteService.deleteFavor(fes, id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// 좋아요 등록
router.post("/like/:fes/:id", async (req, res, next) => {
  try {
    const fes = Number(req.params.fes);
    const id = Number(req.params.id);
    const result = await FavoriteService.updateFavor(fes, id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// 좋아요 조회
router.get("/favorlist/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await FavoriteService.getFavorList(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
