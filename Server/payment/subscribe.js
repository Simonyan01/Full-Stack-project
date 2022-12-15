// const express = require("express")
// const configs = require('../config/configs');
// const STRIPE_KEY = configs.STRIPE_KEY
// const stripe = require("stripe")(STRIPE_KEY)
// const bodyParser = require("body-parser")
// const cors = require("cors")

// const app = express()

// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))


// app.post("/", async (req, res) => {
//     console.log("barev");
//     // let { amount, id } = req.body
//     // try {
//     //     const payment = await stripe.paymentIntents.create({
//     //         amount,
//     //         currency: "USD",
//     //         description: "Subscribe",
//     //         payment_method: id,
//     //         confirm: true
//     //     })
//     //     console.log("Payment", payment)
//     //     res.json({
//     //         message: "Payment successful",
//     //         success: true
//     //     })
//     // } catch (error) {
//     //     console.log("Error", error)
//     //     res.json({
//     //         message: "Payment failed",
//     //         success: false
//     //     })
//     // }
// })