import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AdminNewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-manrope items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pr-4 py-4 w-full">
          <div className="flex flex-col items-end justify-start max-w-[1419px] mb-[403px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-11 md:h-auto object-cover"
                src="images/img_22.png"
                alt="TwentyTwo"
              />
              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">
                    <Text
                      className="text-base text-blue_gray-800 text-center w-auto"
                      size="txtManropeBold16"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-base text-blue_gray-800 text-center w-auto"
                      size="txtManropeBold16"
                    >
                      About Us
                    </Text>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-800 text-center w-auto"
                    >
                      <Text size="txtManropeBold16">Contact Us</Text>
                    </a>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[96px] text-base text-center"
                    shape="round"
                    color="black_900"
                    variant="outline"
                  >
                    Logout
                  </Button>
                  <Button
                    className="cursor-pointer mb-6 min-w-[92px] text-base text-center"
                    shape="round"
                    color="blue_gray_800"
                  >
                    Signup
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="common-pointer flex sm:flex-col flex-row gap-4 h-[151px] md:h-auto items-center justify-start mt-[46px] p-3 w-[421px] sm:w-full"
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
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-end justify-end mt-[70px] w-[95%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-7xl w-full">
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
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-7xl w-full">
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    1
                  </Button>
                  <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                    newName 1
                  </Button>
                  <div className="bg-gray-400 flex flex-1 flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-indigo-900 w-auto"
                      size="txtPoppinsBold30"
                    >
                      newLocation 1
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] md:mt-0 mt-[68px] w-[5%] md:w-full">
                <Img
                  className="common-pointer h-[59px] md:h-auto object-cover w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                  onClick={() => navigate("/adminviewestablishment")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNewPage;
