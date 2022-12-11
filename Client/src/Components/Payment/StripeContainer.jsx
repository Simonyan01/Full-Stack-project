import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from './Subscribe';

const PUBLIC_KEY = "pk_test_51MD0P0HTl6hKCtntLLQh99iPJGvf7GGMVPszwVFrJ7xRV60YwLPUJIekhqv3vjhVW44k2CgxtvBpd8oGR4OI3FNT00IvQBPMsT"

const stripePromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    const [status, setStatus] = useState("ready");

    if (status === "success") {
        return <div>Congrats</div>
    }
    return (
        <Elements stripe={stripePromise} >
            <Subscribe success={() => {
                setStatus("success")
            }} />
        </Elements>
    )
}
