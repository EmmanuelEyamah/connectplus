"use client";

import { Typography } from "@material-tailwind/react";
import { BaseTypography } from "../components/ui/Typography";
import { commonProps } from "@/types/common";
import BrainIcon from "../components/svg/BrainIcon";
import CheckCircleIcon from "../components/svg/CheckCircleIcon";
import LightBlubIcon from "../components/svg/LightBlubIcon";
import CollaborateIcon from "../components/svg/CollaborateIcon";

const MissionVision = () => {
  return (
    <section className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex items-start gap-20">
        <div className="flex flex-col items-start w-[440px] gap-4">
          <BaseTypography
            label="Vision & Mission"
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[24px] font-semibold font-montserrat font-small-caps"
            color="text-[#4D4B4B]"
          />
          <Typography
            className="text-[#201E1E] font-work-sans w-[420px] text-[48px] font-bold leading-normal"
            {...commonProps}
          >
            Our Commitment To You <span className="text-[#0A52F6]">&</span> Your
            Team
          </Typography>
          <BaseTypography
            label="Our mission is to empower businesses to reach their full potential through a perfect blend of creativity, technical expertise, and strategic insight."
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[32px] font-normal font-montserrat"
            color="text-[#201E1EE6]"
          />
          <br />
          <br />
          <BaseTypography
            label="Our Vision is to empower businesses to reach their full potential through a perfect blend of creativity, technical expertise, and strategic insight."
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[32px] font-normal font-montserrat"
            color="text-[#201E1EE6]"
          />
        </div>
        <div className="w-[750px] flex flex-col gap-0 items-start">
          <div className="flex gap-0 items-start">
            <div className=" cursor-pointer h-[300px] flex items-start justify-center flex-col gap-6 border-r border-b border-[#D2D2D2] transition-all duration-300 hover:bg-gradient-to-r from-[#fff] to-[#eaeffa]">
              <BrainIcon />
              <BaseTypography
                label="Expert Knowledge"
                fontSizeLarge="lg:text-[28px]"
                className=" leading-[33.6px] font-bold font-work-sans"
                color="text-[#000]"
              />
              <BaseTypography
                label="Our team has strong skills and deep knowledge in the latest technologies to create top-quality solutions."
                fontSizeLarge="lg:text-[16px]"
                className=" leading-[20px] font-medium font-montserrat w-[322px]"
                color="text-[#000]"
              />
            </div>
            <div className="cursor-pointer h-[300px] pl-3 flex items-start justify-center flex-col gap-6 border-b border-[#D2D2D2] transition-all duration-300 hover:bg-gradient-to-r from-[#fff] to-[#eaeffa]">
              <CheckCircleIcon />
              <BaseTypography
                label="Dependability"
                fontSizeLarge="lg:text-[28px]"
                className=" leading-[33.6px] font-bold font-work-sans"
                color="text-[#000]"
              />
              <BaseTypography
                label="We are committed to meeting deadlines, maintaining high standards, and taking responsibility for our work, building trust with our clients."
                fontSizeLarge="lg:text-[16px]"
                className=" leading-[20px] font-medium font-montserrat w-[322px]"
                color="text-[#000]"
              />
            </div>
          </div>
          <div className="flex gap-0 items-start">
            <div className="cursor-pointer h-[300px] flex items-start justify-center flex-col gap-6 border-r border-[#D2D2D2] transition-all duration-300 hover:bg-gradient-to-r from-[#fff] to-[#eaeffa]">
              <LightBlubIcon />
              <BaseTypography
                label="Creative Solutions"
                fontSizeLarge="lg:text-[28px]"
                className=" leading-[33.6px] font-bold font-work-sans"
                color="text-[#000]"
              />
              <BaseTypography
                label="We think outside the box to develop innovative and unique solutions that fit your specific needs."
                fontSizeLarge="lg:text-[16px]"
                className=" leading-[20px] font-medium font-montserrat w-[322px]"
                color="text-[#000]"
              />
            </div>
            <div className=" cursor-pointer h-[300px] pl-3 flex items-start justify-center flex-col gap-6 border-[#D2D2D2] transition-all duration-300 hover:bg-gradient-to-r from-[#fff] to-[#eaeffa]">
              <CollaborateIcon />
              <BaseTypography
                label="Collaboration"
                fontSizeLarge="lg:text-[28px]"
                className=" leading-[33.6px] font-bold font-work-sans"
                color="text-[#000]"
              />
              <BaseTypography
                label="We keep communication open and clear, making sure we understand your needs and keep you updated every step of the way."
                fontSizeLarge="lg:text-[16px]"
                className=" leading-[20px] font-medium font-montserrat w-[322px]"
                color="text-[#000]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;
