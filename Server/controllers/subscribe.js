const SubscribeService = require('../services/subscribe');
const httpStatusCode = require('../libs/constants/http-Status-Codes');
const config = require('../config/configs');
const stripe=require('stripe')(config.SECRET_KEY)

class SubscribeController {
    static async pay(req, res) {
        try {
           await stripe.charges.create({
                amount: 1,
                source: req.body.stripeTokenId,
                currency: 'usd'
            })
            await SubscribeService.pay();
            res.json({massage:"successful charged"}).status(httpStatusCode.OK);
        } catch (err) {
            res.status(err.status).json({message: err.message});
        }
    }
}

module.exports = SubscribeController;