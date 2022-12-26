const httpStatusCode = require('../libs/constants/http-Status-Codes');
const config = require('../config/configs');
const stripe = require('stripe')(config.SECRET_KEY)

class SubscribeController {
    static async pay(req, res) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: "usd"
            });

            res.send({
                clientSecret: paymentIntent.client_secret
            }).status(httpStatusCode.OK);
        } catch (err) {
            res.status(err.statusCode).json({ message: err.message });
        }
    }

    static async getConfig(req, res) {
        res.send({
            publishableKey: config.PUBLIC_KEY,
        });
    }
}

module.exports = SubscribeController;