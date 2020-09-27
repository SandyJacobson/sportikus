import React from "react";
import { deleteProduct } from "../../services/products";

const DeleteProduct = (props) => {
  return (
    <div>
      <button
        className="delete-button"
        onClick={() => deleteProduct(props.product._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteProduct;
