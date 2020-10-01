import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/products";
import DeleteProduct from "../../components/DeleteProduct/DeleteProduct";
import ToggleImages from "../../components/ToggleImages/ToggleImages";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Reviews from "../../components/Reviews/Reviews";
// import StarRating from "star-rating-react";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURLOne: "",
    imgURLTwo: "",
    imgURLThree: "",
    description: "",
    detail: "",
    reviews: [],
  });
  const [review, setReview] = useState({
    author: "",
    rating: "",
    content: "",
  });
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    product.reviews.push(review);
    setProduct(product);
    await updateProduct(id, product);
  };

  if (!isLoaded) {
    return <h1>... Not Loading</h1>;
  }

  const toggleReview = () => setToggled(!toggled);

  return (
    <div className="product-details">
      <ToggleImages product={product} />
      <div className="info-container">
        <ul className="info-list">
          <li className="list list-name">{product.name}</li>
          <li className="list list-price">{product.price}</li>
          <li className="list">{product.description}</li>
          <li className="list">Shown: {product.detail}</li>
        </ul>
        <div className="button-div">
          <button className="edit-button">
            <Link className="edit-link" to={`/products/${product._id}/edit`}>
              EDIT
            </Link>
          </button>
          <DeleteProduct product={product} />
        </div>
        <hr />
        <div className="review-container">
          <div className="review-header">
          <h3 className="review-header-title" onClick={toggleReview}>+ Reviews</h3>
          </div>
          {/* <div className="review-star-rating">
            <StarRating
              size={product.rating}
              value={product.rating}
              onChange={function (val) {
                console.log(val);
              }}
            />
          </div> */}
        </div>
        {toggled &&
          <div className="review-content">
            <Reviews reviews={product.reviews} />
            <ReviewForm
              title={review.title}
              author={review.author}
              rating={review.rating}
              date={review.date}
              location={review.location}
              content={review.content}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        }
      </div>
    </div>
  );
};
export default ProductDetails;
