import React from "react";
import Layout from '../../components/shared/Layout/Layout';
import About from "../../components/About/About";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import SalesAd from "../../components/SalesAd/SalesAd";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div>
        <CarouselComp />
        <About />
        <SalesAd />
      </div>
    </Layout>
  );
};

export default Home;
