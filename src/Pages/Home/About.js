import React from "react";
import "./style.css";

const About = () => {
  return (
    <div>
      <div>
        <div class="hero-overlay bg-green-500 bgImage"></div>
        {/* ---1--- */}
        <div class=" grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-5 px-12 mt-5">
          <div className="text-start mt-3">
            <h1 class="text-5xl font-bold my-5">About Lukas</h1>
            <p class="">
              This is a list of automotive parts mostly for vehicles using
              internal combustion engines which are manufactured components of
              automobiles.
            </p>
            <p className="my-5">
              This category is for components and parts that make up automobile
              (car) bodies including accessories.
            </p>

            <p>
              On motorbikes their main function is to shield the rider from
              wind, though not as completely as in a car, whereas on sports and
              racing motorcycles the main function is reducing drag when the
              rider
            </p>
          </div>
          <div className="pt-16">
            <img
              src="https://htmldemo.net/lukas/lukas/assets/img/banner/a-1.jpg"
              class="max-w-sm rounded-lg shadow-2xl w-96"
              alt=""
            />
          </div>
        </div>
        {/* ---2--- */}
        <div class="h-[550px] grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-5 px-12 mt-14">
          <div className="pt-16">
            <iframe
              width="450"
              height="315"
              src="https://www.youtube.com/embed/S-UcVwzrAqo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="text-start">
            <h1 class="text-5xl font-bold my-5">Our mission</h1>
            <p class="">
              This is a list of automotive parts mostly for vehicles using
              internal combustion engines which are manufactured components of
              automobiles.
            </p>
            <p className="my-5">
              This category is for components and parts that make up automobile
              (car) bodies including accessories.
            </p>

            <p>
              On motorbikes their main function is to shield the rider from
              wind, though not as completely as in a car, whereas on sports and
              racing motorcycles the main function is reducing drag when the
              rider
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
