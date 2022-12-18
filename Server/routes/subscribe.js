const express = require('express');
const SubscribeController = require('../controllers/subscribe');

const router = express.Router();

router.post('/subscribe',SubscribeController.pay)
module.exports=router