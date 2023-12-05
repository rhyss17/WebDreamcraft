import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col h-[52px] md:h-auto items-center justify-between max-w-[1286px] ml-[634px] my-6 w-full">
          <div className="flex md:flex-col flex-row gap-9 items-center justify-end w-auto">           
          <div
              className="absolute top-0 left-0 z-10"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              <Img
                className="h-[105px] md:h-auto object-cover"
                src="images/img_21.png"
                alt="TwentyOne"
              />
            </div>
            <ul className="flex flex-row gap-[46px] sm:hidden items-center justify-end w-[444px] sm:w-full common-row-list">
              <li>
                <Text
                  className="common-pointer text-base text-blue_gray-800"
                  size="txtManropeMedium16Bluegray800"
                  onClick={() => navigate("/home1")}
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer text-base text-blue_gray-800"
                  size="txtManropeMedium16Bluegray800"
                  onClick={() => navigate("/aboutus")}
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer text-base text-blue_gray-800"
                  size="txtManropeMedium16Bluegray800"
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </Text>
              </li>
            </ul>
            <div className="flex flex-row items-center justify-center px-4 py-2 rounded-lg w-auto">
              <Text
                className="text-base text-blue_gray-800"
                size="txtManropeBold16Bluegray800"
              >
                EN
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <div className="common-pointer flex flex-row gap-5 items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-bold font-manrope min-w-[91px] rounded-[5px] text-base text-center"
                shape="round"
                onClick={() => navigate("/userhome")}
                color="blue_gray_800"
                size="md"
                variant="outline"
              >
                Profile
              </Button>
              <div className="common-pointer flex flex-row gap-5 items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-bold font-manrope min-w-[91px] rounded-[5px] text-base text-center"
                shape="round"
                onClick={() => navigate("/")}
                color="blue_gray_800"
                size="md"
                variant="outline"
              >
                Logout
              </Button>
              <div className="common-pointer flex flex-row gap-5 items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-bold font-manrope min-w-[91px] rounded-[5px] text-base text-center"
                shape="round"
                onClick={() => navigate("/signup")}
                color="blue_gray_800"
                size="md"
                variant="fill"
              >
                Signup
              </Button>
            </div>
            </div>
            </div>
          </div>
          </div>
       
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
