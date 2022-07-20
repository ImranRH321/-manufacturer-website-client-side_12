import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name,  _id, img, price, description, minimumQuantity, availableQuantity } =
    service;
    console.log('id  000000000', _id);
  return (
    <div class="card md:max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body text-left">
        <h2 class="card-title">{name}</h2>
        <p className="">Price: {price}</p>
        <p className="">{description.slice(0,50)}</p>
        <p>MinimumQuantity: {minimumQuantity}</p>
        <p>AvailableQuantity: {availableQuantity}</p>
        <div class="card-actions w-full">
          {/* <button class="btn btn-primary w-full">Buy Now</button> */}
          <Link class="btn btn-primary w-full" to={`/details/${_id}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
