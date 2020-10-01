import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../services/products";
import DeleteProduct from "../../components/DeleteProduct/DeleteProduct";
import ToggleImages from "../../components/ToggleImages/ToggleImages";
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
      <ToggleImages product={product}/>
      <div className="info-container">
        <ul className="info-list">
          <li className="list list-name">{product.name}</li>
          <li className="list list-price">${product.price}</li>
          <li className="list">{product.description}</li>
          <li className="list">Shown: {product.detail}</li>
        </ul>
        <div className="button-div">
          <button className="edit-button">
            <Link className="edit-link" to={`/products/${product._id}/edit`}>
              EDIT
            </Link>
          </button>
          <DeleteProduct product={product} />
        </div>
        <hr />
        <div className="review-header-contents">
          <h3 className="review-header">Reviews</h3>
        </div>
        <ul className="review-list">
          <li className="list review-title">Title</li>
          <li className="list review-description">Content</li>
          <li className="list review-post-date">Date Posted</li>
          <li className="list more-reviews"><a href="#more">More Reviews</a></li>
        </ul>
      </div>
    </div>
  );
};
export default ProductDetails;
