import React, { useState, useEffect } from "react";
import { getProducts } from "../../../services/products";
import Sort from "../../../components/Sort/Sort";
import Search from "../../../components/Search/Search";
import { AZ, ZA, lowestFirst, highestFirst } from "../../../utils/sort";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState(false);
  const [sortType, setSortType] = useState([]);
  const [reset, setReset] = useState(false);
  // const { allProducts, setAllProducts } = props;

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, [reset]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "price-ascending":
        setAllProducts(lowestFirst(allProducts));
        break;
      case "price-descending":
        setAllProducts(highestFirst(allProducts));
        break;
      case "name-ascending":
        setAllProducts(AZ(allProducts));
        break;
      case "name-descending":
        setAllProducts(ZA(allProducts));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setReset(!reset);
    }
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(event.target.value);
    // setAllProducts(newQueriedProducts)
    setQueriedProducts(newQueriedProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const products = queriedProducts ? queriedProducts : allProducts;

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">
            <img src="https://svgshare.com/i/Q0d.svg" alt="colliseum logo" />
          </h1>
        </Link>
        <div className="filter-search">
          <Sort onSubmit={handleSubmit} onChange={handleSort} />
          <Search onSubmit={handleSubmit} onChange={handleSearch} />
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
