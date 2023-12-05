import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import './add.css';

import { Button, Img, Text } from "components";

const AdminNewOnePage = () => {
  const navigate = useNavigate();
  const [establishmentData, setEstablishmentData] = useState({
    name: "",
    location: "",
    // Add other fields as needed
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEstablishmentData({
      ...establishmentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!establishmentData.name || !establishmentData.location) {
      window.alert("Error fields are empty.");
      return; // Prevent further execution
    }

    try {
      const response = await fetch("http://localhost:8092/Establishment/insertEstablishment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(establishmentData),
      });

      if (response.ok) {
        setSubmitted(true);
        setEstablishmentData({
          name: "",
          location: "",
          // Reset other fields as needed
        });
        // Show a success message using alert
        window.alert("Establishment added successfully!");
      } else {
        // Handle error response
        console.error("Failed to add establishment.");
        window.alert("Failed to add establishment.");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to add establishment.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col font-manrope items-center justify-start mx-auto w-full max-w-[800px] px-4">
          <div style={{ marginTop: '2in' }}></div> {/* Adding a large space */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="flex flex-col mb-4 w-full max-w-[400px]">
        <label htmlFor="name" className="mb-2" style={{ fontSize: '24px' }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={establishmentData.name}
          onChange={handleInputChange}
          className="border rounded-md py-2 px-3 mt-1 w-full"
          style={{ fontSize: '24px' }} 
        />
      </div>
      <div className="flex flex-col mb-4 w-full max-w-[400px]">
        <label htmlFor="location" className="mb-2" style={{ fontSize: '24px' }}>
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={establishmentData.location}
          onChange={handleInputChange}
          className="border rounded-md py-2 px-3 mt-1 w-full"
          style={{ fontSize: '24px' }} 
        />
      </div>
      {/* Add other input fields for establishment details */}
      <div className="flex justify-between w-full max-w-[400px]"> {/* Adjust max-width as needed */}
      <button type="submit" className="submit-button">Submit
        </button>
        <button onClick={() => navigate("/adminviewestablishmentone")} 
        className="goBack-button">Go back
        </button>
      </div>
    </form>
    <div style={{ marginTop: '2in' }}></div> {/* Adding another large space */}
  </div>
    </>
  );
};

export default AdminNewOnePage;
