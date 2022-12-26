import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from './Subscribe';

const PUBLIC_KEY = (`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)
const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() { 

    return (
        <Elements stripe={stripePromise} >
            <Subscribe />
        </Elements>
    )
}
