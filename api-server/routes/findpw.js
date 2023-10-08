var express = require("express");
var router = express.Router();

const UserService = require("../services/user.service");

//비밀번호변경
router.post("/change", async (req, res, next) => {
  // req.body={login_id, newPassword}
  try {
    const result = await UserService.changePw(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 비밀번호 변경시 인증번호 발급
router.post("/getauth", async (req, res, next) => {
  try {
    const result = await UserService.findPwGetAuth(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
