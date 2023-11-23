import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="sm:h-[1058px] md:h-[1125px] h-[1443px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] md:h-[1125px] sm:h-[762px] h-[946px] inset-x-[0] mx-auto w-full">
            <div className="absolute bg-white-A700 h-[762px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <div className="absolute bottom-[0] flex flex-col gap-[45px] inset-x-[0] items-center justify-start max-w-[659px] mx-auto w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start max-w-[659px] w-full">
                <Text
                  className="text-[15px] text-blue_gray-800 text-center tracking-[1.50px] uppercase w-auto"
                  size="txtManropeSemiBold15Bluegray800"
                >
                  Our Values
                </Text>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45"
                >
                  The Principles that drive us
                </Text>
              </div>
              <div className="flex flex-col gap-9 items-start justify-start w-[620px] md:w-full">
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[601px] md:w-full">
                  <Img
                    className="h-[111px] md:h-auto object-cover w-[111px]"
                    src="images/img_51.png"
                    alt="FiftyOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22"
                    >
                      Bridge to Well-being
                    </Text>
                    <Text
                      className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      At Dream Craft, we are the bridge connecting individuals
                      to stress-relieving establishments, empowering you to
                      enhance your overall well-being.
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[598px] md:w-full">
                  <Img
                    className="h-[98px] md:h-auto object-cover w-[108px] sm:w-full"
                    src="images/img_6970.png"
                    alt="6970"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22"
                    >
                      Great Services
                    </Text>
                    <Text
                      className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      <>
                        We&#39;re dedicated to providing you with a wide array
                        of wellness services to help you manage stress and
                        improve your sleep. Our commitment to excellence is
                        unwavering.
                      </>
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-[601px] md:w-full">
                  <Img
                    className="h-[111px] md:h-auto object-cover w-[111px]"
                    src="images/img_71.png"
                    alt="SeventyOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-[458px] sm:w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22"
                    >
                      100% Genuine
                    </Text>
                    <Text
                      className="leading-[175.00%] max-w-[458px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      <>
                        Dream Craft is your genuine partner on the journey to
                        well-being. We&#39;re not just a platform; we&#39;re
                        your trusted companion in finding peace and tranquility.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[1058px] inset-x-[0] mx-auto top-[0] w-full">
            <Header className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            <Img
              className="common-pointer absolute h-[105px] left-[4%] object-cover top-[1%] w-[18%]"
              src="images/img_21.png"
              alt="TwentyThree"
              onClick={() => navigate("/home1")}
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="h-[1058px] relative w-full">
                <div className="bg-blue_gray-800 h-[495px] mt-[100px] mx-auto w-full"></div>
                <div className="absolute h-[1058px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[1058px] m-auto object-cover w-full"
                    src="images/img_photo.png"
                    alt="photo"
                  />
                  <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-start max-w-[649px] mx-auto top-[21%] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start max-w-[649px] w-full">
                      <Text
                        className="text-[15px] text-center text-pink-100 tracking-[1.50px] uppercase w-auto"
                        size="txtManropeSemiBold15Pink100"
                      >
                        SHORT STORY ABOUT US
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[649px] md:max-w-full sm:text-[41px] md:text-[47px] text-[55px] text-center text-lime-100 tracking-[-0.55px]"
                        size="txtPlayfairDisplayRomanBold55"
                      >
                        Discover the Journey behind Dream Craft
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-extrabold min-w-[177px] text-center text-sm tracking-[1.68px] uppercase"
                      shape="square"
                      color="blue_gray_800"
                      size="xl"
                      variant="fill"
                    >
                      CoNTACT US
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-100_7f_01 flex flex-col items-end justify-start mt-[147px] p-[63px] md:px-10 sm:px-5 shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start mb-[138px] mr-[235px] w-[70%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1247px] w-full">
              <Img
                className="md:flex-1 h-[453px] sm:h-auto object-cover w-[594px] md:w-full"
                src="images/img_image16.png"
                alt="imageSixteen"
              />
              <div className="bg-blue_gray-800 flex flex-1 flex-col items-start justify-start max-w-[653px] md:px-10 sm:px-5 px-[72px] py-[74px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[508px] sm:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[460px] sm:w-full">
                    <Text
                      className="text-[15px] text-white-A700 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15"
                    >
                      About Us
                    </Text>
                    <Text
                      className="leading-[130.00%] max-w-[460px] md:max-w-full sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[-0.45px]"
                      size="txtPlayfairDisplayRomanBold45WhiteA700"
                    >
                      Bridging the gap to well-being
                    </Text>
                  </div>
                  <Text
                    className="leading-[175.00%] max-w-[508px] md:max-w-full text-lg text-white-A700"
                    size="txtManropeRegular18"
                  >
                    <>
                      Dream Craft is your gateway to a world of wellness.
                      We&#39;re a dedicated team based in [Your Location], on a
                      mission to simplify and enhance everyday life for
                      individuals seeking stress relief and better sleep. Our
                      platform unites wellness establishments and individuals in
                      an accessible and user-friendly environment.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1912px] mt-[60px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col h-[903px] md:h-auto items-center justify-center max-w-[1110px] md:px-10 sm:px-5 px-[129px] py-[108px] w-full">
            <div className="flex flex-col items-center justify-start pl-5 w-full">
              <div className="flex flex-col gap-[33px] items-start justify-start max-w-[873px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[747px] w-full">
                  <div className="flex flex-col gap-1.5 h-[94px] md:h-auto items-start justify-start w-[613px] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-800 tracking-[1.50px] uppercase w-auto"
                      size="txtManropeSemiBold15Bluegray800"
                    >
                      Our Journey Begins
                    </Text>
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-800 tracking-[-0.45px] w-[510px]"
                      size="txtPlayfairDisplayRomanBold45Gray800"
                    >
                      The inception of a dream
                    </Text>
                  </div>
                  <Text
                    className="leading-[175.00%] max-w-[747px] md:max-w-full text-gray-700 text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    Dream Craft was founded in 2023 by a group of passionate
                    individuals who recognized a significant challenge in the
                    wellness industry. Despite the presence of numerous
                    establishments, it was often challenging for individuals to
                    find the right solutions for their stress-related issues.
                    Our founders envisioned a platform that could bring these
                    wellness providers together, making it easy for users to
                    find what they need, and resolve their concerns quickly and
                    effortlessly—all in one place.
                  </Text>
                </div>
                <div className="flex flex-col font-playfairdisplay gap-5 items-start justify-start max-w-[862px] w-full">
                  <Text
                    className="leading-[130.00%] text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.22px]"
                    size="txtPlayfairDisplayRomanBold22"
                  >
                    <span className="text-gray-900 font-playfairdisplay text-left font-bold">
                      <>
                        Your Wellness, Our Priority
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-manrope text-left text-lg font-normal">
                      <>
                        Dream Craft is more than a platform; it&#39;s your
                        partner in well-being. We understand the importance of
                        holistic stress management and peaceful sleep. Your
                        well-being is at the forefront of our mission.
                        <br />
                      </>
                    </span>
                  </Text>
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
                    size="txtPlayfairDisplayRomanBold22Black900"
                  >
                    Stages of your journey with us
                  </Text>
                  <div className="flex flex-col font-manrope gap-[25px] items-start justify-start max-w-[862px] w-full">
                    <List
                      className="flex flex-col gap-[25px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-start justify-start max-w-[707px] w-full">
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_vector_blue_gray_800.svg"
                          alt="vector"
                        />
                        <div className="flex flex-1 flex-col gap-px items-start justify-start max-w-[645px] w-full">
                          <Text
                            className="text-[19px] text-gray-900 w-auto"
                            size="txtManropeBold19"
                          >
                            The Assessment Stage
                          </Text>
                          <Text
                            className="leading-[175.00%] max-w-[645px] md:max-w-full text-gray-700 text-lg"
                            size="txtManropeRegular18Gray700"
                          >
                            We begin by assessing your unique stress and sleep
                            patterns, understanding your individual needs, and
                            guiding you on your path to well-being.
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-start justify-start max-w-[862px] w-full">
                        <Img
                          className="h-[33px] w-[33px]"
                          src="images/img_vector_blue_gray_800.svg"
                          alt="vector"
                        />
                        <div className="flex flex-1 flex-col gap-px items-start justify-start max-w-[800px] w-full">
                          <Text
                            className="text-[19px] text-gray-900 w-auto"
                            size="txtManropeBold19"
                          >
                            The Initialisation Stage
                          </Text>
                          <Text
                            className="leading-[175.00%] max-w-[800px] md:max-w-full text-gray-700 text-lg"
                            size="txtManropeRegular18Gray700"
                          >
                            With the knowledge gained during the assessment, we
                            help you initialize your journey towards a more
                            peaceful life by connecting you with the right
                            establishments and services.
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start w-[510px] sm:w-full">
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_vector_blue_gray_800.svg"
                        alt="vector"
                      />
                      <div className="flex flex-col gap-px items-start justify-start w-[448px] sm:w-full">
                        <Text
                          className="text-[19px] text-gray-900 w-auto"
                          size="txtManropeBold19"
                        >
                          The Treatment Stage
                        </Text>
                        <Text
                          className="text-gray-700 text-lg w-[448px]"
                          size="txtManropeRegular18Gray700"
                        >
                          <>
                            In the treatment stage, you&#39;ll find the tools
                            and resources needed to address your stress-related
                            challenges, helping you achieve the tranquility and
                            peace you deserve.
                            <br />
                            <br />
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[42%] md:w-full">
            <div className="h-[827px] relative w-full">
              <Img
                className="h-[827px] m-auto object-cover w-full"
                src="images/img_photo_827x802.png"
                alt="photo_One"
              />
              <div className="absolute bg-gray-800_6c flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <Img
                  className="h-[827px] md:h-auto object-cover w-full"
                  src="images/img_image20.png"
                  alt="imageTwenty"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-playfairdisplay h-[1673px] sm:h-[1691px] md:h-[2845px] mt-[230px] md:px-5 relative w-full">
          <div className="absolute bg-gradient1  flex flex-col gap-14 inset-x-[0] items-center justify-start mx-auto py-16 top-[0] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1910px] md:px-10 sm:px-5 px-[120px] py-[11px] w-full">
              <div className="flex flex-col items-center justify-start w-[552px] sm:w-full">
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 tracking-[-0.45px] w-auto"
                  size="txtPlayfairDisplayRomanBold45"
                >
                  Developers
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-800 flex flex-col font-manrope items-center justify-start md:ml-[0] ml-[69px] mt-14 p-[13px] rounded-[40px] w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[286px] mt-[71px] w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[94%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:pr-10 sm:pr-5 pr-[68px] w-[76%] md:w-full">
                    <div className="h-[229px] md:h-[250px] mb-[21px] relative w-[21%] md:w-full">
                      <Img
                        className="h-[229px] m-auto object-cover w-full"
                        src="images/img_ellipse5.png"
                        alt="ellipseFive"
                      />
                      <Img
                        className="absolute h-[229px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_ellipse1.png"
                        alt="ellipseOne"
                      />
                    </div>
                    <Img
                      className="h-[229px] md:h-auto md:mt-0 mt-[21px] object-cover"
                      src="images/img_ellipse2.png"
                      alt="ellipseTwo"
                    />
                    <Img
                      className="h-[229px] md:h-auto md:mt-0 mt-[21px] object-cover"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                  </div>
                  <Img
                    className="h-[229px] md:h-auto md:mt-0 mt-[21px] object-cover"
                    src="images/img_ellipse5.png"
                    alt="ellipseFour"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-7 w-[99%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtManropeBold32"
                  >
                    Rhyss Gianne Almeda{" "}
                  </Text>
                  <Text
                    className="mb-[11px] md:ml-[0] ml-[94px] md:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtManropeBold32"
                  >
                    Christzia Marie Ata
                  </Text>
                  <Text
                    className="mb-[13px] md:ml-[0] ml-[206px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtManropeBold32"
                  >
                    Jobeth Albert Cala
                  </Text>
                  <Text
                    className="mb-[9px] ml-36 md:ml-[0] md:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtManropeBold32"
                  >
                    <span className="text-white-A700 font-manrope text-left font-bold">
                      Ellan Jude{" "}
                    </span>
                    <span className="text-white-A700 font-manrope text-left font-bold">
                      Estandarte
                    </span>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[29px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    <>&quot;The best code is no code at all.&quot;</>
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    “No sleep, code is life”{" "}
                  </Text>
                  <Text
                    className="leading-[140.00%] mb-[3px] sm:ml-[0] ml-[163px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    <>
                      &quot;Programming is the closest
                      <br /> thing we have to magic.&quot;
                    </>
                  </Text>
                  <Text
                    className="leading-[140.00%] ml-32 sm:ml-[0] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtManropeBold24"
                  >
                    <>
                      &quot;If at first, you don&#39;t succeed,
                      <br /> call it version 1.0.&quot;
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[52px] mb-3.5 md:ml-[0] ml-[835px] mt-[330px] w-[119px]"
              src="images/img_frame1000004329.svg"
              alt="frame1000004329"
            />
          </div>
          <footer className="absolute bottom-[0] flex font-manrope inset-x-[0] items-center justify-center mx-auto w-full">
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
