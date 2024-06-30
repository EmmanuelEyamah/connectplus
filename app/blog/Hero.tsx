/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BaseTypography } from "../components/ui/Typography";
import BlogHeroIcons from "../components/svg/BlogHeroIcons";
import VectorBG from "../components/svg/VectorBG";

const Hero = () => {
  return (
    <div className="w-full h-[820px] bg-[#011F56] overflow-hidden">
      <div className="relative py-24 px-24 container mx-auto">
        <div className="w-full h-full container mx-auto flex items-center gap-16">
          <div className="flex flex-col gap-4 w-[550px]">
            <BaseTypography
              label="Welcome To The Connect+ Blog"
              fontSizeLarge="lg:text-[52px]"
              className=" font-work-sans font-bold leading-normal w-[512px]"
              color="text-[#FBFAFA]"
            />
            <BaseTypography
              label="Stay tuned with the latest technews and how we polan on leveragingthem."
              fontSizeLarge="lg:text-[18px]"
              className="font-montserrat font-medium leading-[28.3px] w-[464px]"
              color="text-[#FBFAFACD]"
            />
          </div>
          <div className="w-[600px] flex flex-col gap-3 items-start">
            <div className="flex items-center justify-center py-2 px-3 gap-3 rounded-[8px] bg-[#0A52F6] ">
              <div className="w-8 h-8">
                <img
                  src="/assets/fire.gif"
                  alt="fire icon"
                  className="w-full h-full"
                />
              </div>
              <BaseTypography
                label="#freshoffthepress"
                fontSizeLarge="lg:text-[18px]"
                className=" font-montserrat font-medium leading-[24px] w-[512px]"
                color="text-[#FBFAFA]"
              />
            </div>
            <div className="h-[314px] rounded-2xl w-[575px]">
              <img
                src="/assets/case-img.jpg"
                alt="case-studies img"
                className="rounded-2xl w-full h-full object-cover "
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[575px] flex justify-between items-start">
                <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#FBFAFA]">
                  24th June, 2024
                </h4>
                <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#0A52F6]">
                  By Okolo Enemona
                </h4>
              </div>
              <BaseTypography
                label="Restructuring UX flow the artisanal supply-chain of rural Nigeria."
                fontSizeLarge="lg:text-[20px]"
                className=" font-work-sans font-bold leading-normal w-[570px]"
                color="text-[#FBFAFA]"
              />
              <BaseTypography
                label="Our product design service is the cornerstone of innovation. "
                fontSizeLarge="lg:text-[18px]"
                className=" font-montserrat font-medium leading-[24px]"
                color="text-[#FBFAFA]"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-0 -bottom-16">
          <BlogHeroIcons />
        </div>
        <div className="absolute left-0 -bottom-28">
          <VectorBG />
        </div>
      </div>
    </div>
  );
};

export default Hero;
