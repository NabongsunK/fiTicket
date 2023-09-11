var express = require('express');
var router = express.Router({mergeParams: true});

const authRouter = require('./auth');
const loginRouter = require('./login');
router.use('/auth', authRouter);
router.use('/login', loginRouter);


module.exports = router;
