import React from "react";

import { useNavigate } from "react-router-dom";

import Header from "components/Header";
import { Button, Img, Line, SelectBox, Text } from "components";
// import HomeFooter from "components/HomeFooter";

// const languageEightOptionsList = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

const YOGASTUDIOOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto pb-5 pl-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1920px] mb-[1099px] mx-auto md:px-5 w-full">
            <div className="absolute bottom-[0] h-[750px] inset-x-[0] mx-auto w-full">
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
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[277px] mt-[31px] w-[67%] md:w-full">
            <Img
              className="h-[63px] mb-1 md:mt-0 mt-2.5 w-[63px]"
              src="images/img_capa1.svg"
              alt="capaOne"
            />
            <Text
              className="ml-5 md:ml-[0] md:mt-0 mt-[3px] sm:text-[41px] md:text-[47px] text-[55px] text-black-900 tracking-[-0.55px]"
              size="txtPlayfairDisplayRomanBold55Black900"
            >
              Payments
            </Text>
            <div className="flex flex-col font-inter gap-[11px] items-center justify-start mb-1.5 md:ml-[0] ml-[509px]">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtInterBold24"
              >
                Check in Check out
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtInterRegular24"
              >
                Nov 9 2023 Nov 9 2023
              </Text>
            </div>
          </div>
          </div>  
          </div>
          </div>
          <div className="bg-black-900 h-px ml-8 md:ml-[0] mt-1 mb-8 w-[98%]" />
          <div className="font-inter sm:h-[1279px] h-[700px] md:h-[1986px] md:ml-[0] ml-[5px] mt-[47px] relative w-full">
            <div className="bg-white-A700 h-[744px] ml-auto mr-[87px] outline outline-[1px] outline-black-900_3d rounded-[24px] w-[43%]">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              
              <div className="flex flex-col md:gap-10 gap-[111px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-[88%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-2.5 justify-start outline outline-[1px] outline-black-900_3d pr-[13px] py-[13px] rounded-[24px]">
                    <div className="md:h-[280px] h-[635px] mr-0.5 relative w-full">
                      <div className="bg-lime-100_7f flex flex-col gap-[7px] h-full items-center justify-center ml-auto mr-[5px] mt-1.5 p-[9px] rounded-[20px] w-[37%]">
                        <div className="h-12 md:h-14 mt-1 relative w-full">
                        
                        </div>
                        <div className="flex flex-col font-manrope gap-[13px] items-start justify-start mb-1.5 w-[87%] md:w-full mt-4">
                          <div className="flex flex-row gap-1 items-center justify-between w-[239px]">
                            <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">                         
                            </div>                           
                          </div>
                          <div className="flex flex-row gap-2.5 h-[22px] md:h-auto items-start justify-start w-[195px]">
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start w-full">
                        <Img
                          className="absolute h-[280px] left-[2%] object-cover rounded-[24px] top-[0] w-[59%]"
                          src="images/img_rectangle13_280x469.png"
                          alt="rectangleThirteen"
                        />
                        <div className="absolute bottom-[0] flex md:h-[280px] h-[368px] inset-x-[0] justify-end mx-auto pr-3 py-3 w-full" style={{ width: "100%" }}>
                          <div className="font-manrope h-[275px] md:h-[280px] mb-2 mt-auto mx-auto w-[50%] md:w-full">
                            <div className="absolute bg-lime-100_7f_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[34px] sm:px-5 rounded-[15px] w-[98%]">
                              <Text
                                className="ml-1.5 md:ml-[0] mt-7 text-black-900 text-xl"
                                size="txtManropeRegular20Black900"
                              >
                                6969-696 12/21/24 DeezNutz
                              </Text>
                              <Line className="bg-black-900 h-1 ml-2.5 md:ml-[0] mt-[46px] w-[98%]" />
                              <Text
                                className="ml-1 md:ml-[0] mt-7 text-black-900 text-xl"
                                size="txtManropeExtraBold20Black900"
                              >
                                Amount Surchange Amount to charge
                              </Text>
                              <Text
                                className="ml-1 md:ml-[0] mt-3.5 text-black-900 text-xl"
                                size="txtManropeRegular20Black900"
                              >
                                969.69 420 969.69
                              </Text>
                            </div>
                            <div className="absolute flex flex-col items-center justify-start left-[0] max-w-[746px] top-[3%] w-full">
                              <div className="flex flex-col items-start justify-end pt-[13px] px-[13px]">
                                <Text
                                  className="md:ml-[0] ml-[47px] text-black-900 text-xl"
                                  size="txtManropeExtraBold20Black900"
                                >
                                  Card number Expiry Name
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-playfairdisplay gap-6 items-center justify-end mb-5 md:ml-[0] ml-[388px] w-[48%] md:w-full">
                      <Button
                        className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-[178px]"
                        onClick={() => navigate("/yogastudiothree")}
                        shape="round"
                        color="orange_50"
                        size="md"
                        variant="fill"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-[178px]"
                        onClick={() => navigate("/yogastudiotwo")}
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="fill"
                      >
                        Process payment
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="h-[690px] md:h-auto object-cover rounded-[20px]"
                    src="images/img_image29.png"
                    alt="imageTwentyNine"
                  />
                </div>
                </div>
                {/* <HomeFooter
                  className="bg-cover bg-no-repeat flex flex-col font-manrope h-[635px] md:h-auto items-start justify-start max-w-[1915px] w-full"
                  style={{ backgroundImage: "url('images/img_footer.png')" }}
                /> */}
              </div>
        </div>
   
    </div>
    </>
  );
};

export default YOGASTUDIOOnePage;
