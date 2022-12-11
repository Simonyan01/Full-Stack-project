const express = require('express');
const AuthRoute = require('./auth');
const router = express.Router();


router.use('/auth', AuthRoute);
// router.use('/movie',MovieRoute);
module.exports = router;