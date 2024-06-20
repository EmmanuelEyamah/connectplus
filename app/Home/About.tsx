"use client";

import AboutIcons from "../components/svg/AboutIcons";
import AppButton from "../components/ui/Button";
import { BaseTypography } from "../components/ui/Typography";

const About = () => {
  return (
    <div className="bg-[#011F56] w-full h-full lg:h-[1000px] pt-3 relative container mx-auto">
      {/* carousel */}
      <div className="mt-5 w-full h-[56px] bg-[#fff] border-2 border-[#002B7D]"></div>

      {/* About Text Content */}
      <div className=" ml-14 mt-20 flex flex-col">
        <BaseTypography
          label="ABOUT US"
          color="text-[#FBFAFAB2]"
          fontSizeLarge="20px"
        />
        <BaseTypography
          label="Why Choose Us For your next Project"
          color="text-[#FBFAFACC]"
          fontSizeLarge="lg:text-[48px]"
          className="font-bold capitalize w-full lg:w-[750px]"
        />
        <BaseTypography
          label="We excel in crafting innovative and cutting-edge solutions, prioritize quality with top-notch client satisfaction and compliance, foster collaboration to build strong client partnerships, and we are committed to sustainability with eco-friendly practices and long-lasting products."
          color="text-[#FBFAFACC]"
          fontSizeLarge="lg:text-[20px]"
          className="w-full lg:w-[750px] leading-8"
        />

        <div className=" mt-14 flex gap-7 items-center">
          <AppButton variant="default">Get In Touch</AppButton>
          <AppButton variant="accent">Read about us</AppButton>
        </div>
      </div>

      {/* About Icons */}
      <div className="relative -top-60 flex items-center justify-center">
        <AboutIcons />
      </div>
    </div>
  );
};

export default About;
