import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [proceeding, setProcecing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, userName, userEmail } = order;

  useEffect(() => {
    fetch("https://manufacturers.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcecing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcecing(false);
    } else {
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed ");
      setCardError("");
      //store payment on database 
      const payment = {
        order: _id, 
        transactionId: paymentIntent.id
      }
      fetch(`https://manufacturers.herokuapp.com/payment/${_id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setProcecing(false);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-2  btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 font-bold">{cardError}</p>}
      {success && (
        <div className="text-green-500 font-bold">
          <p>{success}</p>
          <p className="text-orange-500 font-bold">{transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
