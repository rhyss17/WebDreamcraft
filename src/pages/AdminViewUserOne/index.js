import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import "./View.css";
import { Button, Img, List, Text } from "components";

const AdminViewUserOnePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8092/User/getAllUsers') // Replace with your backend URL
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <Header />
      <div className="flex flex-col font-manrope items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end pr-4 pt-4 w-full">
          <div className="flex flex-col justify-start max-w-[1419px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">                   
                  </div>
                </div>
              </div>
            </div>
            <div className="common-pointer flex sm:flex-col flex-row gap-4 h-[151px] md:h-auto items-center justify-start ml-4 md:ml-[0] mt-[46px] p-3 w-[421px] sm:w-full"
            >
              <Img
                className="h-[120px] md:h-auto object-cover rounded-[71px] w-[142px] sm:w-full"
                src="images/img_radiobutton.png"
                alt="radiobutton"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[216px]"
                size="txtManropeBold32"
                onClick={() => navigate("/adminhome")}
              >
                Administrator
              </Text>
            </div>
            {/* space between the admin profile */}
            <div style={{ marginTop: '50px' }}></div> 
            <h1 style={{ fontSize: '32px' }}>Users</h1> {/* Changing font size */}
            <table style={{ borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>
              <thead>
                <tr style={{ fontSize: '24px', borderBottom: '2px solid black' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Firstname</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Lastname</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Password</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.eid} style={{ borderTop: '1px solid #ddd' }}>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{item.uid}</td>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{item.firstname}</td>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{item.lastname}</td>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{item.email}</td>
                    <td style={{ padding: '10px', textAlign: 'left' }}>{item.password}</td>
                    {/* Render other data fields */}
                  </tr>
                ))}
              </tbody>
            </table>

      <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[450px] mt-[74px] p-2.5 w-auto sm:w-full">
          <div className="flex sm:flex-col flex-row gap-1 items-start justify-start w-auto sm:w-full">
          <div className="button-container">

            </div>
            <div className="button-container">
              <div className="button-border">
                <button
                  className="styled-button large-font" 
              onClick={() => navigate("/adminnew")}
            >
              Update
            </button>
            </div>
        </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default AdminViewUserOnePage;
