import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./Products.css";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

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
        {mappedProducts}
      </div>
    </Layout>
  );
};

export default Products;
