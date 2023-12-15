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
    </>
  );
};

export default AdminViewEstablishmentOnePage;
