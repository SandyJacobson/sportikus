import React, { useState } from "react";
import "./ToggleImages.css";

const ToggleImages = (props) => {
  const { product } = props;
  const [toggled, setToggled] = useState(false);

  return (
    <div className="images-container">
      <div className="big-image-container">
        <img
          src={!toggled ? product.imgURLOne : toggled}
          alt="product"
          className="big-image"
        />
      </div>
      <div className="little-image-container">
        <div className="little-image-one">
          <img
            className="little-image"
            src={product.imgURLOne}
            alt={product.name}
            onClick={(e) => setToggled(e.target.src)}
          />
        </div>
        <div className="little-image-two">
          <img
            className="little-image"
            src={product.imgURLTwo}
            alt={product.name}
            onClick={(e) => setToggled(e.target.src)}
          />
        </div>
        <div className="little-image-three">
          <img
            className="little-image"
            src={product.imgURLThree}
            alt={product.name}
            onClick={(e) => setToggled(e.target.src)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleImages;
