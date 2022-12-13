/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Subscribe.css"

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

export default function Subscibe() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }
  //   setIsProcessing(true);

  //   const { error, paymentMethod } = await stripe.confirmPayment({
  
  //     type: "card",
  //     card: elements.getElement(CardElement)
  //   });

  //   // if (!error) {
  //   //   const { id } = paymentMethod;
  //   //   const { data } = await fetch("http://localhost:8080/api/v1/subscribe", { id, amount: 1000 });
  //   //   console.log(data);
  //   //   success(data);
  //   // } else if (error.type === "card_error" || error.type === "validation_error") {
  //   //   setMessage(error.message);
  //   // } else {
  //   //   setMessage("An unexpected error occured.");
  //   // }
  //   setIsProcessing(false);
  // };


  return (
    <>
      <form className='card-container' >
        <fieldset className='FormGroup'>
          <div className='FormRow'>
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button disabled={isProcessing || !stripe || !elements} className='button'>Оплатить за подписку</button>
        <span id="button-text">
          {isProcessing ? "Обработка... " : "Заплатить сейчас"}
        </span>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  )
};
