import React from "react";

const KindOfParts = () => {
  const myStyle = {
    backgroundImage: ` url(${"https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div class=" w-full h-3/5 p-5 bg-violet-300	">
        <div>
          <h1 className="text-5xl font-bold my-14">
            ALL KINDS OF PARTS THAT YOU <br /> NEED CAN FIND HERE
          </h1>
          <button className="btn bg-yellow-500 text-black my-4">
            Shop now{" "}
          </button>
        </div>
        <div class="w-full">
          <img
            src="https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png"
            class="w-full"
            alt=""
          />
        </div>
      </div>
      {/* _________ */}
      <div class="flex">
        {/* <div className="grid grid-cols-1">
          <img className="w-[45%]" src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-5.jpg" alt="" />
         </div>
         <div>
          <img className="w-[45%]" src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-6.jpg" alt="" />
         </div> */}

        <div>
          <figure>
            <img
              src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-5.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-6.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default KindOfParts;
