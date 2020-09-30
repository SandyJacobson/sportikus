import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURLOne: "",
    imgURLTwo: "",
    imgURLThree: "",
    description: "",
    detail: "",
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/`} />
  }

  return (
    <div className="product-edit" style={{ width: "800px" }} style={{ padding: "30px" }}> 
      <form onSubmit={handleSubmit} style={{ width: "300px", float: "left" }}>
        <label>ImgURLOne: </label>
        <input
          className="edit-imgURLOne"
          placeholder='Image Link'
          value={product.imgURLOne}
          name='imgURLOne'
          required
          onChange={handleChange}
        /><br />
        <label>ImgURLTwo: </label>
        <input
          className="edit-imgURLTwo"
          placeholder='Image Link'
          value={product.imgURLTwo}
          name='imgURLTwo'
          required
          onChange={handleChange}
        /><br />
        <label>ImgURLThree: </label>
        <input
          className="edit-imgURLThree"
          placeholder='Image Link'
          value={product.imgURLThree}
          name='imgURLThree'
          required
          onChange={handleChange}
        /><br />
      </form>
      <form className="edit-form" onSubmit={handleSubmit} style={{ width: "300px", float: "right" }}>
        <label>Name: </label><br />
        <input
          className="input-name"
          placeholder='Name'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        /><br />
        <label>Price: </label><br />
        <input
          className="input-price"
          placeholder='Price'
          value={product.price}
          name='price'
          required
          autoFocus
          onChange={handleChange}
        /><br />
        <label>Description: </label><br />
        <textarea
          className="textarea-description"
          rows={10}
          cols={50}
          placeholder='Description'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        /><br />
        <label>Detail: </label><br />
        <textarea
          className="textarea-detail"
          rows={10}
          cols={50}
          placeholder='Detail'
          value={product.detail}
          name='detail'
          required
          onChange={handleChange}
        />
        <button type='submit' className="save-button">Save</button>
      </form>
    </div>
  );
};

export default Admin;
