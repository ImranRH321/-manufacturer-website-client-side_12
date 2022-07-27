import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/style.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="my-20">
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="w"
              src="https://wallpaperaccess.com/full/2948004.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w"
              src="https://p4.wallpaperbetter.com/wallpaper/211/491/776/automotive-beetle-black-and-white-buggy-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w"
              src="https://media.gettyimages.com/photos/tools-picture-id184333719?s=612x612"
              alt=""
            />
          </div>
          <div>
            <img
              className="w"
              src="https://wallpapercave.com/wp/wp4043219.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w"
              src="https://c4.wallpaperflare.com/wallpaper/832/138/523/abstract-car-composite-exploded-view-diagram-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w"
              src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-wy9zzx-887272-Preview.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
