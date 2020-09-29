import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <img src="https://svgshare.com/i/Q0d.svg" alt="colliseum logo" />
        </h1>

        <a href="#Products">Products</a>
        <a href="#Admin">Admin</a>
      </div>
    </header>
  );
};

export default Header;
