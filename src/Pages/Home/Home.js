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
