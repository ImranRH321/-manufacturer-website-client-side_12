import React from "react";

const Discount = () => {
  return (
    <div class="hero min-h-screen text-white">
      <div class="hero-content flex-col lg:flex-row ">
        <div>
              <img
          src="https://htmldemo.net/lukas/lukas/assets/img/extra/wheels.png"
          class="max-w-sm rounded-lg shadow-2xl"
      alt=""  />
        </div>
        <div>
          <h1 class="text-5xl font-bold">FLASH DEALS</h1>
          <h1 class="text-5xl font-bold">HURRY UP AND GET</h1>
          <h1 class="text-5xl font-bold">25% DISCOUNT</h1>

          <button class="btn btn-primary mt-5">AddtoCart</button>

          <div class="overflow-x-auto mt-5">
            <table class=" w-full w-3/5 mx-auto">
              <thead>
                <tr>
                  <th className="font-bold text-3xl ">00</th>
                  <th className="font-bold text-3xl ">00</th>
                  <th className="font-bold text-3xl ">00 </th>
                  <th className="font-bold text-3xl ">00 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-1xl">Days</td>
                  <td className="font-bold text-1xl">Hours</td>
                  <td className="font-bold text-1xl">Minutes</td>
                  <td className="font-bold text-1xl">Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
