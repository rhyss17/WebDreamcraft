import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-md" };
const variants = {
  outline: {
    blue_gray_900: "border-b border-blue_gray-900 border-solid text-black-900",
    blue_gray_800:
      "border border-blue_gray-800 border-solid text-blue_gray-800",
    black_900: "border-b border-black-900 border-solid text-black-900",
    pink_100: "border-2 border-pink-100 border-solid",
  },
  fill: {
    blue_gray_300: "bg-blue_gray-300 text-blue_gray-900",
    gray_900: "bg-gray-900 text-white-A700",
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    orange_50: "bg-orange-50 text-black-900",
  },
};
const sizes = {
  xs: "py-0.5",
  sm: "p-2",
  md: "p-[15px]",
  lg: "p-[19px]",
  xl: "p-[22px] sm:px-5",
  "2xl": "sm:px-5 px-6 py-[29px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "blue_gray_800",
    "black_900",
    "pink_100",
    "blue_gray_300",
    "gray_900",
    "white_A700",
    "orange_50",
  ]),
};

export { Button };
