const express = require('express');
// const SubscribeRoute = require("./subscribe")
const AuthRoute = require('./auth');
const MovieRoute = require('./movie')
const router = express.Router();


router.use('/auth', AuthRoute);
router.use('/movie', MovieRoute);
// router.use('/subscribe', SubscribeRoute)
module.exports = router;