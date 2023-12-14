import React from "react";

import { useNavigate } from "react-router-dom";

import Header from "components/Header";
import { Button, Img, Line, Text } from "components";
import HomeFooter from "components/HomeFooter";

const BloomLanePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto pb-5 pl-5 w-full">
        <div className="md:h-[649px] h-[737px] max-w-[1920px] mx-auto md:px-5 relative w-full">
          <div className="absolute bottom-[0] h-[700px] inset-x-[0] mx-auto w-full">
            <Img
              className="h-[649px] m-auto object-cover w-full"
              src="images/img_yogagirl_2.png"
              alt="yogagirl"
            />
            <Text
              className="absolute h-max inset-y-[0] leading-[115.00%] left-[3%] my-auto md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px] w-[35%] sm:w-full"
              size="txtPlayfairDisplayRomanBold70"
            >
              Find The Best Yoga Studio Nearby
            </Text>
          </div>
        </div>
        <Line className="bg-black-900 h-px max-w-[1867px] mt-[109px] mx-auto w-full" />
       
        <div className="font-manrope h-[700px] sm:h-[2407px] md:h-[3218px] max-w-[1915px] mb-[1099px] mt-[76px] mx-auto md:px-5 relative w-full">
          
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[138px] items-center justify-start w-full">
                <div className="bg-white-A700 md:h-[100px] h-[657px] mb-[60px] outline outline-[1px] outline-black-900_3d pr-[9px] py-[9px] relative rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="absolute h-[433px] left-[2%] object-cover rounded-[24px] top-[2%] w-[88%]"
                    src="images/img_rectangle13_1.png"
                    alt="rectangleThirteen"
                  />
                  <div className="absolute bottom-[1%] flex md:flex-col flex-row gap-8 inset-x-[0] items-start justify-start mx-auto p-[21px] sm:px-5 w-[99%]">
                    <div className="bg-lime-100_7f flex flex-col font-inter items-start justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[186px] p-[9px] rounded-[20px] w-[39%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] text-gray-900 text-xl w-[97%] sm:w-full"
                        size="txtInterBold20"
                      >
                        Bloom lane Boutique{" "}
                      </Text>
                      <Line className="bg-black-900 h-px mt-3 w-full" />
                      <div className="flex flex-row gap-1 items-center justify-between md:ml-[0] ml-[18px] w-[239px]">
                        <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_frame_blue_gray_800.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-base text-blue_gray-800"
                            size="txtOpenSansRomanRegular16"
                          >
                            4.9
                          </Text>
                        </div>
                        <Text
                          className="common-pointer text-gray-900 text-lg w-auto"
                          size="txtPlayfairDisplayRomanBold18"
                          onClick={() => navigate("/customerreviews")}
                        >
                          184 reviews{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row font-manrope gap-2.5 h-[22px] md:h-auto items-start justify-start mb-1.5 md:ml-[0] ml-[18px] w-[195px]">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtManropeBold16Black90001"
                        >
                          BMD Building, Salinas, Dr,
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold font-playfairdisplay leading-[normal] mb-1.5 md:mt-0 mt-[267px] rounded-lg text-base text-center w-[178px]"
                      onClick={() => navigate("/home1")}
                      shape="round"
                      color="orange_50"
                      size="md"
                      variant="fill"
                    >
                      Go back
                    </Button>
                    <Button
                      className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold font-playfairdisplay leading-[normal] mb-1.5 md:mt-0 mt-[267px] rounded-lg text-base text-center w-[178px]"
                      onClick={() => navigate("/yogastudioone")}
                      shape="round"
                      color="blue_gray_800"
                      size="md"
                      variant="fill"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </div>
              </div>
              {/* <HomeFooter
                className="bg-cover bg-no-repeat flex flex-col h-[635px] md:h-auto items-start justify-start max-w-[1915px] w-full"
                style={{ backgroundImage: "url('images/img_footer.png')" }}
              /> */}
            </div>
          </div>
        
      
    </>
  );
};

export default BloomLanePage;
