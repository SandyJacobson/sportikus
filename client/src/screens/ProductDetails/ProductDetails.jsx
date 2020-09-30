import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";
import DeleteProduct from "../../components/DeleteProduct/DeleteProduct";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>... Not Loading</h1>;
  }

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.imgURLOne} alt={product.name} style={{height: "200px", width: "200px"}} />
        <img src={product.imgURLTwo} alt={product.name}  style={{height: "200px", width: "200px"}} />
        <img src={product.imgURLThree} alt={product.name} style={{height: "200px", width: "200px"}} />
      </div>
      <ul>
        <li className="list list-name">{product.name}</li>
        <li className="list list-price">${product.price}</li>
        <li className="list">{product.description}</li>
        <li className="list">{product.detail}</li>
      </ul>
      <button className="edit-button">
        <Link className="edit-link" to={`/products/${product._id}/edit`}>
          Edit
              </Link>
      </button>
      <DeleteProduct product={product} />
    </div>
  );
};

export default ProductDetails;
