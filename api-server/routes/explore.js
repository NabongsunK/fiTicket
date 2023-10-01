var express = require("express");
var router = express.Router();

const ExploreService = require("../services/explore.service");
const RecommendService = require("../services/recommend.service");

// explore list에 필요한 리스트 받기
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
// explore map에 필요한 리스트 받기
router.get("/getallmap", async (req, res, next) => {
  // req.body =
  // res =
  try {
    const result = await ExploreService.getListForMap(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// // 지역에 따른 query를받아 검색
// router.get("/getregionlist", async (req, res, next) => {
//   // req.body = query
//   // res =
//   try {
//     const result = await ExploreService.getRegionList(req.query.query);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// });
// 지역에 따른 area_code를받아 검색
router.get("/getregionlist", async (req, res, next) => {
  // req.body = area_code
  // res =
  try {
    const result = await ExploreService.getRegionListByAreaCode(req.query.code);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
router.post("/gettickets", async (req, res, next) => {
  try {
    // req.body = [{ticket_id, ticket_quantity}]
    const result = await ExploreService.getTicketByIds(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// area_code 별 축제 추천
router.get("/recommends/:code", async (req, res, next) => {
  try {
    const code = Number(req.params.code);
    const result = await RecommendService.getAreaRecommends(code);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// 추천 축제 리스트
router.get("/recommends", async (req, res, next) => {
  try {
    const result = await RecommendService.getRecommends(req);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
// 축제 추천 토글
router.put("/rec/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const result = await ExploreService.toggleRec(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
