import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";
import DeleteProduct from "../../components/DeleteProduct/DeleteProduct";
import EditProduct from "../../components/EditProduct/EditProduct";
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
      // CODE HERE
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
        {/* <button>Edit</button> */}
        <EditProduct product={product} />
        <DeleteProduct product={product}/>
      </div>
    </Layout>
  );
};

export default ProductDetails;
