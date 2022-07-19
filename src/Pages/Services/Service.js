import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, id, img, price, description, minimumQuantity, availableQuantity } =
    service;
  return (
    <div class="card md-max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body text-left p-3">
        <h2 class="card-title">{name}</h2>
        <p className="m-0">Price: {price}</p>
        <p className="m-0">{description.slice(0,50)}</p>
        <p>MinimumQuantity: {minimumQuantity}</p>
        <p>AvailableQuantity: {availableQuantity}</p>
        <div class="card-actions justify-end px-0">
          {/* <button class="btn btn-primary w-full">Buy Now</button> */}
          <Link class="btn btn-primary w-full" to={`/service/${id}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
