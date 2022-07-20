import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../Hooks/useServiceDetails";

const PurchaseDetails = () => {
  const { serviceId } = useParams();
  const [services] = useServiceDetails(serviceId);
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
          <div class="card-actions ">
            <button class="btn bg-purple-600 w-1/2">Orders</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
