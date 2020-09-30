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
    <Layout>
      <div className="product-details">
        <div className="product-images">
          <img src={product.imgURLOne} alt={product.name} />
          <img src={product.imgURLTwo} alt={product.name} />
          <img src={product.imgURLThree} alt={product.name} />
        </div>
        <ul>
          <li>{product.name}</li>
          <li>{product.price}</li>
          <li>{product.description}</li>
          <li>{product.detail}</li>
        </ul>
        <button className="edit-button">
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
            Edit
              </Link>
          </button>
        <DeleteProduct product={product}/>
      </div>
    </Layout>
  );
};

export default ProductDetails;
