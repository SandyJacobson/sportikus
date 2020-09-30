import React from "react";
import About from "../../components/About/About";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import SalesAd from "../../components/SalesAd/SalesAd";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <CarouselComp />
      <About />
      <SalesAd />
    </div>
  );
};

export default Home;
