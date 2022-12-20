const SubscribeService = require('../services/subscribe');
const httpStatusCode = require('../libs/constants/http-Status-Codes');
const config = require('../config/configs');
const stripe=require('stripe')(config.SECRET_KEY)

class SubscribeController {
    static async pay(req, res) {
        try {
           await stripe.charges.create({
                amount: req.body.amount,
                source: req.body.stripeTokenId,
                currency: 'USD'
            })
            await SubscribeService.pay();
            res.json({message:"successful charged"}).status(httpStatusCode.OK);
        } catch (err) {
            res.status(err.status).json({message: err.message});
        }
    }
}

module.exports = SubscribeController;