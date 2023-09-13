var express = require('express');
var router = express.Router({mergeParams: true});

const authRouter = require('./auth');
const loginRouter = require('./login');
const exploreRouter = require('./explore');
router.use('/auth', authRouter);
router.use('/login', loginRouter);
router.use('/explore', exploreRouter)


module.exports = router;
