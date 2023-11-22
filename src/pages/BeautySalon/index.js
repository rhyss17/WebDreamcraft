import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import HomeFooter from "components/HomeFooter";

import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BeautySalonPage = () => {
  const navigate = useNavigate();

  const [frame1000004318value, setFrame1000004318value] = React.useState("");
  const [frameninetyonevalue, setFrameninetyonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto pb-[247px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start w-full">
              <div className="md:h-[882px] h-[976px] relative w-full">
                <div className="absolute h-[102px] inset-x-[0] mx-auto top-[0] w-[99%] md:w-full">
                  <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[1915px] w-full">
                    <Img
                      className="h-[100px] sm:h-auto object-cover w-[1915px] md:w-full"
                      src="images/img_header.png"
                      alt="header"
                    />
                  </div>
                  <Img
                    className="common-pointer absolute h-[102px] inset-y-[0] left-[4%] my-auto object-cover w-[18%]"
                    src="images/img_21.png"
                    alt="TwentyOne"
                    onClick={() => navigate("/home1")}
                  />
                </div>
                <div className="absolute bottom-[0] h-[882px] inset-x-[0] mx-auto w-[99%] md:w-full">
                  <Img
                    className="h-[882px] m-auto object-cover w-full"
                    src="images/img_yogagirl_882x1920.png"
                    alt="yogagirl"
                  />
                  <div className="absolute bottom-[24%] flex flex-col md:gap-10 gap-[104px] justify-start left-[6%] w-[71%]">
                    <Text
                      className="leading-[115.00%] md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px] w-[49%] sm:w-full"
                      size="txtPlayfairDisplayRomanBold70"
                    >
                      Find The Best Beauty Salon Nearby
                    </Text>
                    <div className="bg-white-A700 flex md:flex-col flex-row gap-[46px] h-[88px] md:h-auto items-center justify-start md:ml-[0] ml-[404px] pl-10 sm:pl-5 pr-3.5 py-5 rounded-[44px] shadow-bs w-auto md:w-full">
                      <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-600 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Beauty Salon Name
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
                            size="xs"
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
                        wrapClassName="flex w-[211px] md:w-full"
                        suffix={
                          frameninetyonevalue?.length > 0 ? (
                            <CloseSVG
                              className="mt-0.5 mb-1 cursor-pointer h-[26px]"
                              onClick={() => setFrameninetyonevalue("")}
                              fillColor="#f8f8f8"
                              height={26}
                              width={26}
                              viewBox="0 0 26 26"
                            />
                          ) : (
                            <Img
                              className="mt-0.5 mb-1 cursor-pointer h-[26px]"
                              src="images/img_search_white_a700.svg"
                              alt="search"
                            />
                          )
                        }
                        shape="round"
                        color="blue_gray_600"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                  <div className="md:gap-5 gap-[66px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col h-[577px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                      <Img
                        className="h-[280px] sm:h-auto object-cover rounded-[24px] w-[465px] md:w-full"
                        src="images/img_rectangle13_1.png"
                        alt="rectangleThirteen"
                      />
                      <div className="flex flex-col gap-6 h-[297px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
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
                            Salonica Hair Lounge
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                            <Img
                              className="h-[18px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtManropeExtraBold20Black900"
                            >
                              Pope John Paul II Ave, Cebu City, 6000 Cebu
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
                    <div className="bg-white-A700 flex flex-1 flex-col h-[589px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                      <Img
                        className="h-[326px] sm:h-auto object-cover w-[461px] md:w-full"
                        src="images/img_image17_4.png"
                        alt="imageSeventeen"
                      />
                      <div className="flex flex-col gap-6 h-[263px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_frame_blue_gray_800.svg"
                              alt="frame"
                            />
                            <Text
                              className="text-base text-blue_gray-800"
                              size="txtOpenSansRomanBold16"
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
                            Salon de Rose-Paseo
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                            <Img
                              className="h-[18px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtManropeBold20Black900"
                            >
                              R. Arcenas St, Cebu City, 6000 Cebu
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          BOOK NOW
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-[598px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                      <Img
                        className="h-[326px] sm:h-auto object-cover w-[461px] md:w-full"
                        src="images/img_image17_5.png"
                        alt="imageSeventeen"
                      />
                      <div className="flex flex-col gap-6 h-[272px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
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
                            323 reviews{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtInterBold24"
                          >
                            Jess Beauty Salon & Spa
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                            <Img
                              className="h-[18px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtManropeExtraBold20Black900"
                            >
                              E Capitol Rd, Cebu City, 6000 Cebu
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          BOOK NOW
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-[598px] md:h-auto items-start justify-start outline outline-[1px] outline-black-900_3d rounded-[24px] w-full">
                      <Img
                        className="h-[326px] sm:h-auto object-cover w-[461px] md:w-full"
                        src="images/img_image17_6.png"
                        alt="imageSeventeen"
                      />
                      <div className="flex flex-col gap-6 h-[272px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                        <div className="flex flex-row gap-1 items-center justify-between w-full">
                          <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-6 w-6"
                              src="images/img_frame_blue_gray_800.svg"
                              alt="frame"
                            />
                            <Text
                              className="text-base text-blue_gray-800"
                              size="txtOpenSansRomanBold16"
                            >
                              5.0
                            </Text>
                          </div>
                          <Text
                            className="text-gray-900 text-lg w-auto"
                            size="txtPlayfairDisplayRomanBold18"
                          >
                            354 reviews{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtInterBold24"
                          >
                            Pink Lush Beauty Lounge
                          </Text>
                          <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                            <Img
                              className="h-[18px] mt-[3px] w-[18px]"
                              src="images/img_placeholder1.svg"
                              alt="placeholderOne"
                            />
                            <Text
                              className="text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtManropeBold20Black900"
                            >
                              176 F. Ramos St, Cebu City, 6000 Cebu
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="border border-blue_gray-800 border-solid cursor-pointer font-bold leading-[normal] rounded-lg text-base text-center w-full"
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          BOOK NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1565px] md:h-[856px] relative w-[45%] md:w-full">
                  <Img
                    className="absolute h-[710px] inset-x-[0] mx-auto object-cover rounded-[20px] top-[0] w-full"
                    src="images/img_image18_710x812.png"
                    alt="imageEighteen"
                  />
                  <Img
                    className="absolute bottom-[0] h-[856px] inset-x-[0] mx-auto object-cover rounded-[20px] w-full"
                    src="images/img_image19_856x817.png"
                    alt="imageNineteen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[264px] md:h-[950px] h-[976px] ml-auto mt-[-335.56px] w-[96%] md:w-full z-[1]">
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[53%]">
              <List
                className="sm:flex-col flex-row gap-[51px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex sm:flex-1 flex-col h-[577px] md:h-auto items-start justify-start sm:ml-[0] sm:mt-0 mt-[18px] outline outline-[1px] outline-black-900_3d rounded-[24px] w-[465px] sm:w-full">
                  <Img
                    className="h-[326px] sm:h-auto object-cover w-[461px] md:w-full"
                    src="images/img_image17_7.png"
                    alt="imageSeventeen"
                  />
                  <div className="flex flex-col gap-6 h-[251px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                    <div className="flex flex-row gap-1 items-center justify-between w-full">
                      <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_frame_blue_gray_800.svg"
                          alt="frame"
                        />
                        <Text
                          className="text-base text-blue_gray-800"
                          size="txtOpenSansRomanBold16"
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
                        Yogahub Cebu
                      </Text>
                      <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                        <Img
                          className="h-[18px] mt-[3px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-black-900 text-xl w-[93%] sm:w-full"
                          size="txtManropeBold20Black900"
                        >
                          2nd floor, Streetscape Paseo Saturnino, Cebu City
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
                <div className="bg-white-A700 flex sm:flex-1 flex-col font-inter h-[577px] md:h-auto items-start justify-start mb-[18px] sm:ml-[0] outline outline-[1px] outline-black-900_3d rounded-[24px] w-[465px] sm:w-full">
                  <Img
                    className="h-[326px] sm:h-auto object-cover w-[461px] md:w-full"
                    src="images/img_image17_8.png"
                    alt="imageSeventeen"
                  />
                  <div className="flex flex-col gap-6 h-[251px] md:h-auto items-start justify-start p-6 sm:px-5 w-[461px] sm:w-full">
                    <div className="flex flex-row gap-1 items-center justify-between w-full">
                      <div className="flex flex-row font-opensans gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_frame_blue_gray_800.svg"
                          alt="frame"
                        />
                        <Text
                          className="text-base text-blue_gray-800"
                          size="txtOpenSansRomanBold16"
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
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtInterBold24"
                      >
                        Yoga Thai Massage & Spa
                      </Text>
                      <div className="flex flex-row font-manrope gap-2.5 items-start justify-start w-[89%] md:w-full">
                        <Img
                          className="h-[18px] mt-[3px] w-[18px]"
                          src="images/img_placeholder1.svg"
                          alt="placeholderOne"
                        />
                        <Text
                          className="text-black-900 text-xl w-[93%] sm:w-full"
                          size="txtManropeBold20Black900"
                        >
                          2nd floor, Streetscape Paseo Saturnino, Cebu City
                        </Text>
                      </div>
                    </div>
                    <div className="bg-blue_gray-800 border border-blue_gray-800 border-solid flex flex-col font-playfairdisplay items-center justify-center sm:px-5 px-8 py-4 rounded-lg w-full">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPlayfairDisplayRomanBold16"
                      >
                        BOOK NOW
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <HomeFooter
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-manrope h-[635px] md:h-auto inset-x-[0] items-center justify-start max-w-[1858px] mx-auto w-full"
              style={{ backgroundImage: "url('images/img_footer.png')" }}
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-center ml-[72px] mt-[-NaNpx] w-[22%] z-[1]">
            <Text
              className="text-black-900 text-xl"
              size="txtManropeExtraBold20Black900"
            >
              Sort by{" "}
            </Text>
            <SelectBox
              className="border border-blue_gray-800 border-solid font-bold font-playfairdisplay leading-[normal] text-base text-left w-[82%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-1.5 w-2.5"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="button"
              options={buttonOptionsList}
              isSearchable={false}
              placeholder="Personal Recommendation"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautySalonPage;
