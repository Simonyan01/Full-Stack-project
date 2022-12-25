import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from './Subscribe';

export default function StripeContainer() {
    const PUBLIC_KEY = (process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const stripePromise = loadStripe(PUBLIC_KEY)

    return (
        <Elements stripe={stripePromise} >
            <Subscribe />
        </Elements>
    )
}
