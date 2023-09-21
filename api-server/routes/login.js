var express = require("express");
var router = express.Router();

const UserService = require("../services/user.service");

// 로그인 시도
router.post("/signin", async (req, res, next) => {
  try {
    const result = await UserService.signIn(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 로그아웃
router.post("/signout", async (req, res, next) => {
  try {
    const result = await UserService.signOut(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 회원가입
router.post("/signup", async (req, res, next) => {
  try {
    const result = await UserService.signUp(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 유저정보
router.post("/getuser", async (req, res, next) => {
  // req.body = {user_id}
  try {
    const result = await UserService.getUserById(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 유저정보
router.get("/getslt", async (req, res, next) => {
  try {
    const result = await UserService.getSlt();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
