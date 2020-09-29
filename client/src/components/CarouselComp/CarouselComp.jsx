import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./CarouselComp.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselComp() {
  return (
    <>
      <div className="carousel-images">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://i.imgur.com/RLEQqiQ.jpg" alt="yoga girl" className="carousel-images" /></Item>
          <Item><img src="https://i.imgur.com/j59wbhK.jpg" alt="baseball player" className="carousel-images" /></Item>
          <Item><img src="https://i.imgur.com/5kCje3A.jpg" alt="soccer player" className="carousel-images" /></Item>
          <Item><img src="https://i.imgur.com/OXtrh1i.jpg" alt="golf player" className="carousel-images" /></Item>
          <Item><img src="https://i.imgur.com/98jg0bu.jpg" alt="tennis player" className="carousel-images" /></Item>
        </Carousel>
      </div>
    </>
  );
}
export default CarouselComp;
// import React, { Component } from 'react';
// import Carousel from 'react-elastic-carousel';
// import './CarouselComp.css';

// export default class App extends Component {
//   state = {
//     items: [
//       { id: 1, title: <img src="https://i.imgur.com/RLEQqiQ.jpg" alt="yoga girl" className="carousel-images" /> },
//       { id: 2, title: <img src="https://i.imgur.com/j59wbhK.jpg" alt="baseball player" className="carousel-images"/> },
//       { id: 3, title: <img src="https://i.imgur.com/5kCje3A.jpg" alt="soccer player" className="carousel-images"/> },
//       { id: 4, title: <img src="https://i.imgur.com/OXtrh1i.jpg" alt="golf player" className="carousel-images"/> },
//       { id: 5, title: <img src="https://i.imgur.com/98jg0bu.jpg" alt="tennis player" className="carousel-images"/> }
//     ]
//   }
//   render() {
//     const { items } = this.state;
//     return (
//       <Carousel>
//           {items.map(item => <div className="carousel-images" key={item.id}>{item.title}</div>)}
//       </Carousel>
//     )
//   }
// }






// import React from "react";
// import Carousel from "./Carousel";

// // Credit for Carousel goes to github.com/abhishek305

// const Carousel = () => {
//   return (
//     <div className="carousel-row">
//       <div class="column">
//         <img src="https://i.imgur.com/RLEQqiQ.jpg" alt="girl on ball" />
//       </div>
//       <div class="column">
//         <img src="https://i.imgur.com/j59wbhK.jpg" alt="baseball player" />
//       </div>
//       <div class="column">
//         <img src="https://i.imgur.com/5kCje3A.jpg" alt="soccer player" />
//       </div>
//       <div class="column">
//         <img src="https://i.imgur.com/OXtrh1i.jpg" alt="golf player" />
//       </div>
//       <div class="column">
//         <img src="https://i.imgur.com/98jg0bu.jpg" alt="tennis player" />
//       </div>
//     </div>
//   );
// };

// export default Carousel;