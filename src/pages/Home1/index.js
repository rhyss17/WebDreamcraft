import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import HomeFooter from "components/HomeFooter";

import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const navigate = useNavigate();

  const [frame1000004318value, setFrame1000004318value] = React.useState("");
  const [frameninetyonevalue, setFrameninetyonevalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto pr-[3px] py-[3px] w-full">
            <div className="flex flex-col gap-[15px] justify-start mb-[27px] mt-[35px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[148px] w-[91%] md:w-full">
              <Img
                    className="h-[105px] md:h-auto object-cover"
                    src="images/img_21.png"
                    alt="TwentyOne"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:mt-0 mt-[7px] w-[28%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-auto">
                      <Text
                        className="text-base text-blue_gray-800 text-center w-auto"
                        size="txtManropeBold16"
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
                      <a className="text-base text-blue_gray-800 text-center w-auto">
                        <Text
                          className="common-pointer"
                          size="txtManropeBold16"
                          onClick={() => navigate("/contactus")}
                        >
                          Contact Us
                        </Text>
                      </a>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-bold min-w-[96px] rounded text-base text-center"
                      onClick={() => navigate("/login")}
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
                      size="txtManropeSemiBold15"
                      variant="fill"
                    >
                      Signup
                    </Button>
                  </div>
                </div>
              <div className="bg-blue_gray-800_7f flex md:flex-col flex-row md:gap-5 items-start justify-start p-[55px] md:px-10 sm:px-5 w-full">
                <div className="bg-blue_gray-800_7f flex flex-1 flex-col gap-[52px] h-[513px] md:h-auto items-start justify-start max-w-[936px] mb-[33px] ml-16 md:ml-[0] md:mt-0 mt-[137px] w-full">
                  <div className="flex flex-col gap-6 items-start justify-start max-w-[712px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start max-w-[712px] w-full">
                      <Text
                        className="text-[15px] text-white-A700 tracking-[1.50px] uppercase w-auto"
                        size="txtManropeSemiBold15"
                      >
                        YOGA STUDIO, Wellness center, Beauty Salon, massage
                      </Text>
                      <Text
                        className="leading-[115.00%] max-w-[655px] md:max-w-full md:text-5xl text-[70px] text-lime-100_01 tracking-[-0.70px]"
                        size="txtPlayfairDisplayRomanBold70"
                      >
                        Find The Best Establishment Nearby
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[508px] sm:w-full">
                      <Text
                        className="text-lg text-white-A700 w-[307px]"
                        size="txtManropeRegular18"
                      >
                        Yourself deserves to be taken care of.{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col h-[105px] md:h-auto items-center justify-start max-w-[919px] rounded-[52px] w-full">
                    <div className="bg-white-A700 flex md:flex-col flex-row gap-[46px] h-[88px] md:h-auto items-center justify-start max-w-[919px] pl-10 sm:pl-5 pr-3.5 py-5 rounded-[44px] shadow-bs w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row font-inter gap-6 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-600 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Establishment Name
                          </Text>
                          <Input
                            name="frame1000004318"
                            placeholder="Book your services..."
                            value={frame1000004318value}
                            onChange={(e) => setFrame1000004318value(e)}
                            className="!placeholder:text-gray-900 !text-gray-900 font-roboto leading-[normal] p-0 text-left text-sm w-full"
                            wrapClassName="flex w-[307px]"
                            suffix={
                              frame1000004318value?.length > 0 ? (
                                <CloseSVG
                                  className="mt-auto mb-px cursor-pointer h-4 ml-[35px]"
                                  onClick={() => setFrame1000004318value("")}
                                  fillColor="#141414"
                                  height={16}
                                  width={16}
                                  viewBox="0 0 16 16"
                                />
                              ) : (
                                <Img
                                  className="mt-auto mb-px cursor-pointer h-4 ml-[35px]"
                                  src="images/img_search.svg"
                                  alt="search"
                                />
                              )
                            }
                            shape="square"
                            color="gray_900"
                            size="sm"
                            variant="outline"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-600 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Address
                          </Text>
                          <div className="font-roboto h-6 pb-2 relative w-[307px]">
                            <div className="absolute md:h-6 h-[23px] inset-[0] justify-center m-auto w-full">
                              <div className="border-b border-gray-900 border-solid h-6 m-auto w-full"></div>
                              <Img
                                className="absolute h-4 right-[0] top-[0] w-4"
                                src="images/img_location.svg"
                                alt="location"
                              />
                            </div>
                            <Text
                              className="absolute left-[0] text-gray-900 text-sm top-[0] w-auto"
                              size="txtRobotoRegular14"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="frameNinetyOne"
                        placeholder="Search"
                        value={frameninetyonevalue}
                        onChange={(e) => setFrameninetyonevalue(e)}
                        className="!placeholder:text-gray-50 !text-gray-50 font-manrope font-semibold leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="flex md:flex-1 w-[178px] md:w-full"
                        suffix={
                          frameninetyonevalue?.length > 0 ? (
                            <CloseSVG
                              className="mt-0.5 mb-1 cursor-pointer h-[26px] ml-[23px]"
                              onClick={() => setFrameninetyonevalue("")}
                              fillColor="#f8f8f8"
                              height={26}
                              width={26}
                              viewBox="0 0 26 26"
                            />
                          ) : (
                            <Img
                              className="mt-0.5 mb-1 cursor-pointer h-[26px] ml-[23px]"
                              src="images/img_search_white_a700.svg"
                              alt="search"
                            />
                          )
                        }
                        shape="round"
                        color="blue_gray_600"
                        size="lg"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <Img
                  className="md:flex-1 h-[609px] sm:h-auto ml-6 md:ml-[0] md:mt-0 mt-[62px] object-cover w-[12%] md:w-full"
                  src="images/img_rectangle7.png"
                  alt="rectangleSeven"
                />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[23px] md:mt-0 mt-[51px] w-1/4 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 h-[632px] md:h-auto items-start justify-center w-[212px]">
                    <Img
                      className="h-[304px] md:h-auto object-cover w-full"
                      src="images/img_rectangle11.png"
                      alt="rectangleEleven"
                    />
                    <Img
                      className="h-[304px] md:h-auto object-cover w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                  </div>
                  <div className="flex flex-col gap-6 h-[632px] md:h-auto items-start justify-center w-[212px]">
                    <Img
                      className="h-[304px] md:h-auto object-cover w-full"
                      src="images/img_rectangle11_293x215.png"
                                alt="rectangleEleven"
                    />
                    <Img
                      className="h-[304px] md:h-auto object-cover w-full"
                      src="images/img_rectangle10_293x215.png"
                      alt="rectangleTen"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[-29px] mx-auto w-full z-[1]">
            <div className="flex flex-col items-start justify-start pb-10 pr-10 sm:pr-5 w-full">
              <div className="flex flex-col h-[168px] md:h-auto items-center justify-center max-w-[1681px] md:px-10 sm:px-5 px-[120px] w-full">
                <div className="flex md:flex-col flex-row gap-[53px] h-[168px] md:h-auto items-center justify-center max-w-[1676px] w-full">
                  <div
                    className="common-pointer flex flex-col gap-6 h-[147px] md:h-auto items-center justify-start w-60"
                    onClick={() => navigate("/yogastudiothree")}
                  >
                    <div className="h-[104px] relative w-[141px]">
                      <div className="absolute bg-lime-100_7f h-24 left-[0] rounded-[50%] top-[0] w-24"></div>
                      <Img
                        className="absolute h-[104px] inset-y-[0] my-auto object-cover right-[0] w-[104px]"
                        src="images/img_icons8yoga501.png"
                        alt="icons8yoga501"
                      />
                    </div>
                    <Text
                      className="text-center text-gray-800 text-lg w-[105px]"
                      size="txtManropeBold18"
                    >
                      Yoga Studio
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-col gap-6 items-center justify-start w-60"
                    onClick={() => navigate("/wellnesscenter")}
                  >
                    <Img
                      className="h-24 w-[126px]"
                      src="images/img_frame1000004333.svg"
                      alt="frame1000004333"
                    />
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      Wellness Center
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-col gap-6 items-center justify-start w-60"
                    onClick={() => navigate("/beautysalon")}
                  >
                    <Img
                      className="h-24 w-[119px]"
                      src="images/img_frame1000004335.svg"
                      alt="frame1000004335"
                    />
                    <Text
                      className="text-center text-gray-800 text-xl w-auto"
                      size="txtManropeBold20"
                    >
                      Beauty Salon
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-col gap-6 items-center justify-start w-60"
                    onClick={() => navigate("/massage")}
                  >
                    <Img
                      className="h-24 w-[126px]"
                      src="images/img_frame1000004334.svg"
                      alt="frame1000004334"
                    />
                    <Text
                      className="text-center text-gray-800 text-lg w-auto"
                      size="txtManropeBold18"
                    >
                      Massage
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-playfairdisplay items-center max-w-[2287px] mt-[26px] mx-auto md:px-5 px-[3px] w-full">
          <div className="md:h-[1246px] sm:h-[929px] h-[937px] relative w-full">
            <div className="absolute bg-lime-100_7f flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-14 md:px-10 sm:px-5 w-[85%]">
              <div className="flex flex-col items-center justify-start max-w-[1216px] mb-[726px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start max-w-3xl w-full">
                  <div className="flex flex-col font-playfairdisplay items-start justify-start w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-full"
                      size="txtPlayfairDisplayRomanBold45"
                    >
                      Exploring high rated establishment
                    </Text>
                  </div>
                  <Text
                    className="text-center text-gray-700 text-xl w-full"
                    size="txtManropeRegular20"
                  >
                    Yoga Studio. Wellness Center. Beauty Salon. Massage
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row gap-6 md:h-auto h-max inset-y-[0] items-center justify-center my-auto right-[0] w-auto">
              <Img
                className="h-12 w-12"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[94%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                  <Img
                    className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[383px] md:w-full"
                    src="images/img_rectangle13.png"
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
                        className="common-pointer text-gray-900 text-lg w-auto"
                        size="txtPlayfairDisplayRomanBold18"
                        onClick={() => navigate("/customerreviews")}
                      >
                        215 reviews{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Dawata Wellness Yoga Studio{" "}
                      </Text>
                      <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pb-2.5 pr-2.5 w-full">
                        <Img
                          className="h-[18px] mt-[3px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-black-900 text-xl"
                          size="txtManropeExtraBold20Black900"
                        >
                          Cebu Business Park
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                      onClick={() => navigate("/yogastudiothree")}
                      shape="round"
                      color="blue_gray_800"
                      size="md"
                      variant="fill"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
                <div className="md:h-[554px] h-[561px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto">
                    <Img
                      className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[383px] md:w-full"
                      src="images/img_rectangle13.png"
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
                          Bliss Yoga Cebu
                        </Text>
                        <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-full">
                          <Img
                            className="h-[18px] mt-[3px] w-[18px]"
                            src="images/img_placeholder1.svg"
                            alt="placeholderOne"
                          />
                          <Text
                            className="sm:flex-1 text-black-900 text-xl w-[93%] sm:w-full"
                            size="txtManropeExtraBold20Black900"
                          >
                            Axis Entertainment Avenue, Vibo Place, N Escario St
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="md"
                        variant="fill"
                      >
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="absolute h-72 inset-x-[0] mx-auto object-cover rounded-[24px] top-[0] w-full"
                    src="images/img_rectangle4548.png"
                    alt="rectangle4548"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col h-[559px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-[388px] sm:w-full">
                  <Img
                    className="h-[275px] sm:h-auto object-cover w-96 md:w-full"
                    src="images/img_rectangle11_275x384.png"
                    alt="rectangleEleven"
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
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Wellnessland Urban Center
                      </Text>
                      <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-base text-black-900_01 w-auto"
                          size="txtManropeBold16Black90001"
                        >
                          Wellnessland Bldng, 314 Sikatura St
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
                    className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[369px] md:w-full"
                    src="images/img_rectangle13_280x369.png"
                    alt="rectangleThirteen"
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
                        Bloom Lane
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
                          BMD Building, Salinas Dr, Cebu City
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
                <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-auto sm:w-full">
                  <Img
                    className="h-[275px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-96 md:w-full"
                    src="images/img_rectangle11_1.png"
                    alt="rectangleEleven"
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
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Healing Point Massage
                      </Text>
                      <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="max-w-[332px] md:max-w-full text-black-900 text-xl"
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
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <Button
          className="common-pointer bg-transparent cursor-pointer font-bold font-playfairdisplay max-w-3xl ml-4 md:ml-[0] mt-[84px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-full"
          onClick={() => navigate("/personalrecommendation")}
          size="xs"
        >
          Personalized Recommendation
        </Button>
        <div className="flex md:flex-col flex-row font-playfairdisplay gap-6 h-[641px] md:h-auto items-center justify-center max-w-[1679px] mt-[31px] mx-auto md:px-5 w-full">
          <Img
            className="h-12 w-12"
            src="images/img_arrowleft.svg"
            alt="arrowleft_One"
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
                      Unit 121, RainTree Mall, Fuente Osmeña Cir, Cebu City
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
            src="images/img_arrowright.svg"
            alt="arrowright_One"
          />
        </div>
        <div className="flex flex-col font-manrope items-center justify-start w-full">
          <div className="bg-gradient  flex flex-col gap-14 items-center justify-start max-w-[1906px] py-16 w-full">
            <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[120px] py-[11px] w-full">
              <div className="flex flex-col gap-0.5 items-center justify-start w-[552px] sm:w-full">
                <Text
                  className="text-[15px] text-blue_gray-800 text-center tracking-[1.50px] uppercase w-auto"
                  size="txtManropeSemiBold15Bluegray800"
                >
                  Testimonials
                </Text>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45"
                >
                  What our Customers says...
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-800 flex flex-col items-center justify-center max-w-[1682px] mx-auto md:px-5 py-24 rounded-[40px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center sm:px-5 px-8 w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-center p-3.5 w-[48%] md:w-full">
                  <div className="bg-white-A700 h-[228px] mb-60 sm:ml-[0] ml-[69px] rounded-[35px] w-[13%]"></div>
                  <div className="flex mb-[25px] mr-[106px] relative w-[53%] sm:w-full">
                    <div className="bg-white-A700 h-[443px] my-auto rounded-[35px] w-1/4"></div>
                    <Img
                      className="h-[246px] mb-[83px] ml-[-35.5px] mt-auto rounded-[50%] w-[89%] z-[1]"
                      src="images/img_gurl.png"
                      alt="gurl"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[594px] sm:w-full">
                  <div className="flex flex-col gap-5 h-[348px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-5 w-[576px]"
                      src="images/img_frame13.svg"
                      alt="frameThirteen"
                    />
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-light_green-50 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20"
                      >
                        Leslie Alexander
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Moncton, Canada
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-50 tracking-[-0.72px] w-auto"
                        size="txtPlayfairDisplayRomanSemiBold36"
                      >
                        Helpful{" "}
                      </Text>
                      <Text
                        className="leading-[180.00%] max-w-[594px] md:max-w-full text-[19px] text-white-A700"
                        size="txtManropeRegular19"
                      >
                        <>
                          &quot;DreamCraft has made finding stress relief so
                          much easier. Their platform simplifies the search for
                          wellness establishments, making my journey to
                          relaxation a breeze. Thanks to DreamCraft, I&#39;ve
                          found my perfect sanctuary for stress relief.&quot;
                        </>
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-[576px]"
                      src="images/img_frame14.svg"
                      alt="frameFourteen"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[52px] w-[119px]"
              src="images/img_frame1000004329.svg"
              alt="frame1000004329"
            />
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-start w-full">
          <div className="bg-blue_gray-50_38 flex flex-col h-[586px] md:h-auto items-center justify-center max-w-[1906px] md:px-10 px-24 sm:px-5 py-[34px] rounded-[30px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1328px] mx-auto w-full">
              <div className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1328px] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                  <Img
                    className="h-[353px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                    src="images/img_image10.png"
                    alt="imageTen"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[46px] items-start justify-start max-w-[652px] w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start max-w-[635px] w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                      size="txtPlayfairDisplayRomanBold45"
                    >
                      Subscribe to newsletter
                    </Text>
                    <Text
                      className="leading-[137.50%] max-w-[635px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      Sign up for our newsletter to stay up-to-date on the
                      latest promotions, discounts, and new features releases.
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-pink-100 border-solid flex flex-row sm:gap-10 gap-[211px] items-center justify-start p-[9px] rounded-[34px] w-[84%] md:w-full">
                    <div className="flex flex-row gap-1.5 items-end justify-center ml-[19px] w-[29%]">
                      <Img
                        className="h-8 w-8"
                        src="images/img_email1.svg"
                        alt="emailOne"
                      />
                      <Text
                        className="my-[5px] text-[15px] text-cyan-900"
                        size="txtManropeRegular15"
                      >
                        Enter your email
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[144px] rounded-[25px] text-base text-center"
                      color="gray_900"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

export default Home1Page;