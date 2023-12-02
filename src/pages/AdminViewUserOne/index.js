import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

import { Button, Img, List, Text } from "components";

const AdminViewUserOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <div className="flex flex-col font-manrope items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pr-4 py-4 w-full">
          <div className="flex flex-col justify-start max-w-[1419px] mb-[143px] mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row font-poppins gap-3 items-start justify-start ml-20 md:ml-[0] mt-[70px] w-[93%] md:w-full">
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button
                    className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                    color="blue_gray_800"
                  >
                    Firstname
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                    color="blue_gray_800"
                  >
                    Lastname
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                    color="blue_gray_800"
                  >
                    Email
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                    color="blue_gray_800"
                  >
                    Password
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first 1
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    last 1{" "}
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first1@gmail.com
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    password1
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first 2
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    last 2
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first2@gmail.com
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    password2
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first 3
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    last 3
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first3@gmail.com
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    password3
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first 4
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    last 4
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first4@gmail.com
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    password4
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first 5
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    last 5
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    first5@gmail.com
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    password5
                  </Button>
                </div>
              </List>
              <div className="flex flex-col gap-9 items-center justify-start md:mt-0 mt-[91px] w-[2%] md:w-full">
                <Img
                  className="common-pointer h-[29px] md:h-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                  onClick={() => navigate("/adminviewuser")}
                />
                <Img
                  className="h-[29px] md:h-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageFour"
                />
                <Img
                  className="h-[29px] md:h-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageFive"
                />
                <Img
                  className="h-[29px] md:h-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageSix"
                />
                <Img
                  className="h-[29px] md:h-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageSeven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewUserOnePage;
