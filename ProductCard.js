/*
import React, { useState } from "react";

function ProductCard({ product, onDelete, onAddReview }) {
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (!review.trim()) return;
    onAddReview(review);
    setReview("");
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={onDelete} className="delete-btn">
        Delete Product
      </button>
      <div className="reviews">
        <h4>Reviews:</h4>
        {product.reviews.length === 0 && <p>No reviews yet.</p>}
        {product.reviews.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>
      <div className="add-review">
        <h4>Add a Review:</h4>
        <input
          type="text"
          placeholder="Write a review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
    </div>
  );
}

export default ProductCard;
*/

import React, { useState } from "react";

function ProductCard({ product, onDelete, onAddReview }) {
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (!review.trim()) return;
    onAddReview(review);
    setReview("");
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      {/* Display price, quality, and type */}
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quality:</strong> {product.productQuality}</p>
      <p><strong>Type:</strong> {product.productType}</p>

      <button onClick={onDelete} className="delete-btn">
        Delete Product
      </button>

      <div className="reviews">
        <h4>Reviews:</h4>
        {product.reviews.length === 0 && <p>No reviews yet.</p>}
        {product.reviews.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>

      <div className="add-review">
        <h4>Add a Review:</h4>
        <input
          type="text"
          placeholder="Write a review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
    </div>
  );
}

export default ProductCard;
