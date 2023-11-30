import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  // Step 1: Add state variables
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("********");

  // Step 2: Create update functions
  const updateFirstName = () => {
    const newFirstName = prompt("Enter new First Name:", firstName);
    if (newFirstName !== null) {
      setFirstName(newFirstName);
    }
  };

  const updateLastName = () => {
    const newLastName = prompt("Enter new Last Name:", lastName);
    if (newLastName !== null) {
      setLastName(newLastName);
    }
  };

  const updateEmail = () => {
    const newEmail = prompt("Enter new Email:", email);
    if (newEmail !== null) {
      setEmail(newEmail);
    }
  };

  const updatePassword = () => {
    const newPassword = prompt("Enter new Password:", password);
    if (newPassword !== null) {
      setPassword(newPassword);
    }
  };

  return (
    <>
      {/* ... existing code ... */}

      <div className="flex flex-col gap-4 items-center justify-start md:px-5 w-[31%] md:w-full">
        {/* Display current user information */}
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>

        {/* Button to update First Name */}
        <Button
          onClick={updateFirstName}
          color="blue_gray_800"
          size="xs"
          variant="fill"
        >
          Update First Name
        </Button>

        {/* Button to update Last Name */}
        <Button
          onClick={updateLastName}
          color="blue_gray_800"
          size="xs"
          variant="fill"
        >
          Update Last Name
        </Button>

        {/* Button to update Email */}
        <Button
          onClick={updateEmail}
          color="blue_gray_800"
          size="xs"
          variant="fill"
        >
          Update Email
        </Button>

        {/* Button to update Password */}
        <Button
          onClick={updatePassword}
          color="blue_gray_800"
          size="xs"
          variant="fill"
        >
          Update Password
        </Button>
      </div>
    </>
  );
};

export default Profile;
