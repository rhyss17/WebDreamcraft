import React, { useState } from "react";
import axios from "axios"; // Import Axios library
import Header from "components/Header";
import "./reviews.css";
import { useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formReview = {
      comment: comment,
      date: date,
      rating: rating,
    };
  
    try {
      const response = await axios.post("http://localhost:8092/review/insertReview", formReview, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        const data = await response.data; // Assuming the response is a JSON object
        if (data === "Successfully Submited Review") 
          // Successful review submission - redirect to the desired location
          window.location.href = "/userhome"; // Replace with the desired path
          alert("Succesfully Submited Review!")
        
      } else {
        // Handle other HTTP errors if needed
        console.error("An error occurred while submitting review. Status Code: " + response.status);
      }
    } catch (error) {
      console.error("Error occurred during review:", error);
      // Handle the error or log it if necessary
    }
  };

  const handleViewReviews = () => {
    // Add logic to navigate to the page where you display customer reviews
    // For example, window.location.href = "/customer-reviews";
    alert("View Customer Reviews clicked!");
  };

  return (
    <div>
      <Header />
      <div className="review-form">
        <h2>Write A Review Here</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Comment:
            <textarea
              rows="4"
              cols="50"
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </label>

          <label>
            Rating:
            <input
              type="text"
              value={rating}
              onChange={handleRatingChange}
              required
            />
          </label>
          <div className="button-container">
          <button type="submit">Submit Review</button>
          <button type="button" onClick={() => navigate("/customerreviews")}>View Reviews</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
