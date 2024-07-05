/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BaseTypography } from "../components/ui/Typography";
import BlogHeroIcons from "../components/svg/BlogHeroIcons";
import VectorBG from "../components/svg/VectorBG";

const Hero = () => {
  return (
    <div className="w-full bg-[#011F56] overflow-hidden">
    <div className="py-10 lg:py-24 px-5 lg:px-24 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex flex-col gap-4 w-full lg:w-[550px]">
          <BaseTypography
            label="Welcome To The Connect+ Blog"
            fontSizeLarge="text-[32px] lg:text-[52px]"
            className="font-work-sans font-bold leading-normal text-[#FBFAFA]"
          />
          <BaseTypography
            label="Stay tuned with the latest tech news and how we plan on leveraging them."
            fontSizeLarge="text-[16px] lg:text-[18px]"
            className="font-montserrat font-medium leading-[24px] text-[#FBFAFACD]"
          />
        </div>
        <div className="w-full lg:w-[600px] flex flex-col gap-3 items-start">
          <div className="flex items-center justify-center py-2 px-3 gap-3 rounded-[8px] bg-[#0A52F6] w-full">
            <div className="w-8 h-8">
              <img
                src="/assets/fire.gif"
                alt="fire icon"
                className="w-full h-full"
              />
            </div>
            <BaseTypography
              label="#freshoffthepress"
              fontSizeLarge="text-[16px] lg:text-[18px]"
              className="font-montserrat font-medium leading-[24px] text-[#FBFAFA]"
            />
          </div>
          <div className="h-[200px] lg:h-[314px] rounded-2xl w-full lg:w-[575px]">
            <img
              src="/assets/case-img.jpg"
              alt="case-studies img"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-[575px]">
            <div className="flex justify-between items-start">
              <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#FBFAFA]">
                24th June, 2024
              </h4>
              <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#0A52F6]">
                By Okolo Enemona
              </h4>
            </div>
            <BaseTypography
              label="Restructuring UX flow the artisanal supply-chain of rural Nigeria."
              fontSizeLarge="text-[18px] lg:text-[20px]"
              className="font-work-sans font-bold leading-normal text-[#FBFAFA]"
            />
            <BaseTypography
              label="Our product design service is the cornerstone of innovation."
              fontSizeLarge="text-[16px] lg:text-[18px]"
              className="font-montserrat font-medium leading-[24px] text-[#FBFAFA]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start -mt-16 lg:-mt-28">
        <BlogHeroIcons />
      </div>
      <div className="flex justify-center lg:justify-start -mb-28 lg:-mb-40">
        <VectorBG />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
