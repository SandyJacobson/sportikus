import React from "react";
import Sort from "../../../components/Sort/Sort";
import Search from "../../../components/Search/Search";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">
            <img src="https://svgshare.com/i/Q0d.svg" alt="colliseum logo" />
          </h1>
        </Link>
        <div className="filter-search">
          <Sort onChange={props.onChange} />
          <Search search={props.search} />
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
