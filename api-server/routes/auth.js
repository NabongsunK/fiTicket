var express = require("express");
var router = express.Router();

const UserService = require("../services/user.service");

// 인증번호받기
router.post("/getauthnum", async (req, res, next) => {
  // req.body = {login_id,phone_number}
  // res = {id,current_time,expiration_time,count,authentication_number}
  try {
    const result = await UserService.getAuth(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 인증확인
router.post("/doauth", async (req, res, next) => {
  // req.body = {login_id,phone_number,authentication_number}
  // res = {check}
  try {
    const result = await UserService.doAuth(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 네이버 SMS
router.post("/postsms", async (req, res, next) => {
  // req.body =
  // res =
  try {
    const result = await UserService.postSms();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
