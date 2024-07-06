/* eslint-disable @next/next/no-img-element */
"use client";

import AboutIcons from "../components/svg/AboutIcons";
import SmAboutIcon from "../components/svg/SmAboutIcon";
import VectorBG from "../components/svg/VectorBG";
import AppButton from "../components/ui/Button";
import AutoPlay from "../components/ui/Carousel";
import { BaseTypography } from "../components/ui/Typography";

const About = () => {
  return (
    <div className="bg-[#011F56] w-full h-full lg:h-[955px] pt-3 relative container mx-auto overflow-hidden">
      <div className="mt-5 w-full h-full lg:h-[40px] bg-[#fff] border-2 border-[#002B7D]">
        <AutoPlay />
      </div>

      {/* About Text Content */}
      <div className="ml-6 lg:ml-14 mt-20 flex flex-col">
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

        <div className="mt-7 lg:mt-14 flex  gap-7 items-center">
          <AppButton variant="default">Get In Touch</AppButton>
          <AppButton variant="accent">Read about us</AppButton>
        </div>
      </div>

      {/* About Icons */}
      <div className="relative -top-60 items-center justify-center hidden lg:flex">
        <AboutIcons />
      </div>
      <div className="relative left-0 bottom-0 items-center justify-center flex lg:hidden">
        <img src="/assets/about.png" alt="" />
      </div>
      <div className="absolute left-0 bottom-0 hidden lg:block">
        <VectorBG />
      </div>
    </div>
  );
};

export default About;
