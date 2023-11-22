import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

const AdminFramePage = () => {
  const sideBarMenu = [
    { label: "User Profile" },
    { label: "Order Management" },
    { label: "Customer Appointment" },
  ];

  return (
    <>
      <div className="bg-white-A700_33 border border-black-900 border-solid flex sm:flex-col md:flex-col flex-row font-inter gap-2 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[238px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[30px] top-[0]">
          <div className="flex flex-row gap-4 items-center justify-start p-3 w-[238px]">
            <Img
              className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
              src="images/img_radiobutton.png"
              alt="radiobutton_One"
            />
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtInterMedium16"
              >
                Christzia Marie
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtManropeRegular16"
              >
                Administrator
              </Text>
            </div>
          </div>
          <Img
            className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
            src="images/img_radiobutton.png"
            alt="radiobutton_One"
          />
          <div className="flex flex-col gap-1 items-start justify-start my-1 w-full">
            <Text
              className="text-base text-blue_gray-900 w-full"
              size="txtInterMedium16"
            >
              Christzia Marie
            </Text>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtManropeRegular16"
            >
              Administrator
            </Text>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingBottom: "4px",
                flexDirection: "column",
                color: "#000000",
                fontSize: "16px",
              },
            }}
            className="flex flex-col items-center justify-start mt-12 w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          <div className="flex flex-row gap-2 h-[510px] md:h-auto items-end justify-start mt-1 px-3 rounded-md w-[238px]">
            <a href="javascript:" className="text-base text-black-900 w-auto">
              <Text size="txtInterRegular16Black900">Log out</Text>
            </a>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col font-manrope items-start justify-start md:px-5 w-full">
          <div className="border border-black-900 border-solid flex flex-col items-center justify-start p-6 sm:px-5 rounded-tl-md rounded-tr-md w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-xl w-full"
                size="txtManropeExtraBold20"
              >
                List of Promises
              </Text>
              <Text
                className="leading-[150.00%] max-w-[951px] md:max-w-full text-blue_gray-900 text-lg"
                size="txtManropeSemiBold18"
              >
                In your role as an administrator, you have the ability to view
                and modify customer appointments as needed. Access to this
                section is limited, and only administrators have the authority
                to utilize it.
              </Text>
            </div>
          </div>
          <div className="border-blue_gray-900 border-solid border-x flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
              <Text
                className="border-b border-blue_gray-900 border-solid pl-6 pr-[35px] sm:px-5 py-4 text-base text-blue_gray-900 w-full"
                size="txtManropeBold16"
              >
                Customer
              </Text>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-7 text-base text-black-900 w-full"
                size="txtManropeMedium16"
              >
                Nabilah Putri
              </Text>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pb-[26px] pl-6 pr-[35px] pt-[31px] sm:px-5 text-base text-black-900 w-full"
                size="txtManropeMedium16"
              >
                Eka Tedja
              </Text>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Susila Suhendra Sanjaya
              </Button>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pb-[26px] pl-6 pr-[35px] pt-[31px] sm:px-5 text-base text-black-900 w-full"
                size="txtManropeMedium16"
              >
                Agus Rachman
              </Text>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pb-[26px] pl-6 pr-[35px] pt-[31px] sm:px-5 text-base text-blue_gray-900 w-full"
                size="txtManropeMedium16Bluegray900"
              >
                Sonny Irawan
              </Text>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Cahaya Dian Lesmono
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
              <Text
                className="border-b border-blue_gray-900 border-solid pl-6 pr-[35px] sm:px-5 py-4 text-base text-blue_gray-900 w-full"
                size="txtManropeBold16"
              >
                Email
              </Text>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                nabilahput@gmail.com
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                ekatedja@gmail.com
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                suhendrasan@gmail.com
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                agusrachman@gmail.com
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                irawansonny@gmail.com
              </Button>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                diancahaya@gmail.com
              </Button>
            </div>
            <div className="flex flex-col h-[536px] md:h-auto items-start justify-start">
              <Button
                className="!text-blue_gray-900 cursor-pointer font-bold text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="lg"
                variant="outline"
              >
                Nomor telepon
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-856-5555-8774
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-878-5555-86
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-814-5557-92
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-878-5551-31
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-878-5558-54
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                +62-856-5555-87
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
              <Text
                className="border-b border-blue_gray-900 border-solid pl-6 pr-[35px] sm:px-5 py-4 text-base text-blue_gray-900 w-full"
                size="txtManropeBold16"
              >
                Services
              </Text>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Massage, Perawatan Rambut
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Perawatan rambut, perawatan wajah
              </Button>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pb-[26px] pl-6 pr-[35px] pt-[31px] sm:px-5 text-base text-black-900 w-full"
                size="txtManropeRegular16"
              >
                Spa
              </Text>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pb-[26px] pl-6 pr-[35px] pt-[31px] sm:px-5 text-base text-black-900 w-full"
                size="txtManropeRegular16"
              >
                Spa, Massage
              </Text>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Massage, Perawatan Wajah
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Massage, Spa, Perawatan Wajah
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-[536px] md:h-auto items-start justify-start w-full">
              <div className="border-b border-blue_gray-900 border-solid flex flex-row items-center justify-start sm:px-5 px-6 py-4 w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtManropeBold16"
                >
                  Date
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_ico24arrows.svg"
                  alt="ico24arrows"
                />
              </div>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-7 text-base text-black-900 w-full"
                size="txtManropeRegular16"
              >
                6 November 2022
              </Text>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-7 text-base text-black-900 w-full"
                size="txtManropeRegular16"
              >
                6 November 2022
              </Text>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                27 September 2022
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                26 September 2022
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                26 September 2022
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                25 September 2022
              </Button>
            </div>
            <div className="flex flex-1 flex-col h-[536px] md:h-auto items-start justify-start w-full">
              <div className="border-b border-blue_gray-900 border-solid flex flex-row items-center justify-start sm:px-5 px-6 py-4 w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtManropeBold16"
                >
                  Time
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_ico24arrows.svg"
                  alt="ico24arrows_One"
                />
              </div>
              <div className="border-b border-black-900 border-solid flex flex-col items-start justify-center sm:px-5 px-6 py-7 w-full">
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtManropeRegular16"
                >
                  09:00 AM
                </Text>
              </div>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="black_900"
                size="2xl"
                variant="outline"
              >
                10:00 AM
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="black_900"
                size="2xl"
                variant="outline"
              >
                01:00 PM
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                03:00 PM
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="black_900"
                size="2xl"
                variant="outline"
              >
                08:00 AM
              </Button>
              <Button
                className="cursor-pointer text-base text-center w-full"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                08:00 AM
              </Button>
            </div>
            <div className="flex flex-col h-[536px] md:h-auto items-start justify-start">
              <div className="border-b border-blue_gray-900 border-solid h-14 w-full"></div>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-semibold min-w-[82px] text-base text-center"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Irish
              </Button>
              <Text
                className="border-b border-blue_gray-900 border-solid h-20 pl-6 pr-[35px] sm:px-5 py-7 text-base text-blue_gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                Zia
              </Text>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-semibold min-w-[85px] text-base text-center"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Kaye
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-semibold min-w-[88px] text-base text-center"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Maya
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-semibold min-w-[93px] text-base text-center"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Jelian
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-semibold min-w-[87px] text-base text-center"
                shape="square"
                color="blue_gray_900"
                size="2xl"
                variant="outline"
              >
                Kiara
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-8 w-full">
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[140px]"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_icon_chevron_left.svg"
                    alt="Icon / Chevron Left"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="sm"
                variant="outline"
              >
                <div className="!text-blue_gray-900 text-base text-left">
                  Previous
                </div>
              </Button>
              <div className="flex flex-row font-inter gap-0.5 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer h-10 text-base text-center w-10"
                  shape="round"
                  color="blue_gray_300"
                  size="sm"
                  variant="fill"
                >
                  1
                </Button>
                <List
                  className="sm:flex-col flex-row gap-0.5 grid grid-cols-3 w-3/4"
                  orientation="horizontal"
                >
                  <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                      <Text
                        className="text-base text-blue_gray-900 text-center w-auto"
                        size="txtInterRegular16Bluegray900"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                      <Text
                        className="text-base text-blue_gray-900 text-center w-auto"
                        size="txtInterRegular16Bluegray900"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                      <Text
                        className="text-base text-blue_gray-900 text-center w-auto"
                        size="txtInterRegular16Bluegray900"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[111px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_icon_chevron_right.svg"
                    alt="Icon / Chevron Right"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="sm"
                variant="outline"
              >
                <div className="!text-blue_gray-900 text-base text-left">
                  Next
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFramePage;
