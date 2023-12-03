import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import { Button, Img, Text } from "components";
import "./userhome.css";

const Userhome = () => {
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
                    {/* Content here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row gap-10 w-full">
              <div className="flex flex-col items-center justify-center gap-4 h-[151px] w-[421px] mt-4">
                <br /> {/* Corrected line break */}
                <Img
                  className="h-[120px] object-cover rounded-[71px] w-[142px]"
                  src="images/img_ellipse1.png"
                  alt="img_ellipse1"
                />
                <Text
                  className="text-3xl text-black-900 mb-10"
                  size="txtManropeBold32"
                >
                  Hello User
                </Text>
              </div>
              <div className="button-container">
                <div className="button-border">
                  <button
                    className="styled-button large-font"
                    onClick={() => navigate("/Profile")}
                  >
                    Account Settings
                  </button>
                </div>
              </div>
              <div className="button-container">
                <div className="button-border">
                  <button
                    className="styled-button large-font"
                    onClick={() => navigate("/home1")}
                  >
                    Establishment
                  </button>
                </div>
              </div>
              <div className="button-container">
                <div className="button-border">
                  <button
                    className="styled-button large-font"
                    onClick={() => navigate("/customerreviews")}
                  >
                    Recent Customer Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userhome;
