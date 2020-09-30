import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./CarouselComp.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function CarouselComp() {
  return (
    <>
      <div className="carousel-div">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://i.imgur.com/RLEQqiQ.jpg" alt="yoga girl" className="single-image" /></Item>
          <Item><img src="https://i.imgur.com/j59wbhK.jpg" alt="baseball player" className="single-image" /></Item>
          {/* <Item><img src="https://i.imgur.com/5kCje3A.jpg" alt="soccer player" className="single-image" /></Item> */}
          <Item><img src="https://i.imgur.com/OXtrh1i.jpg" alt="golf player" className="single-image" /></Item>
          <Item><img src="https://i.imgur.com/98jg0bu.jpg" alt="tennis player" className="single-image" /></Item>
        </Carousel>
      </div>
    </>
  );
}
export default CarouselComp;