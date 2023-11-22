import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FIgmaStylicleSalonLandingPageHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="sm:h-[100px] md:h-[188px] h-[99px] m-auto w-full">
          <Img
            className="absolute h-[100px] inset-y-[0] left-[0] my-auto object-cover w-[87%]"
            src="images/img_background.png"
            alt="background"
          />
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-between max-w-[1559px] my-auto right-[0] w-full">
            <div className="flex md:flex-col flex-row gap-9 items-center justify-end w-auto">
              <div className="flex flex-row gap-[46px] items-center justify-end w-[444px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-800 w-auto"
                  size="txtManropeMedium16Bluegray800"
                >
                  {props?.backgroundimage}
                </Text>
                <Text
                  className="text-base text-blue_gray-800 w-auto"
                  size="txtManropeMedium16Bluegray800"
                >
                  {props?.homeOne}
                </Text>
                <Text
                  className="text-base text-blue_gray-800 w-auto"
                  size="txtManropeMedium16Bluegray800"
                >
                  {props?.homeTwo}
                </Text>
              </div>
              <SelectBox
                className="!text-blue_gray-800 font-bold font-manrope leading-[normal] text-base text-left w-[12%] md:w-full"
                placeholderClassName="!text-blue_gray-800"
                isSearchable={false}
                placeholder="EN"
                isMulti={false}
                options={dateOptionsList}
                name="date"
                shape="round"
                size="xs"
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-bold font-manrope min-w-[91px] rounded-[5px] text-base text-center"
                  shape="round"
                  color="blue_gray_800"
                  size="md"
                  variant="outline"
                >
                  {props?.loginbutton}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute border border-blue_gray-800 border-solid cursor-pointer font-bold font-manrope h-max inset-y-[0] min-w-[106px] my-auto right-[14%] rounded-[5px] text-base text-center"
          shape="round"
          color="blue_gray_800"
          size="md"
          variant="fill"
        >
          {props?.signupbutton}
        </Button>
      </div>
    </>
  );
};

FIgmaStylicleSalonLandingPageHeader.defaultProps = {
  backgroundimage: "Home",
  homeOne: "About Us",
  homeTwo: "Contact Us",
  loginbutton: "Login",
};

export default FIgmaStylicleSalonLandingPageHeader;
