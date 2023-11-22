import React from "react";

import { Img, Text } from "components";

const PersonalRecommendationBanner = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-800 flex flex-col items-center justify-start w-full">
          <div className="h-[356px] relative w-full">
            <Img
              className="h-[356px] m-auto object-cover w-full"
              src="images/img_photo_356x1920.png"
              alt="photo"
            />
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto max-w-[649px] w-full">
              <div className="flex flex-col items-center justify-start max-w-[649px] w-full">
                <Text
                  className="leading-[120.00%] max-w-[649px] md:max-w-full sm:text-[41px] md:text-[47px] text-[55px] text-center text-lime-100 tracking-[-0.55px]"
                  size="txtPlayfairDisplayRomanBold55"
                >
                  {props?.username}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PersonalRecommendationBanner.defaultProps = {
  username: "Personalized Recommendation",
};

export default PersonalRecommendationBanner;
