import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const HomeReview = () => {
  const [homeRating, setHomeRating] = useState();
  const [rating, setRating] = useState(0);

  const changeRating = newRating => {
    setRating(newRating);
  };

  fetch("http://localhost:5000/rating")
    .then(res => res.json())
    .then(data => {
      setHomeRating(data);
    });

  // console.log(homeRating,'rating');

  return (
    <div className="mt-14">
      <div className="grid grid:cols-1 md:grid-cols-3 gap-5">
        {homeRating?.map(review => (
          <div class="card w-90 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{review?.name}</h2>
              <StarRatings
                rating={review?.star}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
              />
              <h2 class="card-title">{review?.email}</h2>
              <h2 class="card-title">{review?.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
