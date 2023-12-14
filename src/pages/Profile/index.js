import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";
import Header from "components/Header";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Fetch user data from localStorage when the component mounts
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display an alert for demonstration purposes
  alert("Successfully Updated Personal Information");

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <>
      <Header className="header" />
      <div className="profile-container">
        <div className="account-settings">
          <h1 style={{ fontWeight: 'bold' }}>Account Settings</h1>
        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update personal information</button>
        </form>
      </div>
    </>
  );
};

export default Profile;