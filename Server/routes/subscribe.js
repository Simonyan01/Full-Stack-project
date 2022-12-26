const express = require('express');
const SubscribeController = require('../controllers/subscribe');

const router = express.Router();

router.post('/',SubscribeController.pay)
router.get('/',SubscribeController.getConfig)
module.exports=router