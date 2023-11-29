import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ContactUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-playfairdisplay items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col gap-[31px] items-center justify-end pt-4 w-full">
                <div className="md:h-[233px] sm:h-[253px] h-[294px] md:px-5 relative w-full">

                  <Img
                    className="common-pointer h-13 ml-3 object-cover w-[12%]"
                    src="images/img_21.png"
                    alt="TwentyTwo"
                    onClick={() => navigate("/home1")}
                  />
                  <div className="absolute h-[294px] inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-col font-manrope items-center justify-start mb-[-7px] ml-auto mr-[21px] w-[33%] z-[1]">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">
                          <Text
                            className="common-pointer text-base text-blue_gray-800 text-center w-auto"
                            size="txtManropeBold16"
                            onClick={() => navigate("/home1")}
                          >
                            Home
                          </Text>
                          <Text
                            className="common-pointer text-base text-blue_gray-800 text-center w-auto"
                            size="txtManropeBold16"
                            onClick={() => navigate("/aboutus")}
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
                          className="common-pointer cursor-pointer font-bold min-w-[96px] rounded text-base text-center"
                          onClick={() => navigate("/")}
                          color="black_900"
                          size="xs"
                          variant="outline"
                        >
                          Logout
                        </Button>
                        <Button
                          className="common-pointer cursor-pointer mb-6 min-w-[92px] rounded text-base text-center"
                          onClick={() => navigate("/signup")}
                          color="blue_gray_800"
                          size="xs"
                          variant="fill"
                        >
                          Signup
                        </Button>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[233px] items-center justify-end mt-auto mx-auto p-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group2.png')",
                      }}
                    >
                      <Text
                        className="leading-[130.00%] mt-[11px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-[69%] sm:w-full"
                        size="txtPlayfairDisplayRomanBold45"
                      >
                        Your well-being is our priority! Feel free to reach out
                        for any questions, suggestions, or support.{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-manrope gap-[7px] items-center justify-start w-full">
                  <div className="flex flex-col gap-8 items-center justify-start md:px-5 w-[31%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                      <div className="flex sm:flex-1 flex-col gap-8 items-center justify-start w-[10%] sm:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_180.png"
                          alt="OneHundredEighty"
                        />
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_320.png"
                          alt="ThreeHundredTwenty"
                        />
                        <Img
                          className="h-[41px] md:h-auto object-cover w-10 sm:w-full"
                          src="images/img_blueminimalist.png"
                          alt="blueminimalist"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[10px] text-gray-900"
                          size="txtPlayfairDisplayRomanBold10"
                        >
                          Email
                        </Text>
                        <Text
                          className="leading-[175.00%] md:ml-[0] ml-[13px] text-gray-700 text-xs w-[58%] sm:w-full"
                          size="txtManropeRegular12"
                        >
                          Email us at
                          [contact@dreamcraft.com](mailto:contact@dreamcraft.com).
                        </Text>
                        <Text
                          className="ml-0.5 md:ml-[0] mt-5 text-[10px] text-gray-900"
                          size="txtPlayfairDisplayRomanBold10"
                        >
                          {" "}
                          Customer Support
                        </Text>
                        <Text
                          className="leading-[175.00%] md:ml-[0] ml-[13px] text-gray-700 text-xs w-[71%] sm:w-full"
                          size="txtManropeRegular12"
                        >
                          For assistance, email
                          [support@dreamcraft.com](mailto:support@dreamcraft.com).
                        </Text>
                        <Text
                          className="mt-3.5 text-[10px] text-gray-900"
                          size="txtPlayfairDisplayRomanBold10"
                        >
                          Partnerships
                        </Text>
                        <Text
                          className="leading-[175.00%] md:ml-[0] ml-[13px] text-gray-700 text-xs w-[97%] sm:w-full"
                          size="txtManropeRegular12"
                        >
                          Interested in partnering? Contact
                          [partnerships@dreamcraft.com](mailto:partnerships@dreamcraft.com).
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-[99%] md:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_42.png"
                        alt="FortyTwo"
                      />
                      <div className="flex flex-col justify-start">
                        <Text
                          className="text-[10px] text-gray-900"
                          size="txtPlayfairDisplayRomanBold10"
                        >
                          Connect on Social Media
                        </Text>
                        <Text
                          className="leading-[175.00%] ml-3.5 md:ml-[0] text-gray-700 text-xs w-[97%] sm:w-full"
                          size="txtManropeRegular12"
                        >
                          Stay connected and updated on the latest well-being
                          tips, news, and platform updates by following us on
                          our social media channels:
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between pb-4 pr-4 w-[86%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_28.png"
                        alt="TwentyEight"
                      />
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_180_60x60.png"
                        alt="OneHundredEighty_One"
                      />
                      <Img
                        className="h-[60px] md:h-auto mr-2 object-cover w-[60px]"
                        src="images/img_320_60x60.png"
                        alt="ThreeHundredTwenty_One"
                      />
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-col items-center justify-start p-2 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[923px] mb-3 mx-auto md:px-5 w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-1/4 md:w-full">
                        <div className="flex flex-col relative w-full">
                      
                          <Text
                            className="ml-auto mr-[17px] mt-[-7.47px] text-black-900 text-xs z-[1]"
                            size="txtManropeBold12"
                          >
                            Explore
                          </Text>
                        </div>
                        <Text
                          className="leading-[140.00%] md:ml-[0] ml-[165px] mt-[3px] text-[10px] text-black-900"
                          size="txtManropeLight10"
                        >
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
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[45px] w-[53%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtManropeBold12"
                          >
                            Utility Pages
                          </Text>
                          <Text
                            className="text-black-900 text-xs"
                            size="txtManropeBold12"
                          >
                            Keep in Touch
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                          <Text
                            className="leading-[140.00%] text-[10px] text-black-900"
                            size="txtManropeLight10"
                          >
                            <>
                              Privacy Policy
                              <br />
                              Terms of User
                            </>
                          </Text>
                          <Text
                            className="leading-[140.00%] text-[10px] text-black-900"
                            size="txtManropeLight10"
                          >
                            <span className="text-black-900 font-manrope text-left font-bold">
                              Address
                            </span>
                            <span className="text-black-900 font-manrope text-left font-light">
                              <>
                                : Bliss Labangon, Cebu City
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-manrope text-left font-bold">
                              Mail
                            </span>
                            <span className="text-black-900 font-manrope text-left font-light">
                              <>
                                : support@dreamcraft.com
                                <br />
                              </>
                            </span>
                            <span className="text-black-900 font-manrope text-left font-bold">
                              Phone
                            </span>
                            <span className="text-black-900 font-manrope text-left font-light">
                              {" "}
                              (+63) 92 - 2253 - 234
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
