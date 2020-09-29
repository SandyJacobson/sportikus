import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">
          <img src="https://svgshare.com/i/Q0d.svg" alt="colliseum logo" />
        </h1>
      </Link>

      <Link to="/products">Products</Link>
      <a href="#Admin">Admin</a>
    </header>
  );
};

export default Header;
