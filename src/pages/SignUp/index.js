import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";

//const SignUpPage = () => {
 // const navigate = useNavigate();
 const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8092/User/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/"); // Redirect on successful registration
      } else {
        // Handle registration error
        console.error("Registration failed");
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error("Error occurred during registration:", error);
    }
  };

  return (
    <>
      <div className="dhiwise-navigation">
        <div className="flex font-syne mx-auto pb-[13px] relative w-full">
          <div className="h-[697px] my-auto md:px-5 w-[66%] md:w-full">
            <Img
              className="h-[697px] m-auto object-cover w-full"
              src="images/img_image15.png"
              alt="imageFifteen"
            />
            <Text
            className="absolute leading-[150.00%] left-[5%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[20%] tracking-[0.20px] w-2/5 sm:w-full"
            size="txtSyneSemiBold40"
          >
            We show your body and overall well-being the care and attention they
            deserve.
          </Text>
          </div>
          <div className="bg-blue_gray-800 flex flex-col font-montserrat items-center justify-end ml-[-1px] my-auto p-[83px] md:px-5 w-[60%] z-[1]">
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
                  Welcome to DreamCraft! We hope you find an establishment with us
                  to distress.
                </Text>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Input
                    name="username"
                    placeholder="Username"
                    className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                    wrapClassName="w-full"
                    type="text"
                    shape="round"
                    color="white_A700_3f"
                    size="md"
                    variant="outline"
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                    wrapClassName="w-full"
                    type="email"
                    shape="round"
                    color="white_A700_3f"
                    size="md"
                    variant="outline"
                  />
                  <Input
                    name="password"
                    placeholder="Password"
                    className="p-0 placeholder:text-white-A700_99 text-left text-lg w-full"
                    wrapClassName="w-full"
                    type="password"
                    shape="round"
                    color="white_A700_3f"
                    size="md"
                    variant="outline"
                  />
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
                  />
                </div>
              </form>

              
              <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer cursor-pointer font-montserrat font-semibold min-w-[435px] sm:min-w-full rounded-sm text-center text-lg tracking-[0.09px]"
                  onClick={() => navigate("/")}
                  color="white_A700"
                  size="md"
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
                    className="text-lime-100 font-montserrat font-semibold underline"
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
