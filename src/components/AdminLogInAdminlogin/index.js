import React from "react";

import { Button, Img, Input, Text } from "components";

const AdminLogInAdminlogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 justify-start w-full">
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[132px] ml-1.5 md:ml-[0]"
            leftIcon={
              <Img
                className="mt-0.5 mb-[7px] mr-2"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            size="xs"
          >
            <div className="font-manrope font-semibold text-blue_gray-900_cc text-left text-xl tracking-[0.10px]">
              {props?.homepage}
            </div>
          </Button>
          <div className="h-[697px] relative w-full">
            <div className="absolute h-[697px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
              <Img
                className="absolute h-[697px] inset-y-[0] left-[0] my-auto object-cover w-[84%]"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
              <div className="absolute bg-gray-900_99 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[98px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start mb-[158px] md:ml-[0] ml-[68px] w-[491px] sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[447px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.20px]"
                    size="txtSyneSemiBold40"
                  >
                    {props?.language}
                  </Text>
                  <Text
                    className="text-[16.14px] text-white-A700 w-full"
                    size="txtPoppinsMedium1614"
                  >
                    {props?.languageOne}
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat md:h-[508px] sm:h-[565px] h-[697px] inset-y-[0] my-auto p-[83px] md:px-10 sm:px-5 right-[0] w-[49%] md:w-full"
              style={{ backgroundImage: "url('images/img_group26.svg')" }}
            >
              <Text
                className="absolute bottom-1/4 left-[41%] text-blue_gray-800 text-lg tracking-[0.09px]"
                size="txtMontserratRomanSemiBold18"
              >
                {props?.login}
              </Text>
              <div className="absolute flex flex-col gap-10 h-max inset-y-[0] items-start justify-start left-[19%] my-auto w-[459px] sm:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.16px] w-auto"
                    size="txtSyneSemiBold32"
                  >
                    {props?.adminlogin}
                  </Text>
                  <Text
                    className="text-[17px] text-gray-100 w-auto"
                    size="txtMontserratRomanRegular17"
                  >
                    {props?.welcomeadmin}
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="border border-solid border-white-A700_3f flex flex-col items-start justify-end p-[18px] rounded-sm w-full">
                    <div className="h-[22px] md:ml-[0] ml-[3px] relative w-[15%]">
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700_99 w-max"
                        size="txtMontserratRomanRegular18"
                      >
                        {props?.name}
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700_99 w-max"
                        size="txtMontserratRomanRegular18"
                      >
                        {props?.nameOne}
                      </Text>
                    </div>
                  </div>
                  <Input
                    name="email"
                    placeholder="Password"
                    className="font-montserrat p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                    wrapClassName="rounded-sm w-full"
                    color="white_A700_3f"
                    size="md"
                    variant="outline"
                  ></Input>
                  <div className="border border-solid border-white-A700_3f flex sm:flex-col flex-row gap-[11px] items-start justify-center p-[18px] rounded-sm w-full">
                    <Img
                      className="h-[18px] sm:ml-[0] ml-[129px] w-[18px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <Text
                      className="mr-[99px] sm:mt-0 my-0.5 text-base text-white-A700"
                      size="txtInterRegular16"
                    >
                      {props?.loginwithgoogleOne}
                    </Text>
                  </div>
                  <div className="border border-solid border-white-A700_3f flex sm:flex-col flex-row gap-2.5 items-start justify-center p-3.5 rounded-sm w-full">
                    <Img
                      className="h-6 mb-2 sm:ml-[0] ml-[124px] w-6"
                      src="images/img_iconfacebook.svg"
                      alt="iconfacebook"
                    />
                    <Text
                      className="mr-[87px] sm:mt-0 mt-[3px] text-base text-white-A700"
                      size="txtInterRegular16"
                    >
                      {props?.loginwithfaceboOne}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <Text
                    className="bg-white-A700 justify-center pb-4 pt-[21px] sm:px-5 px-[35px] rounded-sm text-blue_gray-800 text-lg tracking-[0.09px] w-[435px]"
                    size="txtMontserratRomanSemiBold18"
                  >
                    {props?.loginbutton}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AdminLogInAdminlogin.defaultProps = {
  homepage: "Homepage",
  language:
    "We show your body and overall well-being  the care and attention they deserve.",
  languageOne: "DREAMMCRAFT offers only  the best establishments nearby",
  login: "Login",
  adminlogin: "Admin Login",
  welcomeadmin: "Welcome Admin! Glad you are back!",
  name: "Name",
  nameOne: "Name",
  loginwithgoogleOne: "Log in with Google",
  loginwithfaceboOne: "Log in with Facebook",
  loginbutton: "Login",
};

export default AdminLogInAdminlogin;
