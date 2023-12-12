import React from "react";

import { useNavigate } from "react-router-dom";

import Header from "components/Header";
import { Button, Img, Line, Text } from "components";
import HomeFooter from "components/HomeFooter";

const YOGASTUDIOTwoPage = () => {
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
          <div className="bg-black-900 h-px ml-4 md:ml-[0] mt-1 w-[95%]"></div>
          <div className="font-manrope md:h-[1265px] h-[745px] sm:h-[933px] md:ml-[0] ml-[5px] mt-[47px] relative w-full">
            <div className="bg-white-A700 flex flex-col h-full items-center justify-start ml-auto mr-[87px] outline outline-[1px] outline-black-900_3d p-[27px] sm:px-5 rounded-[24px] w-[43%]">
              <Img
                className="h-[690px] md:h-auto object-cover rounded-[20px] w-[99%]"
                src="images/img_image29.png"
                alt="imageTwentyNine"
              />
            </div>
            <div className="absolute flex flex-col gap-1 h-full inset-0 justify-center m-auto w-full">
              <div className="bg-white-A700 flex flex-col gap-2.5 justify-start md:ml-[0] ml-[119px] mr-[980px] outline outline-[1px] outline-black-900_3d pr-[13px] py-[13px] rounded-[24px] w-[43%] md:w-full">
                <div className="font-inter md:h-[289px] h-[635px] mr-0.5 relative w-full">
                  <div className="bg-orange-50 flex flex-col gap-[7px] h-full items-center justify-center ml-auto mr-[5px] mt-3.5 p-[9px] rounded-[20px] w-[37%]">
                    <div className="h-12 md:h-14 mt-2 relative w-full">
                    <Text
                    className="bg-white-A700 gap-2.5 justify-start ml-119px mr-980px outline outline-1 outline-black-900_3d pr-13px py-13px rounded-24px w-43% md:w-full font-inter md:h-289px h-635px mr-0.5 relative"
                    size="txtInterBold20"
  >
                        Dawata Wellness Yoga Studio{" "}
                      </Text>
                      <Line className="absolute bg-black-900 bottom-[8%] h-px inset-x-[0] mx-auto w-full" />
                    </div>
                    <div className="flex flex-col font-manrope gap-[13px] items-start justify-start mb-2.5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-[239px]">
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
                            4.8
                          </Text>
                        </div>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtPlayfairDisplayRomanBold18"
                        >
                          164 reviews{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 h-[22px] md:h-auto items-start justify-start w-[195px]">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtManropeBold16Black90001"
                        >
                          Cebu Business Park
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute md:h-[289px] h-[635px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[280px] left-[2%] object-cover rounded-[24px] top-[0] w-[59%]"
                      src="images/img_rectangle13_280x469.png"
                      alt="rectangleThirteen"
                    />
                    <div className="absolute bottom-[0] flex md:h-[289px] h-[368px] inset-x-[0] justify-end mx-auto p-2.5 w-full">
                      <div className="bg-orange-50 h-[275px] mb-3.5 mt-auto mx-auto rounded-[15px] w-[97%]"></div>
                      <div className="absolute bottom-[31%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[48%]">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.40px]"
                          size="txtPlayfairDisplayRomanBold40"
                        >
                          Payment Successful !
                        </Text>
                        <Line className="bg-black-900 h-px mt-1.5 w-[98%]" />
                        <Text
                          className="mt-[17px] text-black-900 text-xl"
                          size="txtManropeRegular20Black900"
                        >
                          <span className="text-black-900 font-manrope text-left font-normal">
                            Transaction no:{" "}
                          </span>
                          <span className="text-black-900 font-manrope text-left font-semibold">
                            6996969669
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold font-playfairdisplay leading-[normal] mb-5 md:ml-[0] ml-[590px] mr-[35px] rounded-lg text-base text-center w-[178px]"
                  onClick={() => navigate("/home1")}
                  shape="round"
                  color="blue_gray_800"
                  size="md"
                  variant="fill"
                >
                  Back to homepage
                </Button>
              </div>
              {/* <HomePage
                className="bg-cover bg-no-repeat flex flex-col h-[635px] md:h-auto items-start justify-start max-w-[1915px] w-full"
                style={{ backgroundImage: "url('images/img_footer.png')" }}
              /> */}
            </div>
          </div>
        </div>

    </>
  );
};

export default YOGASTUDIOTwoPage;
