import React from "react";
import { useHistory } from 'react-router-dom'
import { deleteProduct } from "../../services/products";
import "./DeleteProduct.css";
<<<<<<< HEAD
=======

>>>>>>> 597c42baa80fea4a3b7cef1131e456e975bc7d81

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