var express = require('express');
var router = express.Router();


const UserService = require('../services/User.service');

// 인증번호받기
router.post('/getauthnum', async (req, res, next) => {
  // req.body = {id,phoneNumber}
  // res = {pid,currentTime,expirationTime,counter,auth}
  try{
    const result= await UserService.getAuth(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 인증확인
router.post('/doauth', async (req, res, next) => {
  // req.body = {id,phoneNumber,auth}
  // res = {check}
  try{
    const result= await UserService.doAuth(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});


module.exports = router;
