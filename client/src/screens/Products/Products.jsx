import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Link } from "react-router-dom";
import ProductCard from '../../components/ProductCard/ProductCard';
import Sort from '../../components/Sort/Sort';
import Search from '../../components/Search/Search';
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Layout from "../../components/shared/Layout/Layout";
import "./Products.css";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts))
        break
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts))
        break
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts))
        break
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const productsJSX = queriedProducts.map((product, index) =>
    <ProductCard
      _id={product._id}
      name={product.name}
      imgURL={product.imgURLOne}
      price={product.price}
      key={index}
    />
  )

  const mappedProducts = allProducts.map((product, idx) => {
    return (
      <div key={idx} className="single-product">
        <Link to={`/products/${product._id}`}>
          <img src={product.imgURLOne} alt={product.name} />
        </Link>
        <ul key={idx}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      </div>
    );
  });

  return (
    <Layout>
      <div className="multi-product-container">
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
        {mappedProducts}
      <div className="products">
        {productsJSX}
      </div>
      </div>
    </Layout>
  );
};

export default Products;
