import React from "react";

import { Button, Img, Line, Text } from "components";

const HomeFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start max-w-[1906px] w-full">
          <div className="bg-orange-50 sm:h-[311px] h-[560px] md:h-[714px] md:pl-10 sm:pl-5 pl-[51px] py-[51px] relative w-full">
            <div className="absolute flex flex-col gap-[52px] h-max inset-[0] items-center justify-end m-auto max-w-[1200px] w-full">
              <Line className="bg-white-A700_67 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-start justify-start max-w-[1199px] w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-[272px]">
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                    size="txtManropeBold22"
                  >
                    {props?.exploretext}
                  </Text>
                  <Text
                    className="leading-[200.00%] max-w-[144px] md:max-w-full text-[17px] text-black-900 tracking-[-0.17px]"
                    size="txtManropeMedium17"
                  >
                    {props?.homeaboutusservicestext}
                  </Text>
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[271px]">
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                    size="txtManropeBold22"
                  >
                    {props?.utilitypagestext}
                  </Text>
                  {props?.privacypolicytermsofusetext}
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[324px]">
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                    size="txtManropeBold22"
                  >
                    {props?.keepintouchtext}
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-[324px]">
                    <div className="flex flex-row gap-3.5 items-start justify-start w-[324px]">
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                        size="txtManropeBold17"
                      >
                        {props?.addresstext}
                      </Text>
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-[203px]"
                        size="txtManropeMedium17"
                      >
                        {props?.addressvalue}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[47px] items-center justify-start w-[324px]">
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                        size="txtManropeBold17"
                      >
                        {props?.mailtext}
                      </Text>
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                        size="txtManropeMedium17"
                      >
                        {props?.mailvalue}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[29px] items-start justify-start w-[324px]">
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-auto"
                        size="txtManropeBold17"
                      >
                        {props?.phonetext}
                      </Text>
                      <Text
                        className="text-[17px] text-black-900 tracking-[-0.17px] w-[167px]"
                        size="txtManropeMedium17"
                      >
                        {props?.phonevalue}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[0] top-[9%] w-[86%]">
              <Img
                className="h-[105px] md:h-auto object-cover w-[22%]"
                src="images/img_21.png"
                alt="TwentyOne_One"
              />
            </div>
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


HomeFooter.defaultProps = {
  exploretext: "Explore",
  homeaboutusservicestext: (
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
  ),
  utilitypagestext: "Utility Pages",
  privacypolicytermsofusetext: (
    <Text
  className="leading-[200.00%] max-w-[110px] md:max-w-full text-[17px] text-black tracking-[-0.17px]"
  size="txtManropeMedium17"
  style={{ color: 'black' }}
>
  <span className="font-manrope text-left font-medium">
    Privacy Policy
  </span>
  <br />
  <span className="font-manrope text-left font-medium">
    Terms of Use
  </span>
</Text>

  ),
  keepintouchtext: "Keep in Touch",
  addresstext: "Address :",
  addressvalue: "Bliss Labangon, Cebu City ",
  mailtext: "Mail :",
  mailvalue: "support@dreamcraft.com",
  phonetext: "Phone :",
  phonevalue: "(+63) 92 -  2253  - 234",
};

export default HomeFooter;
