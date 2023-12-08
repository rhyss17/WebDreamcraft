import React, { useState } from "react";
import Header from "components/Header";
import "./reviews.css";

const ReviewPage = () => {
  const [comment, setComment] = useState('');
  const [establishmentDate, setEstablishmentDate] = useState('');
  const [establishmentName, setEstablishmentName] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleDateChange = (e) => {
    setEstablishmentDate(e.target.value);
  };

  const handleEstablishmentNameChange = (e) => {
    setEstablishmentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your logic to submit the review data (e.g., send it to a server)
    console.log('Comment:', comment);
    console.log('Date:', establishmentDate);
    console.log('Establishment Name:', establishmentName);
    
    // Display an alert to notify the user
    alert('Your Review Is Submitted');
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
              value={establishmentDate}
              onChange={handleDateChange}
              required
            />
          </label>

          <label>
            Establishment Name:
            <input
              type="text"
              value={establishmentName}
              onChange={handleEstablishmentNameChange}
              required
            />
          </label>

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
