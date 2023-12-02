import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

import { Button, Img, List, Text } from "components";
  
const AdminViewEstablishmentOnePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8092/Establishment/getAllEstablishments') // Replace with your backend URL
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
            <div
              className="common-pointer flex sm:flex-col flex-row gap-4 h-[151px] md:h-auto items-center justify-start ml-4 md:ml-[0] mt-[46px] p-3 w-[421px] sm:w-full"
              onClick={() => navigate("/")}
            >
              <Img
                className="h-[120px] md:h-auto object-cover rounded-[71px] w-[142px] sm:w-full"
                src="images/img_radiobutton.png"
                alt="radiobutton"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[216px]"
                size="txtManropeBold32"
              >
                Administrator
              </Text>
            </div>
            <List
              className="flex flex-col font-poppins items-start ml-20 md:ml-[0] mt-[70px] w-auto"
              orientation="vertical"
            >
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button
                  className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                  color="blue_gray_800"
                >
                  ID
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                  color="blue_gray_800"
                >
                  Name
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                  color="blue_gray_800"
                >
                  Location
                </Button>
              </div>
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  1
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 1
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 1
                </Button>
              </div>
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  2
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 2
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 2
                </Button>
              </div>
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  3
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 3
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 3
                </Button>
              </div>
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  4
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 4
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 4
                </Button>
              </div>
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  5
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 5
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 5
                </Button>
              </div>
            </List>
            <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[450px] mt-[74px] p-2.5 w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row gap-1 items-start justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-[257px]"
                  onClick={() => navigate("/adminnewone")}
                  color="blue_gray_800"
                >
                  Add{" "}
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-[257px]"
                  onClick={() => navigate("/adminnew")}
                  color="blue_gray_800"
                >
                  Update
                </Button>
              </div>
            </div>
            <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.eid}>
              <td>{item.eid}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              {/* Render other data fields */}
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewEstablishmentOnePage;
