import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import HomeFooter from "components/HomeFooter";
import PersonalRecommendationBanner from "components/PersonalRecommendationBanner";

const PersonalRecommendationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto pb-[1071px] w-full">
        <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-start w-full">
          <div className="h-[456px] md:px-5 relative w-[1920px] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Header className="bg-white-A700 flex items-center justify-center w-full" />
                <PersonalRecommendationBanner className="flex flex-col font-playfairdisplay items-center justify-start w-full" />
              </div>
            </div>
            <Img
              className="absolute h-[105px] left-[0] object-cover top-[0] w-[18%]"
              src="images/img_21.png"
              alt="TwentyOne"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-center max-w-[1920px] w-full">
              <Text
                className="text-[15px] text-center text-pink-100 tracking-[1.50px] uppercase w-auto"
                size="txtManropeSemiBold15Pink100"
              >
                Title
              </Text>
              <div className="flex md:flex-col flex-row font-playfairdisplay gap-6 h-[641px] md:h-auto items-center justify-center max-w-[1679px] mx-auto md:px-5 w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[92%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                    <Img
                      className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[383px] md:w-full"
                      src="images/img_rectangle13_280x383.png"
                      alt="rectangleThirteen"
                    />
                    <div className="flex flex-col gap-6 h-[281px] md:h-auto items-start justify-start p-6 sm:px-5 w-[383px] sm:w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
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
                            5.0
                          </Text>
                        </div>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtPlayfairDisplayRomanBold18"
                        >
                          215 reviews{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                          size="txtInterBold24"
                        >
                          Ananda Marga Yoga Center
                        </Text>
                        <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pr-0.5 py-0.5 w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_placeholder1.svg"
                            alt="placeholderOne"
                          />
                          <Text
                            className="mb-[5px] text-black-900 text-xl"
                            size="txtManropeExtraBold20Black900"
                          >
                            Andres Abellana St, Cebu City
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="outline"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[559px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-[388px] sm:w-full">
                    <Img
                      className="h-[265px] sm:h-auto object-cover w-[364px] md:w-full"
                      src="images/img_image11.png"
                      alt="imageEleven"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
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
                      <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Mega Therapeutic & Wellness Center
                        </Text>
                        <div className="flex flex-row font-manrope gap-2.5 h-6 md:h-auto items-start justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_placeholder1.svg"
                            alt="placeholderOne"
                          />
                          <Text
                            className="text-base text-black-900_01 w-[245px]"
                            size="txtManropeBold16Black90001"
                          >
                            {" "}
                            General Maxilom Ave, Cebu City
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="outline"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[559px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-[369px]">
                    <Img
                      className="h-[254px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-[369px] md:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
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
                          className="text-gray-900 text-lg w-auto"
                          size="txtPlayfairDisplayRomanBold18"
                        >
                          184 reviews{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                          size="txtInterBold24"
                        >
                          LA METISSE Salon de Beauté
                        </Text>
                        <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_placeholder1.svg"
                            alt="placeholderOne"
                          />
                          <Text
                            className="max-w-[317px] md:max-w-full text-black-900 text-xl"
                            size="txtManropeBold20Black900"
                          >
                            Unit 121, RainTree Mall, Fuente Osmeña Cir, Cebu
                            City
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="outline"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto">
                    <Img
                      className="h-[271px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-[323px] md:w-full"
                      src="images/img_image13.png"
                      alt="imageThirteen"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
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
                          196 reviews{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                        <Text
                          className="max-w-[299px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Nuat Thai Foot & Body Massage
                        </Text>
                        <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_placeholder1.svg"
                            alt="placeholderOne"
                          />
                          <Text
                            className="max-w-[271px] md:max-w-full text-black-900 text-xl"
                            size="txtManropeBold20Black900"
                          >
                            Pope John Paul II Avenue, Kasambagan, Cebu City
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="outline"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </List>
                <Img
                  className="h-12 w-12"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <HomeFooter
              className="flex flex-col font-playfairdisplay items-start justify-start w-auto md:w-full"
              privacypolicytermsofusetext={
                <Text className="font-manrope font-medium leading-[200.00%] text-[17px] text-white-A700 tracking-[-0.17px]">
                  <span className="text-white-A700 text-left">
                    Privacy Policy
                  </span>
                  <span className="text-white-A700 text-left">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 text-left">
                    Terms of Use
                  </span>
                </Text>
              }
              logo="images/img_logo.svg"
              facebook="images/img_facebook.svg"
              twitter="images/img_twitter.svg"
              linkedin="images/img_linkedin.svg"
              instagram="images/img_instagram.svg"
              exploretext="Explore"
              homeaboutusservicestext={
                <>
                  Home
                  <br />
                  About Us
                  <br />
                  Services
                  <br />
                  Blog
                  <br />
                  Contact Us
                </>
              }
              utilitypagestext="Utility Pages"
              keepintouchtext="Keep in Touch"
              addresstext="Address :"
              mariendalsvejfiftytext="Mariendalsvej 50D 2 2000 Frederiksberg."
              mailtext="Mail :"
              emailtext="support@servicemarket.com"
              phonetext="Phone :"
              phonenumbertext="(+22) 123 - 4567 - 900"
              copyrightimage="images/img_2023servicemarketdk.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalRecommendationPage;
