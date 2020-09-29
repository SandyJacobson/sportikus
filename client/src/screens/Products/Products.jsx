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
  const [queriedProducts, setQueriedProducts] = useState([]);
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

  // useEffect(() => {
  //   return handleSort(sortType)
  // }, [queriedProducts, sortType])  

  const handleSearch = event => {
    if (event.target.value === "") {
      setReset(!reset)
    }
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(event.target.value)
    setAllProducts(newQueriedProducts)
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

  // const mappedProducts = allProducts.map((product, idx) => {
  //   return (
  //     <div key={idx} className="single-product">
  //       <Link to={`/products/${product._id}`}>
  //         <img src={product.imgURLOne} alt={product.name} />
  //       </Link>
  //       <ul key={idx}>
  //         <li>{product.name}</li>
  //         <li>{product.price}</li>
  //       </ul>
  //     </div>
  //   );
  // });

  return (
    <Layout>
      <div className="multi-product-container">
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
        {/* {mappedProducts} */}
      <div className="products">
          {productsJSX}
          {/* {queriedProducts} */}
      </div>
      </div>
    </Layout>
  );
};

export default Products;
