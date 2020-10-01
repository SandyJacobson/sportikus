import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/products";
import "./EditProduct.css";

const EditProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURLOne: "",
    imgURLTwo: "",
    imgURLThree: "",
    description: "",
    detail: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <div className="product-edit">
      <div className="image-div-edit">
        <form className='image-form' onSubmit={handleSubmit}>
          <label>ImgURLOne: </label> <br />
          <input
            className="edit-imgURLOne"
            placeholder="Image Link"
            value={product.imgURLOne}
            name="imgURLOne"
            required
            onChange={handleChange}
          />{" "}
          <br />
          <label>ImgURLTwo: </label> <br />
          <input
            className="edit-imgURLTwo"
            placeholder="Image Link"
            value={product.imgURLTwo}
            name="imgURLTwo"
            required
            onChange={handleChange}
          />{" "}
          <br />
          <label>ImgURLThree: </label> <br />
          <input
            className="edit-imgURLThree"
            placeholder="Image Link"
            value={product.imgURLThree}
            name="imgURLThree"
            required
            onChange={handleChange}
          />{" "}
          <br />
        </form>
      </div>
      <div className="content-div-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <label>Name: </label> <br />
          <input
            className="input-name-edit"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />{" "}
          <br />
          <label>Price: </label> <br />
          <input
            className="input-price-edit"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            autoFocus
            onChange={handleChange}
          />{" "}
          <br />
          <label>Description: </label> <br />
          <textarea
            className="textarea-description-edit"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />{" "}
          <br />
          <label>Detail: </label> <br />
          <textarea
            className="textarea-detail-edit"
            rows={10}
            cols={78}
            placeholder="Detail"
            value={product.detail}
            name="detail"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
