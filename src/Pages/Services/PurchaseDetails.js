import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useServiceDetails from "../../Hooks/useServiceDetails";
import { toast } from "react-toastify";

const PurchaseDetails = () => {
  const { serviceId } = useParams();
  const [services] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  // const [name, price] = services;
  // console.log(name, price);

  //  console.log(user);
  //  console.log(services,'services');

  const handleButton = () => {
    const orders = {
      userName: user.displayName,
      userEmail: user.email,
      userProductName: services[0].name,
      img: services[0]?.img,
      minimum: services[0]?.minimumQuantity,
      available: services[0]?.availableQuantity,
      price: services[0]?.price,
    };
    console.log(orders, "order  data");

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        toast.success("successfully Order ");
      });
  };

  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="" src={services[0]?.img} alt="Album" />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title font-bold text-purple-600">
            {services[0]?.name}
          </h2>
          <h2 class="card-title font-bold text-black-300">
            Price: {services[0]?.price}
          </h2>
          <h2 class="card-title font-bold">
            <small>MinimumQuantity:{services[0]?.minimumQuantity}</small>
          </h2>
          <h2 class="card-title font-bold">
            <small>AvailableQuantity: {services[0]?.availableQuantity}</small>
          </h2>
          <h2 class="card-title">
            <small>{services[0]?.description}</small>
          </h2>
          <div>
            <Link
              to="/dashboard/orders"
              onClick={handleButton}
              type="submit"
              class="btn btn-active btn-primary"
            >
              PurChase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
