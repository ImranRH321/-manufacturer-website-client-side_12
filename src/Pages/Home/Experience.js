import React from "react";

const Experience = () => {
  return (
    <div className="hero min-h-screen	text-white ">
      <div>
        <h1 className="text-6xl text-center text-white font-bold my-5">
          MILLIONS BUSINESS TRUST US{" "}
        </h1>
        <h1 className="text-2xl text-center my-5 font-bold">
          TRY TO UNDERSTAND USERS EXPECTATION
        </h1>
        <div class="divider">Rx</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-black">
          {/* ------------------ */}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-4xl">
                <i class="fa-solid fa-flag-usa text-green-800"></i>
              </p>
              <h3 className="text-5xl my-2">50+</h3>
              <p className="font-bold">Countries</p>
            </div>
          </div>

          {/* ------------------ */}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-4xl">
                <i class="fa-solid fa-check-double text-green-800"></i>
              </p>
              <h3 className="text-5xl my-2">30+</h3>
              <p className="font-bold">Complete Projects</p>
            </div>
          </div>

          {/* ------------------ */}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-4xl">
                <i class="fa-solid fa-people-group text-green-800"></i>
              </p>
              <h3 className="text-5xl my-2 ">100+</h3>
              <p className="font-bold">Happy Client</p>
            </div>
          </div>

          {/* ------------------ */}
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-4xl">
                <i class="fa-solid fa-thumbs-up text-green-800"></i>
              </p>
              <h3 className="text-5xl my-2 ">22+</h3>
              <p className="font-bold">FeedBeak</p>
            </div>
          </div>
        </div>
        {/* ---next footer-- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 content-center">
          {/* ------------------ */}
          <div class="card ">
            <div class="card-body ">
              <h3 className="text-3xl my-2 p-4 font-bold text-success">
                Have any question about us or get a products request ?
              </h3>
              <p className="font-bold text-2xl">Dot't hesitate to Contact us</p>
            </div>
          </div>
          <div class="card sm-none">
            <div class="card-body pt-24 ">
              <button class="btn btn-primary w-1/2 mx-auto">Request for quote</button>
              <button class="btn btn-black w-1/2 mx-auto">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
