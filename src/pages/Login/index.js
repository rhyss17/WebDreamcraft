import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({ 
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col items-center justify-start pb-[13px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[695px] md:px-5 relative w-full">
                  <div className="absolute h-[695px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
                    <Img
                      className="h-[695px] my-auto object-cover w-[84%]"
                      src="images/img_image15.png"
                      alt="imageFifteen"
                    />
                    <div className="absolute bg-gray-900_99 flex flex-col h-full inset-[0] items-start justify-center m-auto p-24 md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start mb-40 ml-16 md:ml-[0] w-[491px] sm:w-full">
                        <Text
                          className="leading-[150.00%] max-w-[447px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.20px]"
                          size="txtSyneSemiBold40"
                        >
                          We show your body and overall well-being the care and
                          attention they deserve.
                        </Text>
                        <Text
                          className="text-[16.14px] text-white-A700 w-full"
                          size="txtPoppinsMedium1614"
                        >
                          DREAMMCRAFT offers only the best establishments nearby
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex md:h-[598px] sm:h-[655px] h-[695px] inset-y-[0] justify-end my-auto p-[39px] sm:px-5 right-[0] w-[49%] md:w-full"
                    style={{ backgroundImage: "url(images/img_group26.svg)" }}
                  >
                    <a
                      href="javascript:"
                      className="mb-[135px] ml-72 mt-auto text-blue_gray-800 text-lg tracking-[0.09px]"
                    >
                      <Text size="txtMontserratRomanSemiBold18">Login</Text>
                    </a>
                    <div className="absolute flex flex-col gap-10 h-max inset-y-[0] items-start justify-start left-[19%] my-auto w-[459px] sm:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.16px] w-auto"
                          size="txtSyneSemiBold32"
                        >
                          Login
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[435px] md:max-w-full text-[17px] text-gray-100"
                          size="txtMontserratRomanRegular17"
                        >
                          We are glad to have you back and feel more beautiful.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                        <Input
                          name="email"
                          placeholder="Username"
                          className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                          wrapClassName="w-full"
                          type="text"
                          shape="round"
                          color="white_A700_3f"
                          size="md"
                          variant="outline"
                        ></Input>
                        <Input
                          name="email_One"
                          placeholder="Password"
                          className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                          wrapClassName="w-full"
                          type="password"
                          shape="round"
                          color="white_A700_3f"
                          size="md"
                          variant="outline"
                        ></Input>
                        <div
                          className="common-pointer border border-solid border-white-A700_3f flex sm:flex-col flex-row font-inter gap-[11px] items-start justify-center p-[18px] rounded-sm w-full"
                          onClick={() => googleSignIn()}
                        >
                          <Img
                            className="h-[18px] sm:ml-[0] ml-[129px] w-[18px]"
                            src="images/img_vector.svg"
                            alt="vector"
                          />
                          <Text
                            className="mr-[99px] sm:mt-0 my-0.5 text-base text-white-A700"
                            size="txtInterRegular16"
                          >
                            Log in with Google
                          </Text>
                        </div>
                        <div className="border border-solid border-white-A700_3f flex sm:flex-col flex-row font-inter gap-2.5 items-start justify-center p-3.5 rounded-sm w-full">
                          <Img
                            className="h-6 mb-2 sm:ml-[0] ml-[124px] w-6"
                            src="images/img_iconfacebook.svg"
                            alt="iconfacebook"
                          />
                          <Text
                            className="mr-[87px] sm:mt-0 mt-[3px] text-base text-white-A700"
                            size="txtInterRegular16"
                          >
                            Log in with Facebook
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                        <Button
                          className="common-pointer cursor-pointer font-montserrat font-semibold min-w-[435px] sm:min-w-full rounded-sm text-center text-lg tracking-[0.09px]"
                          onClick={() => navigate("/home1")}
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          Login
                        </Button>
                        <Text
                          className="common-pointer text-center text-lg text-white-A700 tracking-[0.09px] w-full"
                          size="txtManropeRegular18"
                          onClick={() => navigate("/signup")}
                        >
                          <span className="text-white-A700 font-manrope font-normal">
                            Dont have an account?
                          </span>
                          <span className="text-white-A700 font-manrope font-semibold">
                            {" "}
                            Register
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
