var express = require("express");
var router = express.Router();

const UserService = require("../services/user.service");

//비밀번호변경
router.post("/changepw", async (req, res, next) => {
  try {
    const result = await UserService.changepw(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
