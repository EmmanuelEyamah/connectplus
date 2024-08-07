import React from "react";
import { BaseTypography } from "../components/ui/Typography";

const OurStory = () => {
  return (
    <div className="w-full h-full py-10 px-4 lg:py-20 lg:px-24 bg-white">
    <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-16">
      <div className="flex flex-col items-center justify-center gap-5 text-center px-4">
        <BaseTypography
          label="Our Story"
          fontSizeLarge="lg:text-[20px] text-[18px]"
          className="leading-[24px] font-semibold font-montserrat font-small-caps"
          color="text-[#4D4B4B]"
        />
        <BaseTypography
          label="Who we are"
          fontSizeLarge="lg:text-[48px] text-[30px]"
          className="leading-normal font-bold font-work-sans"
          color="text-[#201E1E]"
        />
        <BaseTypography
          label="We are a young, talented, and diverse team of designers, web, mobile developers, and product managers working around the clock to make your product ready for launch"
          fontSizeLarge="lg:text-[20px] text-[16px]"
          className="leading-[32px] font-normal font-montserrat text-center w-full max-w-[700px]"
          color="text-[#201E1EE6]"
        />
      </div>
  
      <div className="w-full h-[300px] lg:w-[1200px] lg:h-[735px] bg-red-500"></div>
    </div>
  </div>
  
  );
};

export default OurStory;
