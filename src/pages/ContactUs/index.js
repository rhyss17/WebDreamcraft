import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ContactUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto pb-[860px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[1055px] mx-auto w-[1920px] md:w-full">
              <header className="bg-white-A700 flex items-center justify-center mx-auto w-full">
                <div className="flex flex-col items-center justify-between max-w-[1286px] mb-6 ml-[634px] mt-[21px] w-full">
                  <div className="flex md:flex-col flex-row gap-9 items-center justify-end w-auto">
                    <ul className="flex flex-row gap-[46px] sm:hidden items-center justify-end w-[444px] sm:w-full common-row-list">
                      <li>
                        <a className="text-base text-blue_gray-800">
                          <Text
                            className="common-pointer"
                            size="txtManropeMedium16Bluegray800"
                            onClick={() => navigate("/home1")}
                          >
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-blue_gray-800">
                          <Text
                            className="common-pointer"
                            size="txtManropeMedium16Bluegray800"
                            onClick={() => navigate("/aboutus")}
                          >
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-blue_gray-800"
                        >
                          <Text size="txtManropeMedium16Bluegray800">
                            Contact Us
                          </Text>
                        </a>
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
                    <div
                      className="common-pointer flex flex-row gap-5 items-start justify-start w-auto"
                      onClick={() => navigate("/")}
                    >
                      <Button
                        className="cursor-pointer font-bold min-w-[91px] rounded-[5px] text-base text-center"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="outline"
                      >
                        Login
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[100px] outline outline-[0.5px] outline-black-900 rounded-[5px] text-base text-center"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="fill"
                      >
                        Signup
                      </Button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[1055px] relative w-full">
                  <div className="bg-blue_gray-800 h-[495px] mt-[97px] mx-auto w-full"></div>
                  <div className="absolute h-[1055px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[1055px] m-auto object-cover w-full"
                      src="images/img_photo_1055x1920.png"
                      alt="photo"
                    />
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[649px] mx-auto top-1/4 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                        <Text
                          className="text-[15px] text-center text-white-A700 tracking-[1.50px] uppercase w-auto"
                          size="txtManropeSemiBold15"
                        >
                          GET IN TOUCH WITH US
                        </Text>
                        <Text
                          className="leading-[120.00%] sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 tracking-[-0.55px]"
                          size="txtPlayfairDisplayRomanBold55WhiteA700"
                        >
                          <>
                            We Are Ready To Assist
                            <br />
                            You In 24/7
                          </>
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="common-pointer absolute h-[105px] left-[4%] object-cover top-[0] w-[18%]"
                      src="images/img_21.png"
                      alt="TwentyTwo"
                      onClick={() => navigate("/home1")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[45px] h-[1015px] md:h-auto items-center justify-start max-w-[824px] mt-[-313px] mx-auto w-full z-[1]">
              <div className="flex flex-col gap-[9px] items-center justify-start max-w-[659px] w-full">
                <Text
                  className="text-[15px] text-blue_gray-800 text-center tracking-[1.50px] uppercase w-auto"
                  size="txtManropeSemiBold15Bluegray800"
                >
                  GET IN TOUCH
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[659px] md:max-w-full sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px]"
                  size="txtPlayfairDisplayRomanBold45"
                >
                  Your well-being is our priority! Feel free to reach out for
                  any questions, suggestions, or support.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[76%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[598px] md:w-full">
                    <Img
                      className="h-[108px] md:h-auto object-cover w-[108px]"
                      src="images/img_179.png"
                      alt="OneHundredSeventyNine"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                        size="txtPlayfairDisplayRomanBold22"
                      >
                        Email
                      </Text>
                      <Text
                        className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                        size="txtManropeRegular18Gray700"
                      >
                        Email us at
                        [contact@dreamcraft.com](mailto:contact@dreamcraft.com).
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between mt-4 w-[97%] md:w-full">
                    <Img
                      className="h-[111px] md:h-auto object-cover w-[111px]"
                      src="images/img_319.png"
                      alt="ThreeHundredNineteen"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                        size="txtPlayfairDisplayRomanBold22"
                      >
                        {" "}
                        Customer Support
                      </Text>
                      <Text
                        className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                        size="txtManropeRegular18Gray700"
                      >
                        For assistance, email
                        [support@dreamcraft.com](mailto:support@dreamcraft.com).
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-100 h-px mt-[18px] w-full" />
                  <div className="flex sm:flex-col flex-row gap-8 items-center justify-between mt-[5px] w-[97%] md:w-full">
                    <Img
                      className="h-[111px] md:h-auto object-cover"
                      src="images/img_blueminimalist.png"
                      alt="blueminimalist"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                        size="txtPlayfairDisplayRomanBold22"
                      >
                        Partnerships
                      </Text>
                      <Text
                        className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                        size="txtManropeRegular18Gray700"
                      >
                        Interested in partnering? Contact
                        [partnerships@dreamcraft.com](mailto:partnerships@dreamcraft.com).
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-[162px] md:h-auto items-start justify-start mt-6 w-[620px] md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[598px] md:w-full">
                        <Img
                          className="h-[108px] md:h-auto object-cover w-[108px]"
                          src="images/img_41.png"
                          alt="FortyOne"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                          <Text
                            className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                            size="txtPlayfairDisplayRomanBold22"
                          >
                            Connect on Social Media
                          </Text>
                          <Text
                            className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                            size="txtManropeRegular18Gray700"
                          >
                            Stay connected and updated on the latest well-being
                            tips, news, and platform updates by following us on
                            our social media channels:
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[681px] mt-[30px] md:px-5 w-[34%] md:w-full">
            <Img
              className="h-[111px] md:h-auto object-cover w-[111px]"
              src="images/img_28.png"
              alt="TwentyEight"
            />
            <Img
              className="h-[111px] md:h-auto md:ml-[0] ml-[169px] object-cover w-[111px]"
              src="images/img_180.png"
              alt="OneHundredEighty"
            />
            <Img
              className="h-[111px] md:h-auto md:ml-[0] ml-[141px] object-cover w-[111px]"
              src="images/img_320.png"
              alt="ThreeHundredTwenty"
            />
          </div>
          <footer className="bg-orange-50 flex items-center justify-center mt-[18px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[68px] ml-[312px] mr-[465px] mt-[53px] w-3/5">
              <div className="flex flex-col gap-[47px] items-center justify-center w-full">
                <Img
                  className="h-[88px] md:h-auto mr-[799px] object-cover w-[31%]"
                  src="images/img_21.png"
                  alt="TwentyOne"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-12 md:ml-[0] w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[87%] md:w-full">
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtManropeBold22"
                    >
                      Explore
                    </Text>
                    <Text
                      className="ml-80 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtManropeBold22"
                    >
                      Utility Pages
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[265px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtManropeBold22"
                    >
                      Keep in Touch
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[200.00%] text-[17px] text-black-900 tracking-[-0.17px]"
                      size="txtManropeMedium17"
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
                    <Text
                      className="leading-[200.00%] md:ml-[0] ml-[257px] text-[17px] text-black-900 tracking-[-0.17px]"
                      size="txtManropeMedium17"
                    >
                      <span className="text-black-900 font-manrope text-left font-medium">
                        Privacy Policy
                      </span>
                      <span className="text-black-900 font-manrope text-left font-medium">
                        <>
                          {" "}
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-manrope text-left font-medium">
                        Terms of Use
                      </span>
                    </Text>
                    <ul className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[290px] md:mt-0 mt-0.5 w-[27%] md:w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-4 items-start justify-start">
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeBold17"
                            >
                              Address :
                            </Text>
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeMedium17"
                            >
                              Bliss Labangon, Cebu City{" "}
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-[49px] items-center justify-start mt-[39px]">
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeBold17"
                            >
                              Mail :
                            </Text>
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeMedium17"
                            >
                              support@dreamcraft.com
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex flex-row gap-[30px] items-start justify-start mt-[9px]">
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeBold17"
                            >
                              Phone :
                            </Text>
                            <Text
                              className="text-[17px] text-black-900 tracking-[-0.17px]"
                              size="txtManropeMedium17"
                            >
                              (+63) 92 - 2253 - 234
                            </Text>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="bg-blue_gray-600 flex flex-col items-center justify-end p-4 w-full">
            <Img
              className="h-[21px] mt-[9px]"
              src="images/img_2023servicemarketdk.svg"
              alt="copyright2023"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
