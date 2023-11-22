import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import FIgmaStylicleSalonLandingPageHeader from "components/FIgmaStylicleSalonLandingPageHeader";

import { CloseSVG } from "../../assets/images";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FIgmaStylicleSalonLandingPagePage = () => {
  const [frame1000004318value, setFrame1000004318value] = React.useState("");
  const [frameninetyonevalue, setFrameninetyonevalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-manrope h-[1200px] mx-auto py-[75px] relative w-full"
        style={{ backgroundImage: "url('images/img_group26.svg')" }}
      >
        <div className="h-[1028px] sm:h-[105px] md:h-[188px] m-auto pb-[918px] md:px-5 w-full">
          <FIgmaStylicleSalonLandingPageHeader className="absolute h-[100px] md:h-[188px] inset-x-[0] mx-auto top-[0] w-full" />
          <Img
            className="absolute h-[105px] left-[2%] object-cover top-[0] w-[17%]"
            src="images/img_21.png"
            alt="TwentyOne"
          />
        </div>
        <div className="absolute md:h-[1452px] sm:h-[818px] h-[833px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-800_7f flex flex-col h-max inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[599px] w-full">
            <div className="bg-blue_gray-800 flex flex-col items-center justify-start p-[74px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col h-[657px] md:h-auto items-center justify-end max-w-[693px] mb-[27px] py-4 w-full">
                <div className="flex flex-col h-[611px] md:h-auto items-center justify-start rounded-[40px] w-full">
                  <div className="flex md:flex-col flex-row gap-6 h-full items-center justify-start rounded-[40px] w-full">
                    <Img
                      className="flex-1 md:flex-none md:h-[611px] sm:h-auto h-full max-h-[611px] object-cover sm:w-[] md:w-[]"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-6 items-start justify-center w-full">
                        <Img
                          className="h-[293px] md:h-auto object-cover w-full"
                          src="images/img_rectangle11.png"
                          alt="rectangleEleven"
                        />
                        <Img
                          className="h-[293px] md:h-auto object-cover w-full"
                          src="images/img_rectangle10.png"
                          alt="rectangleTen"
                        />
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-center w-full">
                        <Img
                          className="h-[293px] md:h-auto object-cover w-full"
                          src="images/img_rectangle11_293x215.png"
                          alt="rectangleEleven"
                        />
                        <Img
                          className="h-[293px] md:h-auto object-cover w-full"
                          src="images/img_rectangle10_293x215.png"
                          alt="rectangleTen"
                        />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800 flex flex-col h-full inset-y-[0] items-start justify-end left-[0] my-auto p-[26px] sm:px-5 w-[63%]">
            <div className="bg-blue_gray-800_7f flex flex-col gap-[52px] items-start justify-start mb-[104px] mt-[181px] w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start max-w-[655px] w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start max-w-[655px] w-full">
                  <div className="flex flex-col font-manrope items-center justify-start">
                    <Text
                      className="text-[15px] text-white-A700 tracking-[1.50px] uppercase"
                      size="txtManropeSemiBold15"
                    >
                      YOGA STUDIO, Wellness center, Beauty Salon, massage
                    </Text>
                  </div>
                  <Text
                    className="leading-[115.00%] max-w-[655px] md:max-w-full md:text-5xl text-[70px] text-lime-100 tracking-[-0.70px]"
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
              <div className="bg-gray-50 flex flex-col items-center justify-start rounded-[44px] w-auto md:w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row gap-[46px] h-[88px] md:h-auto items-center justify-start pl-10 sm:pl-5 pr-3.5 py-5 rounded-[44px] shadow-bs w-auto">
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-start w-auto md:w-full">
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
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FIgmaStylicleSalonLandingPagePage;
