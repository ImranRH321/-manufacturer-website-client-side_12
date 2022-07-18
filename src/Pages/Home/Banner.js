import React from "react";

const Banner = () => {
    const b0 = 'https://img.freepik.com/premium-photo/builders-with-laptop-tools_1401-3150.jpg?w=996';
    const b1 = 'https://media.istockphoto.com/photos/full-frame-shot-of-various-hand-tools-arranged-on-wood-picture-id614836688?b=1&k=20&m=614836688&s=170667a&w=0&h=xRBbCmrc-ylaniPc5TLA6yS4NMUcSytx99PrAxAJP3M=';
    const b2 = 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?cs=srgb&dl=pexels-pixabay-162553.jpg&fm=jpg';
    const b3 = 'https://thumbs.dreamstime.com/b/house-made-tools-14096590.jpg';
    return (
    <div>
      <div class="carousel w-full h-screen">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={b0} class="w-full" alt=""/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={b1} class="w-full" alt=""/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={b2} class="w-full" alt=""/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src={b3} class="w-full" alt="loading"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
