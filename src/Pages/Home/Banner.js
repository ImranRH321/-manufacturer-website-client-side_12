import React from "react";

const Banner = () => {
  const b0 =
    "https://c4.wallpaperflare.com/wallpaper/832/138/523/abstract-car-composite-exploded-view-diagram-wallpaper-preview.jpg";
  const b1 =
    "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-wy9zzx-887272-Preview.webp";
  const b2 = "https://wallpapercave.com/wp/wp4043219.jpg";
  const b3 = "https://wallpapercave.com/wp/wp4043214.jpg";

  const images = [
    "https://c4.wallpaperflare.com/wallpaper/832/138/523/abstract-car-composite-exploded-view-diagram-wallpaper-preview.jpg",
    "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-wy9zzx-887272-Preview.webp",
    "https://wallpapercave.com/wp/wp4043219.jpg",
    "https://wallpapercave.com/wp/wp4043214.jpg",
  ];
  let imgIndex = 0;
  const imgElement = document.getElementById("slider-img");
  setInterval(() => {
    if (imgIndex >= images.length) {
      imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute("src", imgUrl);
    imgIndex++;
  }, 3000);
  return (
    <div>
      <div class="carousel w-full h-screen">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            id="slider-img"
            src="https://wallpaperaccess.com/full/2948004.jpg"
            class="w-full"
            alt=""
          />
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
          <img src={b3} class="w-full" alt="" />
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
          <img src={b2} class="w-full" alt="" />
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
          <img src={b1} class="w-full" alt="loading" />
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
