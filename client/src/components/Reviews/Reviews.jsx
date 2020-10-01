import React from "react";
import StarRating from "star-rating-react";
import "./Reviews.css";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <div className="product-review" key={index}>
      <div className="product-review-header">
        <h1 className="review-comp-title">{review.title}</h1>
        <div className="star-rating">
          <StarRating
            size={review.rating}
            value={review.rating}
            onChange={function (val) {
              console.log(val);
            }}
          />
        </div>
      </div>
      <p className="review-comp-content">{review.content}</p>
      <p className="review-comp-dal">{`${review.date} - ${review.author} - ${review.location}`}</p>
    </div>
  ));

  return <div className="product-reviews">{reviewsJSX}</div>;
};

export default Reviews;
