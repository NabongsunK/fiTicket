var express = require("express");
var router = express.Router();

const ExploreService = require("../services/explore.service");

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
module.exports = router;
