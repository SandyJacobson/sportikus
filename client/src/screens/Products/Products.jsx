import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = (props) => {
  const { allProducts, queriedProducts } = props;
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
      <div className="multi-product-container">
        {mappedProducts}
      </div>
  );
};
export default Products;
