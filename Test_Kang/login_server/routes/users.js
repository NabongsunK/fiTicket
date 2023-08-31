var express = require('express');
var router = express.Router();


const user = require('../models/user.AuthModel')

// 사용자 정보 입력
router.post('/getauthnum', async (req, res, next) => {
  // req.body = {pid,id,phoneNumber,counter}
  // res = {pid,currentTime,expirationTime,counter,authNum}
  try{
    const id= await user.insertUser(req.body);
    const result= await user.getAuthNum(Number(id));
    res.json(result);
  }catch(err){
    next(err);
  }
});

module.exports = router;
