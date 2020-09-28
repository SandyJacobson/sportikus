import React from 'react';
import About from '../../components/About/About';
import CarouselComp from '../../components/CarouselComp/CarouselComp';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1>Sportikus</h1>
      <About />
      <CarouselComp />
    </div>
  );
};

export default Home;