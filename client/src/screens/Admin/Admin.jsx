import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";
import "./Admin.css";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURLOne: "",
    imgURLTwo: "",
    imgURLThree: "",
    description: "",
    detail: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="title-edit-container">
      <h2 className="title">Create Product</h2>
      <div className="edit-container">
        <form className="image-form" onSubmit={handleSubmit}>
          <label className="label">ImgURLOne: </label>
          <br />
          <input
            className="imgURLOne"
            value={product.imgURLOne}
            name="imgURLOne"
            required
            onChange={handleChange}
          />
          <br />
          <label className="label">ImgURLTwo: </label>
          <br />
          <input
            className="imgURLTwo"
            value={product.imgURLTwo}
            name="imgURLTwo"
            required
            onChange={handleChange}
          />
          <br />
          <label className="label">ImgURLThree: </label>
          <br />
          <input
            className="imgURLThree"
            value={product.imgURLThree}
            name="imgURLThree"
            required
            onChange={handleChange}
          />
          <br />
        </form>
        <form className="info-form" onSubmit={handleSubmit}>
          <label className="label">Name: </label>
          <br />
          <input
            className="input-name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <br />
          <label className="label">Price: </label>
          <br />
          <input
            className="input-price"
            value={product.price}
            name="price"
            required
            autoFocus
            onChange={handleChange}
          />
          <br />
          <label className="label">Description: </label>
          <br />
          <textarea
            className="textarea-description"
            rows={10}
            cols={40}
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <br />
          <label className="label">Detail: </label>
          <br />
          <textarea
            className="textarea-detail"
            rows={10}
            cols={40}
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

export default Admin;
