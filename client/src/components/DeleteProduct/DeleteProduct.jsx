import React from "react";
import { useHistory } from 'react-router-dom'
import { deleteProduct } from "../../services/products";
import "./DeleteProduct.css";

const DeleteProduct = (props) => {
  const history = useHistory()
  console.log(history)

  return (
    <div>
      <button
        className="delete-button"
        onClick={() => {
          deleteProduct(props.product._id)
          history.push('/products')
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default DeleteProduct;