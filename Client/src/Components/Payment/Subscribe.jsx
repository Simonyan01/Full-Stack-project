/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Loading from '../Loading/Load';
import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import Finality from "./Finality";
import "./Subscribe.css"

const SUBSCRIBE_URL = "http://localhost:8080/api/v1/subscribe";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "17px",
      letterSpacing: "0.40px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

const Subscibe = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  // const SECRET_KEY = (process.env.REACT_APP_STRIPE_SECRET_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return
    }
    setIsProcessing(true);

    const { error, clientSecret } = await fetch(SUBSCRIBE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentMethodType: 'card',
        currency: 'USD',
      })
    }).then((res) => res.json());
    if (error) {
      return error.message
    }

    const { err } = await stripe.confirmCardPayment(
      clientSecret, {
      paymentMethod: {
        type: "card",
        card: elements.getElement(CardElement),
      },
      confirmParams: {
        return_url: `${window.location.origin}/complete`,
      }
    })

    if (err.type === "card_error" || err.type === "validation_error") {
      setMessage(err.message);
    } else {
      setMessage("Произошла непредвиденная ошибка.");
    }
    setIsProcessing(false);
  }

  return (
    <>
      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : success ?
        <Finality /> : (
          <form onSubmit={handleSubmit} className='card-container'>
            <fieldset className='FormGroup'>
              <div className='FormRow'>
                <CardElement
                  options={CARD_OPTIONS}
                />
              </div>
            </fieldset>
            <button disabled={isProcessing || !stripe || !elements} className='button'> {isProcessing ? "Обработка..." : "Заплатить сейчас"}</button>
            {message && <div id="payment-message">{message}</div>}
          </form>
        )}
    </>
  )
}

export default Subscibe