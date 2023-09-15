var express = require("express");
var router = express.Router();

const ExploreService = require("../services/explore.service");

// 인증번호받기
router.get("/getalllist", async (req, res, next) => {
  // req.body =
  // res =
  try {
    const result = await ExploreService.getAllList(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
