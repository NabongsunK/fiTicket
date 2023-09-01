var express = require('express');
var router = express.Router();


const AuthService = require('../services/board.service');

// 사용자 정보 입력
router.post('/getauthnum', async (req, res, next) => {
  // req.body = {pid,id,phoneNumber,counter}
  // res = {pid,currentTime,expirationTime,counter,authNum}
  try{
    const result= await AuthService.auth(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});

module.exports = router;
