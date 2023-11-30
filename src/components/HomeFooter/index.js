import React from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate } from 'react-router-dom';


const HomeFooter = (props) => {
  const navigate = useNavigate();
  return (
    <>
       <div className="absolute bottom-[0] flex font-manrope inset-x-[0] items-center justify-center mx-auto w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-orange-50 sm:h-[311px] h-[560px] md:h-[714px] p-[63px] md:px-10 sm:px-5 relative w-full">
                <div className="absolute flex flex-col gap-[52px] h-max inset-[0] items-center justify-end m-auto max-w-[1200px] w-full">
                  <Line className="bg-white-A700_67 h-px w-full" />
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-start justify-start max-w-[1199px] w-full">
                    <div className="flex flex-col gap-[21px] items-start justify-start w-[272px]">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                        size="txtManropeBold22"
                      >
                        Explore
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[17px] text-black-900 tracking-[-0.17px]"
                        size="txtManropeMedium17"
                      >
                        <>
                        <span onClick={() => navigate("/home1")}>Home</span>
                        <br />
                        <span onClick={() => navigate("/aboutus")}>About Us</span>
                        <br />
                        <span onClick={() => navigate("/")}>Services</span>
                        <br />
                        <span onClick={() => navigate("/contactus")}>Contact Us</span>
                        <br />
                        <span onClick={() => navigate("/customerreviews")}>Reviews</span>
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start w-[271px]">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                        size="txtManropeBold22"
                      >
                        Utility Pages
                      </Text>
                      <Text
                        className="leading-[200.00%] text-[17px] text-black-900 tracking-[-0.17px]"
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
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start w-[324px]">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                        size="txtManropeBold22"
                      >
                        Keep in Touch
                      </Text>
                      <ul className="flex flex-col gap-3.5 items-start justify-start w-[324px] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-3.5 items-start justify-start">
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                                size="txtManropeBold17"
                              >
                                Address :
                              </Text>
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-[203px]"
                                size="txtManropeMedium17"
                              >
                                Bliss Labangon, Cebu City{" "}
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[47px] items-center justify-start">
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                                size="txtManropeBold17"
                              >
                                Mail :
                              </Text>
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                                size="txtManropeMedium17"
                              >
                                support@dreamcraft.com
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[29px] items-start justify-start">
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                                size="txtManropeBold17"
                              >
                                Phone :
                              </Text>
                              <Text
                                className="text-[17px] text-black-900 tracking-[-0.17px] w-40"
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
                <Img
                  className="absolute h-[105px] left-[16%] object-cover top-[11%] w-[18%]"
                  src="images/img_21.png"
                  alt="TwentyOne"

                />
              </div>
              <div className="bg-blue_gray-600 flex flex-col items-center justify-end p-[25px] sm:px-5 w-full">
                <Img
                  className="h-[21px] mt-[3px]"
                  src="images/img_2023servicemarketdk.svg"
                  alt="2023servicemark"
                />
              </div>
            </div>
          </div>
     
    </>
  );
};

export default HomeFooter;
