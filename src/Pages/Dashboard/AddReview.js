import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import StarRatings from "react-star-ratings";
import auth from "../../firebase/firebase.init";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [user] = useAuthState(auth);
  const changeRating = newRating => {
    setRating(newRating);
  };

  console.log(rating);
  const handleSubmit = event => {
    event.preventDefault();
    const reviewText = event.target.reviewText.value;
    const reviewBooking = {
      star: rating,
      name: user.displayName,
      email: user.email,
      text: reviewText,
    };
    //  send to the server
    fetch("https://manufacturers.herokuapp.com/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewBooking),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <div className="mt-6">
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />

      <p className="font-bold text-1xl">Your Ratting</p>
      <form onSubmit={handleSubmit}>
        <input
          name="reviewText"
          type="text"
          placeholder="Type here"
          class="input input-bordered py-14 input-lg w-full max-w-xs"
        />
        <br />
        <button type="submit" class="btn px-2 btn-active btn-primary my-3">
          AddReview
        </button>
      </form>
    </div>
  );
};

export default AddReview;
