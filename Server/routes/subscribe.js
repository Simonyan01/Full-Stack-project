const express = require('express');
const SubscribeController = require('../controllers/subscribe');

const router = express.Router();

router.post('/',SubscribeController.pay)
module.exports=router