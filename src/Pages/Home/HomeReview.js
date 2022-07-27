import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "../Home/style.css";

const HomeReview = () => {
  const [homeRating, setHomeRating] = useState();
  const [rating, setRating] = useState(0);

  const changeRating = newRating => {
    setRating(newRating);
  };

  fetch("https://manufacturers.herokuapp.com/rating")
    // , {
    //   method: "GET",
    //   headers: {
    //    authorization: `Bearer ${localStorage.getItem('token')}`
    //   },
    // }
    .then(res => res.json())
    .then(data => {
      setHomeRating(data);
    });

  // console.log(homeRating,'rating');

  return (
    <div className="my-14 ">
      <h1 className="text-5xl my-5 text-center font-bold">Customers Review </h1>
      <div className="grid grid:cols-1 md:grid-cols-3 gap-5">
        {homeRating?.slice(0.6)?.map(review => (
          <div class="card w-90 bgx shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{review?.name}</h2>
              <StarRatings
                rating={review?.star}
                starRatedColor="orange"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
              />
              <h2 class="card-title">{review?.email}</h2>
              <div class="divider"></div>
              <h2 class="card-title">{review?.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
