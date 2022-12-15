const express = require("express")
const PaymentController = require("../controllers/payment")

const router = express.Router();

router.post('/subscribe', PaymentController.create)

module.exports = router