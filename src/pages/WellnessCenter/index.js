import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import HomeFooter from "components/HomeFooter";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WellnessCenterPage = () => {
  const navigate = useNavigate();

  const [frame1000004318value, setFrame1000004318value] = React.useState("");
  const [frameninetyonevalue, setFrameninetyonevalue] = React.useState("");

  return (
    <>
    <Header />
      <div className="bg-white-A700 flex flex-col font-playfairdisplay gap-[33px] items-start justify-start mx-auto pb-5 pl-5 w-full">
        <div className="flex flex-col items-center max-w-[1920px] mx-auto md:px-5 w-full">
          <div className="md:h-[882px] h-[900px] relative w-full">
            <div className="absolute bottom-[0] h-[882px] inset-x-[0] mx-auto w-full">
              <Img
                className="h-[882px] m-auto object-cover w-full"
                src="images/img_yogagirl_1.png"
                alt="yogagirl"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[106px] h-max inset-y-[0] justify-start left-[3%] my-auto w-[71%]">
                <Text
                  className="leading-[115.00%] md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px] w-[49%] sm:w-full"
                  size="txtPlayfairDisplayRomanBold70"
                >
                  Find The Best Yoga Studio Nearby
                </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[1920px] mb-[246px] mx-auto md:px-5 w-full">
          <div className="sm:h-[1500px] h-[2176px] md:h-[3043px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1.5 w-[56%] md:w-full">
                  <div className="md:gap-5 gap-[95px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col h-[564px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                      <Img
                        className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[469px] md:w-full"
                        src="images/img_rectangle13_280x462.png"
                        alt="rectangleThirteen"
                      />
                      <div className="flex flex-col gap-6 h-[284px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-col font-opensans items-center justify-start w-auto">
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
                            Nature Wellness Massage & Spa{" "}
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pb-2.5 px-2.5 w-[89%] md:w-full">
                            <Img
                              className="h-[18px] ml-[38px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl"
                              size="txtManropeExtraBold20Black900"
                            >
                              Casanta Soong, LapuLapu City, Cebu
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                          onClick={() => navigate("/dawatawellness")}
                          shape="round"
                          color="blue_gray_800"
                          size="md"
                          variant="fill"
                        >
                          BOOK NOW
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-[576px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                    <Img
                        className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[469px] md:w-full"
                        src="images/img_image17_326x445.png"
                        alt="rectangleThirteen"
                      />
                      <div className="flex flex-col gap-6 h-[284px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-col font-opensans items-center justify-start w-auto">
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
                            309 reviews{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtInterBold24"
                          >
                            Wellnessland Wholeness Center{" "}
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pb-2.5 px-2.5 w-[89%] md:w-full">
                            <Img
                              className="h-[18px] ml-[38px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl"
                              size="txtManropeExtraBold20Black900"
                            >
                              318 Sikatuna St, Brgy Zapatera, Cebu City
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
                    <div className="bg-white-A700 flex flex-1 flex-col h-[584px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                    <Img
                        className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[469px] md:w-full"
                        src="images/img_image17_11.png"
                        alt="rectangleThirteen"
                      />
                      <div className="flex flex-col gap-6 h-[284px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-col font-opensans items-center justify-start w-auto">
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
                            234 reviews{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtInterBold24"
                          >
                            Yogahub Cebu{" "}
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pb-2.5 px-2.5 w-[89%] md:w-full">
                            <Img
                              className="h-[18px] ml-[38px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl"
                              size="txtManropeExtraBold20Black900"
                            >
                              Streetscape Saturnino, Cebu City
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
                    <div className="bg-white-A700 flex flex-1 flex-col h-[584px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                    <Img
                        className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[469px] md:w-full"
                        src="images/img_image17_12.png"
                        alt="rectangleThirteen"
                      />
                      <div className="flex flex-col gap-6 h-[284px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-col font-opensans items-center justify-start w-auto">
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
                            254 reviews{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtInterBold24"
                          >
                            Yoga Thai Massage & Spa{" "}
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start pb-2.5 px-2.5 w-[89%] md:w-full">
                            <Img
                              className="h-[18px] ml-[38px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl"
                              size="txtManropeExtraBold20Black900"
                            >
                              835 Katipunan St,<br/> Cebu City,
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
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] font-inter md:h-[1256px] sm:h-[600px] h-[958px] inset-x-[0] mx-auto w-full">
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[55%]">            
                  <div className="sm:flex-col flex-row md:gap-10 gap-[84px] grid md:grid-cols-1 grid-cols-2 justify-center w-full" orientation="horizontal">
                    <div className="flex flex-col gap-6 h-[238px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
                        <div className="flex flex-col font-opensans items-center justify-start w-auto">
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <div className="flex flex-row font-manrope gap-2.5 items-start justify-start md:pl-10 sm:pl-5 pl-[47px] w-[89%] md:w-full">
                        </div>
                      </div>
                    </div>
                  </div>   
                    <div className="flex flex-col gap-6 h-[238px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                      <div className="flex flex-row gap-1 items-center justify-between w-full">
                        <div className="flex flex-col font-opensans items-center justify-start w-auto">
                        </div>
                  </div>
                </div>
              </div>
              <HomeFooter
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-manrope h-[635px] md:h-auto inset-x-[0] items-center justify-start max-w-[1909px] mx-auto w-full"
                style={{ backgroundImage: "url('images/img_footer.png')" }}
              />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default WellnessCenterPage;
