import React from "react";
import { Link } from "react-router-dom";
import '../Home/style.css'

const Service = ({ service}) => {
  const { name,  _id, img, price, description, minimumQuantity, availableQuantity } =
    service;

  return (
    <div  class="card md:max-w-96 bg-base-100 shadow-xl border-double border-2 border-purple-600 ">
      <figure className="p-5">
        <img className="hover:w-50 imgDiv " src={img} alt="Shoes" />
      </figure>
      <div  class="card-body text-left serviceContent">
        <h2 class="card-title text-success text-2xl">{name}</h2>
        <p className="">Price:  <span className="text-lg">${price}</span></p>
        <p className="">{description.slice(0,50)}</p>
        <p>MinimumQuantity: {minimumQuantity}</p>
        <p>AvailableQuantity: {availableQuantity}</p>
        <div class="card-actions w-full">
          <Link class="btn btn-success text-black mt-2 w-full" to={`/details/${_id}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
