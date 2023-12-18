// View.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import './View.css';
import { Img, Text } from 'components';

const AdminViewEstablishmentOnePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8092/review/getAllReview') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
          <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
           
            <div className="flex flex-1 flex-col items-center justify-start max-w-[1800px] md:mt-0 mt-[35px] mx-auto w-full">
              <div className="flex flex-col items-center justify-start max-w-[1790px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray-800 flex flex-col items-center justify-start w-full">
              <div className="h-[356px] md:px-5 relative w-full">
                <Img
                  className="h-[356px] m-auto object-cover w-full"
                  src="images/img_photo_356x1920.png"
                  alt="photo"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto max-w-[649px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                    <Text
                      className="text-[15px] text-center text-white-A700 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15"
                    >
                      YOGA STUDIO, Wellness center, Beauty Salon, massage
                    </Text>
                    <Text
                      className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 tracking-[-0.55px] w-auto"
                      size="txtPlayfairDisplayRomanBold55WhiteA700"
                    >
                      CUSTOMER REVIEWS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-col font-manrope items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end pr-4 pt-4 w-full">
          <div style={{ marginTop: '50px' }}></div>
          <h1 style={{ fontSize: '32px' }}>More Reviews</h1>
          <div className="flex flex-wrap">
            {data.map((item) => (
              <div key={item.eid} className="box-container">
                <div className="box">
                  <div>ID: {item.cid}</div>
                  <div>Comment: {item.comment}</div>
                  <div>Rating: {item.rating}</div>
                  <div>Date: {item.date}</div>
                  {/* Render other data fields */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AdminViewEstablishmentOnePage;
