import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

import { Button, Img, List, Text } from "components";

const AdminViewEstablishmentTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <div className="flex flex-col font-manrope items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pr-4 py-4 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1419px] mb-[78px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[46px] justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer flex sm:flex-col flex-row gap-4 h-[151px] md:h-auto items-center justify-start ml-4 md:ml-[0] p-3 w-[421px] sm:w-full"
                onClick={() => navigate("/AdminNew")}
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
            </div>
            <List
              className="flex flex-col font-poppins items-start w-auto"
              orientation="vertical"
            >
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
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
              <div className="flex flex-row flex-wrap sm:gap-5 items-start justify-start max-w-[1281px] my-0 w-full">
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  6
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  name 6
                </Button>
                <Button className="cursor-pointer flex-1 font-bold leading-[normal] text-3xl sm:text-[26px] md:text-[28px] text-center w-full">
                  location 6
                </Button>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewEstablishmentTwoPage;
