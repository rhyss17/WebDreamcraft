import React from "react";

const sizeClasses = {
  txtSyneSemiBold32: "font-semibold font-syne",
  txtManropeRegular18Bluegray600: "font-manrope font-normal",
  txtPlayfairDisplayRomanBold22: "font-bold font-playfairdisplay",
  txtManropeRegular20: "font-manrope font-normal",
  txtInterBold24: "font-bold font-inter",
  txtManropeBold13Bluegray800: "font-bold font-manrope",
  txtManropeMedium17WhiteA700: "font-manrope font-medium",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtInterBold20: "font-bold font-inter",
  txtManropeRegular15: "font-manrope font-normal",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeBold32: "font-bold font-manrope",
  txtManropeRegular19: "font-manrope font-normal",
  txtManropeBold16Bluegray800: "font-bold font-manrope",
  txtInterRegular24: "font-inter font-normal",
  txtManropeRegular20Black900: "font-manrope font-normal",
  txtManropeBold16Black90001: "font-bold font-manrope",
  txtInterRegular16Bluegray900: "font-inter font-normal",
  txtManropeRegular18Gray700: "font-manrope font-normal",
  txtPlayfairDisplayRomanBold70: "font-bold font-playfairdisplay",
  txtInterBold18: "font-bold font-inter",
  txtManropeMedium16Bluegray900: "font-manrope font-medium",
  txtPlayfairDisplayRomanSemiBold36: "font-playfairdisplay font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPlayfairDisplayRomanBold45WhiteA700: "font-bold font-playfairdisplay",
  txtPoppinsMedium1614: "font-medium font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPlayfairDisplayRomanBold22WhiteA700: "font-bold font-playfairdisplay",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanRegular17: "font-montserrat font-normal",
  txtManropeBold17WhiteA700: "font-bold font-manrope",
  txtInterRegular16: "font-inter font-normal",
  txtPlayfairDisplayRomanBold40: "font-bold font-playfairdisplay",
  txtManropeSemiBold15Pink100: "font-manrope font-semibold",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeSemiBold16WhiteA700: "font-manrope font-semibold",
  txtPlayfairDisplayRomanBold45: "font-bold font-playfairdisplay",
  txtManropeExtraBold20: "font-extrabold font-manrope",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeBold17: "font-bold font-manrope",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeRegular16Cyan900: "font-manrope font-normal",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtManropeExtraBold20Black900: "font-extrabold font-manrope",
  txtManropeBold13: "font-bold font-manrope",
  txtInterMedium16Black900: "font-inter font-medium",
  txtManropeSemiBold15: "font-manrope font-semibold",
  txtInterRegular16Black900: "font-inter font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtManropeBold19: "font-bold font-manrope",
  txtManropeBold18: "font-bold font-manrope",
  txtPlayfairDisplayRomanBold22Black900: "font-bold font-playfairdisplay",
  txtManropeMedium16Bluegray800: "font-manrope font-medium",
  txtPlayfairDisplayRomanBold45Gray800: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanBold16: "font-bold font-playfairdisplay",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtPlayfairDisplayRomanBold18: "font-bold font-playfairdisplay",
  txtSyneSemiBold40: "font-semibold font-syne",
  txtPlayfairDisplayRomanBold55: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanBold55Black900: "font-bold font-playfairdisplay",
  txtRobotoRegular14: "font-normal font-roboto",
  txtPlayfairDisplayRomanBold55WhiteA700: "font-bold font-playfairdisplay",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeBold22: "font-bold font-manrope",
  txtManropeMedium17: "font-manrope font-medium",
  txtManropeMedium16: "font-manrope font-medium",
  txtManropeSemiBold15Bluegray800: "font-manrope font-semibold",
  txtManropeBold20Black900: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
