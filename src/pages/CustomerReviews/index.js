import React from "react";

import { useNavigate } from "react-router-dom";
import HomeFooter from "components/HomeFooter";
import Header from "components/Header";

import { Button, Img, Line, Text } from "components";

const CustomerReviewsPage = () => {
  const navigate = useNavigate();

  return (
    <>
     <Header />
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
          <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
           
            <div className="flex flex-1 flex-col items-center justify-start max-w-[1800px] md:mt-0 mt-[35px] mx-auto w-full">
              <div className="flex flex-col items-center justify-start max-w-[1790px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray-800 flex flex-col items-center justify-start w-full">
              <div className="h-[356px] md:px-5 relative w-full">
                <Img
                  className="h-[356px] m-auto object-cover w-full"
                  src="images/img_photo_356x1920.png"
                  alt="photo"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto max-w-[649px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                    <Text
                      className="text-[15px] text-center text-white-A700 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15"
                    >
                      YOGA STUDIO, Wellness center, Beauty Salon, massage
                    </Text>
                    <Text
                      className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 tracking-[-0.55px] w-auto"
                      size="txtPlayfairDisplayRomanBold55WhiteA700"
                    >
                      CUSTOMER REVIEWS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1249px] mt-[65px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] h-[1402px] md:h-auto items-center justify-start max-w-[1249px] w-full">
            <div className="gap-11 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[97%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_325x370.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-lime-100_7f flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-[317px]">
                    <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                      <Text
                        className="leading-[125.00%] text-[13px] text-blue_gray-600 tracking-[0.78px] uppercase w-[44%] sm:w-full"
                        size="txtManropeBold13"
                      >
                        11TH NOVEMEBER 2023
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-3 ml-[7px] mt-[18px] w-[7%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-600 tracking-[0.78px] uppercase"
                        size="txtManropeBold13"
                      >
                        BY maya ysabella
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Aloha Mana Spa & Cafe
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-[15px] text-blue_gray-600 tracking-[0.30px]"
                        size="txtManropeRegular15"
                      >
                        “Aloha Mana Spa & Cafe provided an exceptional
                        experience. The staff warmly welcomed me as well as the
                        service 10/10”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_1.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 h-[197px] md:h-auto items-start justify-start w-[317px]">
                    <div className="flex flex-row items-center justify-start w-[88%] md:w-full">
                      <Text
                        className="leading-[125.00%] text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase w-[47%] sm:w-full"
                        size="txtManropeBold13Bluegray800"
                      >
                        12TH AUGUST 2023
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-3 ml-[7px] mt-[18px] w-[7%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        BY Jelian faith
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="max-w-[289px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Nature Wellness Massage & Spa
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-blue_gray-600 text-lg tracking-[0.36px]"
                        size="txtManropeRegular18Bluegray600"
                      >
                        “They make sure that I was taken care of the staffs are
                        nice to me. It truly makes my stress gone! “
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_2.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 h-[194px] md:h-auto items-start justify-start w-[317px]">
                    <div className="flex flex-row items-center justify-start w-[85%] md:w-full">
                      <Text
                        className="leading-[125.00%] text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase w-[49%] sm:w-full"
                        size="txtManropeBold13Bluegray800"
                      >
                        8TH SEPTEMBER 2021
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-3 ml-[7px] mt-[18px] w-[8%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        BY irish leigh
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Salonica Hair Lounge
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-blue_gray-600 text-lg tracking-[0.36px]"
                        size="txtManropeRegular18Bluegray600"
                      >
                        “They dont just make my hair beautiful they have variety
                        of skincare offers like the one I am trying. Stress no
                        more!”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_3.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 h-[194px] md:h-auto items-start justify-start w-[317px]">
                    <div className="flex flex-row items-start justify-start w-[90%] md:w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        7THjuly 2023
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-[5px] ml-[37px] mt-2.5 w-[7%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        BY katrina kaye
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Riso Wellness Center
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-blue_gray-600 text-lg tracking-[0.36px]"
                        size="txtManropeRegular18Bluegray600"
                      >
                        “I had the best stress reliever. Wherever I felt
                        overwhelm of my studies this place is my go to.”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_4.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 h-[194px] md:h-auto items-start justify-start w-[317px]">
                    <div className="flex flex-row items-start justify-start w-[90%] md:w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        7THjuly 2023
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-[5px] ml-[37px] mt-2.5 w-[7%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        BY katrina kaye
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="max-w-[289px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Dawata Wellness Yoga Studio{" "}
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-blue_gray-600 text-lg tracking-[0.36px]"
                        size="txtManropeRegular18Bluegray600"
                      >
                        “Meditation and Yoga Dawata is my go to place it makes
                        me relax and it release my stress!”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover w-full"
                    src="images/img_photo_5.png"
                    alt="photo"
                  />
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-auto">
                  <div className="flex flex-col gap-2 h-[197px] md:h-auto items-start justify-start w-[317px]">
                    <div className="flex flex-row items-center justify-start w-[74%] md:w-full">
                      <Text
                        className="leading-[125.00%] text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase w-[56%] sm:w-full"
                        size="txtManropeBold13Bluegray800"
                      >
                        6TH NOVEMBER 2023
                      </Text>
                      <Line className="bg-blue_gray-900_01 h-0.5 mb-3 ml-[7px] mt-[18px] w-[9%]" />
                      <Text
                        className="ml-2.5 text-[13px] text-blue_gray-800 tracking-[0.78px] uppercase"
                        size="txtManropeBold13Bluegray800"
                      >
                        BY karen
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[317px]">
                      <Text
                        className="max-w-[289px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Pink Lush Beauty Lounge
                      </Text>
                      <Text
                        className="leading-[155.00%] max-w-[317px] md:max-w-full text-blue_gray-600 text-lg tracking-[0.36px]"
                        size="txtManropeRegular18Bluegray600"
                      >
                        “After multiple sessions my acne stress are gone.Huge
                        thanks to Pink Lush teams for taken care of me!”
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="!text-gray-900 cursor-pointer font-extrabold min-w-[250px] outline-[2px] text-center text-sm tracking-[1.68px] uppercase"
              onClick={() => navigate("/reviews")}  
              shape="square"
              color="blue_gray_800"
              size="xl"
              variant="outline"
            >
              Write A Reviews
            </Button>
          </div>
        </div>
        <footer className="flex font-manrope items-center justify-center md:px-5 w-full">
          <div className="sm:h-[532px] h-[635px] md:h-[935px] relative w-full">
            <HomeFooter
              className="flex flex-col h-full items-center justify-start m-auto max-w-[1906px] w-full"
              utilitypagescontent={
                <Text className="font-medium leading-[200.00%] text-[17px] text-black-900 tracking-[-0.17px]">
                  <span className="text-black-900 font-manrope text-left">
                    Privacy Policy
                  </span>
                  <span className="text-black-900 font-manrope text-left">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-manrope text-left">
                    Terms of Use
                  </span>
                </Text>
              }
              exploretext="Explore"
              explorecontent={
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
              addressOne="Address :"
              addresscontent="Bliss Labangon, Cebu City "
              mail="Mail :"
              mailcontent="support@dreamcraft.com"
              phone="Phone :"
              phonecontent="(+63) 92 -  2253  - 234"
              copyrightimage="images/img_2023servicemarketdk.svg"
            />
            <div className="absolute flex flex-col items-start justify-start right-[0] top-[8%] w-[86%]">
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CustomerReviewsPage;
