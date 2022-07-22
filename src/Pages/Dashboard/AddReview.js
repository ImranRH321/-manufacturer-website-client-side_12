import React from "react";

const AddReview = () => {
  return (
    <div className="mt-6">
      <div class="rating">
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" checked />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
      </div>
      <p className="font-bold text-1xl">Your Ratting</p>
      <input
        type="number"
        placeholder="number 1 - 5"
        class="input input-bordered input-sm w-full max-w-xs"
      />
      <br /> <br />
      <p className="font-bold text-2xl">Your Review</p>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered py-14 input-lg w-full max-w-xs"
      />
      <br />
      <button type="submit" class="btn btn-active btn-primary my-3">
        Checkout
      </button>
    </div>
  );
};

export default AddReview;
