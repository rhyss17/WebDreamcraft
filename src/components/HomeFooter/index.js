import React from "react";

import { Button, Img, Line, Text } from "components";

const HomeFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
          <div className="bg-blue_gray-800 sm:h-[1119px] h-[560px] md:h-[818px] p-[38px] sm:px-5 relative w-full">
            <div className="absolute flex flex-col gap-[52px] h-max inset-[0] items-center justify-start m-auto max-w-[1200px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[651px] items-center justify-start max-w-[1199px] w-full">
                {!!props?.logo ? (
                  <Img
                    className="h-[50px] w-[246px]"
                    alt="logo"
                    src={props?.logo}
                  />
                ) : null}
                <div className="flex flex-row gap-2.5 items-center justify-end w-[250px]">
                  {!!props?.facebook ? (
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="square"
                      color="pink_100"
                      size="md"
                      variant="outline"
                    >
                      <Img alt="facebook" src={props?.facebook} />
                    </Button>
                  ) : null}
                  {!!props?.twitter ? (
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="square"
                      color="pink_100"
                      size="md"
                      variant="outline"
                    >
                      <Img alt="twitter" src={props?.twitter} />
                    </Button>
                  ) : null}
                  {!!props?.linkedin ? (
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="square"
                      color="pink_100"
                      size="md"
                      variant="outline"
                    >
                      <Img alt="linkedin" src={props?.linkedin} />
                    </Button>
                  ) : null}
                  {!!props?.instagram ? (
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="square"
                      color="pink_100"
                      size="md"
                      variant="outline"
                    >
                      <Img alt="instagram" src={props?.instagram} />
                    </Button>
                  ) : null}
                </div>
              </div>
              {!!props?.line ? (
                <Line className="bg-white-A700_67 h-px w-full" />
              ) : null}
              <div className="flex md:flex-col flex-row md:gap-10 gap-[129px] items-start justify-start max-w-[1199px] w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-[272px]">
                  {!!props?.exploretext ? (
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22WhiteA700"
                    >
                      {props?.exploretext}
                    </Text>
                  ) : null}
                  {!!props?.homeaboutusservicestext ? (
                    <Text
                      className="leading-[200.00%] max-w-[144px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.17px]"
                      size="txtManropeMedium17WhiteA700"
                    >
                      {props?.homeaboutusservicestext}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[271px]">
                  {!!props?.utilitypagestext ? (
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22WhiteA700"
                    >
                      {props?.utilitypagestext}
                    </Text>
                  ) : null}
                  {!!props?.privacypolicytermsofusetext
                    ? props?.privacypolicytermsofusetext
                    : null}
                </div>
                <div className="flex flex-col gap-[21px] items-start justify-start w-[324px]">
                  {!!props?.keepintouchtext ? (
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtPlayfairDisplayRomanBold22WhiteA700"
                    >
                      {props?.keepintouchtext}
                    </Text>
                  ) : null}
                  <div className="flex flex-col gap-3.5 items-start justify-start w-[324px]">
                    <div className="flex flex-row gap-3.5 items-start justify-start w-[324px]">
                      {!!props?.addresstext ? (
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17WhiteA700"
                        >
                          {props?.addresstext}
                        </Text>
                      ) : null}
                      {!!props?.mariendalsvejfiftytext ? (
                        <Text
                          className="leading-[150.00%] max-w-[234px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.17px]"
                          size="txtManropeMedium17WhiteA700"
                        >
                          {props?.mariendalsvejfiftytext}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-row gap-[47px] items-center justify-start w-[324px]">
                      {!!props?.mailtext ? (
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17WhiteA700"
                        >
                          {props?.mailtext}
                        </Text>
                      ) : null}
                      {!!props?.emailtext ? (
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeMedium17WhiteA700"
                        >
                          {props?.emailtext}
                        </Text>
                      ) : null}
                    </div>
                    <div className="flex flex-row gap-[29px] items-start justify-start w-[324px]">
                      {!!props?.phonetext ? (
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-auto"
                          size="txtManropeBold17WhiteA700"
                        >
                          {props?.phonetext}
                        </Text>
                      ) : null}
                      {!!props?.phonenumbertext ? (
                        <Text
                          className="text-[17px] text-white-A700 tracking-[-0.17px] w-[167px]"
                          size="txtManropeMedium17WhiteA700"
                        >
                          {props?.phonenumbertext}
                        </Text>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[106px] left-[18%] object-cover top-[7%] w-[21%]"
              alt="OneHundredSeventySeven"
              src={props?.onehundredseventyseven}
            />
          </div>
          <div className="bg-blue_gray-600 flex flex-col items-center justify-end p-[25px] sm:px-5 w-full">
            {!!props?.copyrightimage ? (
              <Img
                className="h-[21px] mt-[3px]"
                alt="2023servicemark"
                src={props?.copyrightimage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HomeFooter.defaultProps = {
  privacypolicytermsofusetext: (
    <Text
      className="leading-[200.00%] max-w-[110px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.17px]"
      size="txtManropeMedium17WhiteA700"
    >
      <span className="text-white-A700 font-manrope text-left font-medium">
        Privacy Policy
      </span>
      <span className="text-white-A700 font-manrope text-left font-medium">
        <>
          {" "}
          <br />
        </>
      </span>
      <span className="text-white-A700 font-manrope text-left font-medium">
        Terms of Use
      </span>
    </Text>
  ),
};

export default HomeFooter;
