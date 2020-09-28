import React from "react";
import { Link } from 'react-router-dom';
import "./SalesAd.css";

const SalesAd = () => {
  return (
    <div className="image-container">
      <img
        src="https://i.imgur.com/nn1vsND.png"
        alt="white nike"
        className="image"
      />
      <img
        src="https://i.imgur.com/IGCLtKO.png"
        alt="dude working out"
        className="image"
      />
      <img
        src="https://i.imgur.com/NJifMVE.png"
        alt="boxing bag"
        className="image"
      />

      <div className="sales-div">
        <h2 className="sales-title">LABOR DAY SALE</h2>
        <p className="discount">30% off gym equipment</p>
        <Link to="/products">
          <button type="button" className="shop-sale">SHOP SALE</button>
        </Link>
      </div>
    </div>
  );
};

export default SalesAd;
