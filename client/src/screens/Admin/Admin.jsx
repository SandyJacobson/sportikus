import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";
import './Admin.css'

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
      <Layout>
      <div className="product-edit">
           <form className='images-form' onSubmit={handleSubmit}>
           <label>ImgURLOne: </label>
            <input
              className="edit-imgURLOne"
              placeholder='Image Link'
              value={product.imgURLOne}
              name='imgURLOne'
              required
              onChange={handleChange}
        />
        <label>ImgURLTwo: </label>
            <input
              className="edit-imgURLTwo"
              placeholder='Image Link'
              value={product.imgURLTwo}
              name='imgURLTwo'
              required
              onChange={handleChange}
        />
        <label>ImgURLThree: </label>
            <input
              className="edit-imgURLThree"
              placeholder='Image Link'
              value={product.imgURLThree}
              name='imgURLThree'
              required
              onChange={handleChange}
            />
          </form>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Name: </label>
          <input
            className="input-name"
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Price: </label>
          <input
            className="input-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Description: </label>
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
          />
           <label>Detail: </label>
          <textarea
            className="textarea-detail"
            rows={10}
            cols={78}
            placeholder='Detail'
            value={product.detail}
            name='detail'
            required
            onChange={handleChange}
          />
          <button type='submit' className="save-button">Submit</button>
      </form>
      </div>
      </Layout>
  );
};

export default Admin;
