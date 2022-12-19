const express = require('express');
const AuthRoute = require('./auth');
const MovieRoute=require('./movie')
const SubscribeRoute=require('./subscribe')

const router = express.Router();

router.use('/auth', AuthRoute);
router.use('/movie',MovieRoute);
router.use('/subscribe',SubscribeRoute)

module.exports = router;