import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Link } from "react-router-dom";
import ProductCard from '../../components/ProductCard/ProductCard';
import Sort from '../../components/Sort/Sort';
import Search from '../../components/Search/Search';
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Layout from "../../components/shared/Layout/Layout";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState(false);
  const [sortType, setSortType] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, [reset]);

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "price-ascending":
        setAllProducts(lowestFirst(allProducts))
        break
      case "price-descending":
        setAllProducts(highestFirst(allProducts))
        break
      case "name-ascending":
        setAllProducts(AZ(allProducts))
        break
      case "name-descending":
        setAllProducts(ZA(allProducts))
        break
      default:
        break
    }
  }
  
  const handleSearch = event => {
    if (event.target.value === "") {
      setReset(!reset)
    }
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(event.target.value)
    // setAllProducts(newQueriedProducts)
    setQueriedProducts(newQueriedProducts)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  const productsJSX = allProducts.map((product, index) =>
    <ProductCard
      _id={product._id}
      name={product.name}
      imgURL={product.imgURLOne}
      price={product.price}
      key={index}
    />
  )

  const products = queriedProducts ? queriedProducts : allProducts;

  const mappedProducts = products.map((product, idx) => {
    return (
      <div className="container-separator-products">
        <div className="container-products">
          <div className="single-product">
            <div key={idx}>
              <Link to={`/products/${product._id}`}>
                <img src={product.imgURLOne} alt={product.name} className="image-products" />
              </Link>
            </div>
          </div>
        </div>
        <div className="name-price-products">
          <ul key={idx} className="ul-products">
            <h5 className="font-products">{product.name}</h5>
            <h5 className="font-products">${product.price}</h5>
          </ul>
        </div>
      </div>


    );
  });
  return (
    <Layout>
      <div className="search-sort-products">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
      </div>

      <div className="multi-product-container">
        {mappedProducts}
      </div>
    </Layout>
  );
};
export default Products;
