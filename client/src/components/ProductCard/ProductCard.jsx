import React from 'react';
// import './Product.css';
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <>
            <Link className="product" to={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURLOne} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
        </>
    )
}

export default ProductCard