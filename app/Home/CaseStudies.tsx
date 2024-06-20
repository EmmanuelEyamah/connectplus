import React from "react";
import { BaseTypography } from "../components/ui/Typography";

const CaseStudies = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Our Case Studies"
          fontSizeLarge="lg:text-[40px]"
          className=" leading-[48px] font-bold"
          color="text-[#000]"
        />
        <BaseTypography
          label="Our case studies showcase the diverse range of projects we’ve successfully delivered, highlighting our ability to drive business growth and create exceptional user experiences."
          fontSizeLarge="lg:text-[20px]"
          className=" leading-[32px] font-normal text-center w-[708px]"
          color="text-[#201E1EE5]"
        />
      </div>
    </div>
  );
};

export default CaseStudies;
