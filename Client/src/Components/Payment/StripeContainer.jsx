import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from './Subscribe';

const STRIPE_PUBLIC_KEY = "pk_test_51MD0P0HTl6hKCtntLLQh99iPJGvf7GGMVPszwVFrJ7xRV60YwLPUJIekhqv3vjhVW44k2CgxtvBpd8oGR4OI3FNT00IvQBPMsT"

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)

export default function StripeContainer() {

    return (
        <Elements stripe={stripePromise} >
            <Subscribe />
        </Elements>
    )
}
