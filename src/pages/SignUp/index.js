import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-8 items-start justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex font-montserrat mb-[61px] md:ml-[0] ml-[60px] md:px-5 relative w-[90%] md:w-full">
          <div className="h-[697px] my-auto w-[72%] md:w-full">
            <div className="h-[697px] m-auto w-full">
              <Img
                className="absolute h-[697px] inset-y-[0] left-[0] my-auto object-cover w-[92%]"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
              <div className="absolute bg-gray-900_99 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[84px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-3.5 h-[372px] md:h-auto items-start justify-start mb-[141px] mt-[15px] w-auto sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[429px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.20px]"
                    size="txtSyneSemiBold40"
                  >
                    We show your body and overall well-being the care and
                    attention they deserve.
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[429px] md:max-w-full text-[16.14px] text-white-A700"
                    size="txtPoppinsMedium1614"
                  >
                    DREAMMCRAFT offers only the best establishments nearby
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-900_99 h-[697px] inset-y-[0] left-[0] my-auto w-3/4"></div>
          </div>
          <div className="bg-blue_gray-800 flex flex-col items-center justify-end ml-[-293.52px] my-auto p-[79px] md:px-10 sm:px-5 w-[47%] z-[1]">
            <div className="flex flex-col gap-10 items-start justify-start w-[459px] sm:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.16px] w-auto"
                  size="txtSyneSemiBold32"
                >
                  Register
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[435px] md:max-w-full text-[17px] text-gray-100"
                  size="txtMontserratRomanRegular17"
                >
                  Welcome to DreamCraft! We hope you find an establishment with
                  us to distress.
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <Input
                  name="email"
                  placeholder="Username"
                  className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                  wrapClassName="rounded-sm w-full"
                  type="text"
                  color="white_A700_3f"
                  size="md"
                  variant="outline"
                ></Input>
                <Input
                  name="email_One"
                  placeholder="Email"
                  className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                  wrapClassName="rounded-sm w-full"
                  type="email"
                  color="white_A700_3f"
                  size="md"
                  variant="outline"
                ></Input>
                <Input
                  name="password"
                  placeholder="Password"
                  className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                  wrapClassName="rounded-sm w-full"
                  type="password"
                  color="white_A700_3f"
                  size="md"
                  variant="outline"
                ></Input>
                <Input
                name="termsOfService"
                type="checkbox"
                label="I agree to all statements in terms of service"
                className="text-white-A700_99 text-left text-lg w-full"
                wrapClassName="rounded-sm w-full"
                color="white_A700_3f"
                size="md"
                variant="plain"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  padding: '2px', // Adjusted padding around the checkbox
                  marginLeft: '8px', // Adding left margin, adjust value as needed
                }}

              ></Input>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer !text-blue_gray-800 cursor-pointer font-montserrat font-semibold min-w-[435px] sm:min-w-full rounded-sm text-center text-lg tracking-[0.09px]"
                  onClick={() => navigate("/home1")}
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Register
                </Button>
                <Text
                  className="common-pointer text-center text-lg text-white-A700 tracking-[0.09px] w-full"
                  size="txtPoppinsRegular18"
                  onClick={() => navigate("/")}
                >
                  <span className="text-white-A700 font-montserrat font-normal">
                    Already have an account?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-lime-100_01 font-montserrat font-semibold underline"
                  >
                    Login
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
