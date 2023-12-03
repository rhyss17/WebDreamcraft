import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

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
        <form onSubmit={handleSubmit} className="mt-8 w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={establishmentData.name}
                onChange={handleInputChange}
                className="border rounded-md py-2 px-3 mt-1"
              />
            </label>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="location" className="mb-2">
              Location:
              <input
                type="text"
                id="location"
                name="location"
                value={establishmentData.location}
                onChange={handleInputChange}
                className="border rounded-md py-2 px-3 mt-1"
              />
            </label>
          </div>
          {/* Add other input fields for establishment details */}
          <Button type="submit">Submit</Button>

        </form>
        
          <Button 
          type="submit"
          onClick={() => navigate("/adminviewestablishmentone")}
          >Go back
          </Button>
        
      </div>
    </>
  );
};

export default AdminNewOnePage;
