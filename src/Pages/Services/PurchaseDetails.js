import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../Hooks/useServiceDetails";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";

const PurchaseDetails = () => {
  const { serviceId } = useParams();
  const [services, isLoading] = useServiceDetails(serviceId);
  const { name, price, minimumQuantity, availableQuantity, description, img } =
    services;
  const [toolService, setToolService] = useState(null);
 if(isLoading){
  return <Loading></Loading>
 }
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img className="" src={img} alt="Album" />
        </figure>
        <div class="card-body text-left text-black">
          <h2 class="card-title font-bold text-purple-600">{name}</h2>
          <h2 class="card-title font-bold text-black-300">Price: {price}</h2>
          <h2 class="card-title font-bold">
            <small>MinimumQuantity:{minimumQuantity}</small>
          </h2>
          <h2 class="card-title font-bold">
            <small>AvailableQuantity: {availableQuantity}</small>
          </h2>
          <h2 class="card-title ">
            <small>{description}</small>
          </h2>
          <div>
            <label
              onClick={() => setToolService(services)}
              for="order_modal"
              class="btn btn-primary modal-button"
            >
              Order
            </label>
            {toolService && (
              <BookingModal
                minimumQuantity={minimumQuantity}
                toolService={toolService}
                setToolService={setToolService}
              ></BookingModal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
