import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import '../Home/style.css'

const stripePromise = loadStripe(
  `pk_test_51LLMJnHSBkwSV8IkTMECV2W3r3HUStksNU6eiBNI1wmqSKW7LxERw8L7p7cryCr2UmekZL3zhyqZfaW8YcNXL3EQ00m1zFx96b`
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://manufacturers.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log("payment", order);
  return (
    <div>
      {/* <h2 className="text-2xl font-bold ">Payment Route services {id}</h2> */}
      <div class="card md:w-96 mx-auto bg-base-100 shadow-xl text-black mt-10">
        <div class="card-body ">
          <h2 class="card-title font-bold ">
            {order?.userEmail}
          </h2>
          <h2 class="card-title">
            <small>Please Pay for {order?.userProductName}</small>
          </h2>
          <h2 class="card-title">price: ${order?.price}</h2>
        </div>
      </div>
      <div class="card md:w-96 pay mx-auto bg-white shadow-xl mt-5">
        <div class="card-body py-14">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
