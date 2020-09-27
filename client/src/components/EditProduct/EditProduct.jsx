import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getProduct, updateProduct } from '../../services/products'

const EditProduct = (props) => {
  const [product, setProduct] = useState({
    name: props.product.name,
    price: props.product.price,
    imgURLOne: props.product.imageURLOne,
    imgURLTwo: props.product.imageURLTwo,
    imgURLThree: props.product.imageURLThree,
    description: props.product.description,
    detail: props.product.detail,
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])


  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = props.match.params
    const updated = await updateProduct(id, product)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/products/${props.match.params.id}`} />
  }

  return (
      <div className="post-edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Name:</label>
          <input
            className="input-name"
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Price:</label>
          <input
            className="input-price"
            placeholder='Price'
            value={product.price}
            name='price'
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Description:</label>
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
           <label>Detail:</label>
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
          <button type='submit' className="save-button">Save</button>
        </form>
       </div>
  );
};

export default EditProduct;