import React from "react";
import './ReviewForm.css';

const ReviewForm = ({
  title,
  author,
  rating,
  date,
  location,
  content,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
      <h3 className="review-create-title">Write Review</h3>
      <input
        className="review-input-title"
        placeholder="Review Title"
        value={title}
        name="title"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <br />
      <input
        className="review-input-author"
        placeholder="Name"
        value={author}
        name="author"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <br />
      <input
        className="review-input-rating"
        placeholder="Rating (1-5)"
        value={rating}
        name="rating"
        required
        onChange={(e) => onChange(e)}
      />
      <br />
      <input
        className="review-input-date"
        value={date}
        name="date"
        type="date"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <br />
      <input
        className="review-input-location"
        placeholder="Location"
        value={location}
        name="location"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <br />
      <textarea
        className="review-textarea-content"
        rows={10}
        placeholder="Write your review..."
        value={content}
        name="content"
        required
        onChange={(e) => onChange(e)}
      />
      <br />
      <button type="submit" className="review-submit-button">
        SUBMIT
      </button>
    </form>
  );
};

export default ReviewForm;
