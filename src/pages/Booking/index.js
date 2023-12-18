  import React, { useState } from "react";

  import { useNavigate, useLocation } from "react-router-dom";
  import Header from "components/Header";
  import './add.css';

  import { Button, Img, Text } from "components";

  const AdminNewOnePage = () => {
    const location = useLocation();
    const textFromPage1 = location.state ? location.state.textFromPage1 : '';

    const navigate = useNavigate();
    const [bookData, setBookData] = useState({
      name: textFromPage1, 
      user: "",
      type: "",
      date: "",
      // Add other fields as needed
    });
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBookData({
        ...bookData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const dataToAdd = {
        ...bookData,
        name: textFromPage1, // Replace 'establishmentName' with the correct field name for the establishment name in your backend
      };

      try {
        const response = await fetch("http://localhost:8092/Book/insertBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        });

        if (response.ok) {
          setSubmitted(true);
          setBookData({
            name: textFromPage1,
            user: "",
            type: "",
            date: "",
            // Reset other fields as needed
          });
          setTimeout(() => {
            //setConfirmedDelete(false);
            //setShowConfirmation(false);
            navigate('/home1'); // Redirect to the update page after deletion
          }, 500);
          // Show a success message using alert
          window.alert("Book added successfully!");
        } else {
          // Handle error response
          console.error("Failed to add book.");
          window.alert("Failed to add book.");
        }
      } catch (error) {
        console.error("Error:", error);
        window.alert("Failed to add book.");
      }
    };

    return (
      <>
        <Header />
        <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto pb-5 pl-5 w-full">
        <div className="md:h-[649px] h-[737px] max-w-[1920px] mx-auto md:px-5 relative w-full">
          <div className="absolute bottom-[0] h-[700px] inset-x-[0] mx-auto w-full">
            <Img
              className="h-[649px] m-auto object-cover w-full"
              src="images/img_yogagirl_2.png"
              alt="yogagirl"
            />
            <Text
              className="absolute h-max inset-y-[0] leading-[115.00%] left-[3%] my-auto md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px] w-[35%] sm:w-full"
              size="txtPlayfairDisplayRomanBold70"
            >
              Find The Best Yoga Studio Nearby
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-start mx-auto w-full max-w-[800px] px-4">
            <div style={{ marginTop: '2in' }}></div> {/* Adding a large space */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <div className="flex flex-col mb-4 w-full max-w-[400px]">
                <label htmlFor="name" className="mb-2" style={{ fontSize: '24px' }}>
                  Establishment Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookData.name}
                  onChange={handleInputChange}
                  //value={textFromPage1}
                  readOnly
                  className="border rounded-md py-2 px-3 mt-1 w-full"
                  style={{ fontSize: '24px' }} 
                />
              </div>
              <div className="flex flex-col mb-4 w-full max-w-[400px]">
                <label htmlFor="user" className="mb-2" style={{ fontSize: '24px' }}>
                  Username:
                </label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  value={bookData.user}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md py-2 px-3 mt-1 w-full"
                  style={{ fontSize: '24px' }} 
                />
              </div>
              <div className="flex flex-col mb-4 w-full max-w-[400px]">
                <label htmlFor="type" className="mb-2" style={{ fontSize: '24px' }}>
                  Service Type:
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={bookData.type}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md py-2 px-3 mt-1 w-full"
                  style={{ fontSize: '24px' }} 
                />
              </div>
              <div className="flex flex-col mb-4 w-full max-w-[400px]">
                <label htmlFor="date" className="mb-2" style={{ fontSize: '24px' }}>
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookData.date}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md py-2 px-3 mt-1 w-full"
                  style={{ fontSize: '24px' }} 
                />
              </div>
              {/* Add other input fields for book details */}
              <div className="flex justify-between w-full max-w-[400px]"> {/* Adjust max-width as needed */}
              <button type="submit" className="submit-button"
              //onClick={() => navigate("/home1")}
              //onClick={handleSubmit}
              >Book
                </button>

              </div>
            </form>
      <div style={{ marginTop: '2in' }}></div> {/* Adding another large space */}
    </div>
    </div>
      </>
    );
  };

  export default AdminNewOnePage;
