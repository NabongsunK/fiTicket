var express = require('express');
var router = express.Router();

const LoginModel = require('../models/user.LoginModel');
const pool = require('../models/pool');

// 로그인 시도
router.post('/signin', async (req, res, next) => {
  try{
    const result= await LoginModel.signIn(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 로그아웃
router.post('/signout', async (req, res, next) => {
  try{
    const result= await LoginModel.signOut(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 회원가입
router.post('/signup', async (req, res, next) => {
  try{
    const result= await LoginModel.signUp(req.body);
    res.json(result);
  }catch(err){
    next(err);
  }
});


module.exports = router;
