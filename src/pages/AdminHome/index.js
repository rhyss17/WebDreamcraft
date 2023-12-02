import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

import { Button, Img, Text } from "components";

const AdminHomePage = () => {
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
            <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-start justify-start ml-4 md:ml-[0] mt-[46px] w-[89%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-4 h-[151px] md:h-auto items-center justify-start p-3 w-[421px] sm:w-full">
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
              <div className="flex flex-row flex-wrap font-poppins sm:gap-5 items-start justify-start max-w-[773px] md:mt-0 mt-[51px] w-full">
                <Button
                  className="common-pointer cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                  onClick={() => navigate("/adminviewestablishmentone")}
                  color="blue_gray_800"
                >
                  View Establishment
                </Button>
                <Button
                  className="common-pointer cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full"
                  onClick={() => navigate("/adminviewuserone")}
                  color="blue_gray_800"
                >
                  View User
                </Button>
              </div>
            </div>
            <Img
              className="h-[390px] ml-20 md:ml-[0] mt-[70px] w-[1280px]"
              src="images/img_frame1000004350.svg"
              alt="frame1000004350"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
