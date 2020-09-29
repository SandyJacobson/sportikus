import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">
            <img src="https://svgshare.com/i/Q0d.svg" alt="colliseum logo" />
          </h1>
        </Link>

        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <a href="#Admin">Admin</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
