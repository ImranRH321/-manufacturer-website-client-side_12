import React from "react";
import Banner from "./Banner";
import Services from "../Services/Services";
import HomeReview from "./HomeReview";
import Experience from "./Experience";
import KindOfParts from "./KindOfParts";
import Footer from "../Shared/Footer";
import Discount from "./Discount";
import TextEditing from "./TextEditing";
import About from "./About";

const Home = () => {
  return (
    <div>
      {/* 
      
        const images = [
    "https://c4.wallpaperflare.com/wallpaper/832/138/523/abstract-car-composite-exploded-view-diagram-wallpaper-preview.jpg",
    "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-wy9zzx-887272-Preview.webp",
    "https://wallpapercave.com/wp/wp4043219.jpg",
    "https://wallpapercave.com/wp/wp4043214.jpg",
    "https://wallpaperaccess.com/full/2948004.jpg"
  ];
      */}
      <Banner></Banner>
      <Services></Services>
       <HomeReview></HomeReview>
      <Experience></Experience>

      <KindOfParts></KindOfParts>
      <About></About>
      <Discount></Discount>
      <TextEditing></TextEditing>
      <Footer></Footer> 
    </div>
  );
};

export default Home;
