import React from 'react';

const Service = ({service}) => {
    const {name, img, price, description, minimumQuantity, availableQuantity} = service;
    return (
        <div class="card md-max-w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p className='text-2xl'>Price: {price}</p>
    <p>{description}</p>
    <p>MinimumQuantity{minimumQuantity}</p>
    <p>AvailableQuantity{availableQuantity}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Service;