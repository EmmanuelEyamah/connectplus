"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { commonProps } from "@/types/common";
import "./style.css";
import { FC } from "react";
import { IServices } from "@/types/types";

export interface HeroProps {
  service?: IServices;
}
const Hero: FC<HeroProps> = ({ service }) => {

  return (
    <section className="w-full h-full bg-[# ] lg:py-32 lg:px-24 small:py-16 small:px-15 py-11 px-15">
      <div className="mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0 gap-16 lg:gap-0">
        <div className="w-full lg:w-[500px] relative flex flex-col gap-3">
          <Typography
            className="text-[#4D4B4B] font-montserrat w-full text-center lg:text-left text-[18px] font-semibold leading-[120%] flex gap-1 items-center justify-center lg:justify-start  font-montserrat"
            {...commonProps}
          >
            OVERVIEW
          </Typography>
          <Typography
            className="text-[#201E1E] text-[28px] font-montserrat text-center lg:text-left lg:text-[45px] font-bold w-full lg:w-[434px] leading-[120%] uiux font-work-sans"
            {...commonProps}
          >
            {service?.title}
          </Typography>
          <Typography
            className="text-[#4D4B4B] text-[18px] font-montserrat text-center lg:text-left font-medium w-full lg:w-[464px]  leading-[160%] ui_content"
            {...commonProps}
          >
            {service?.description}
          </Typography>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-7">
            <button className="UiButton text-[#FCFCFC] text-[14px] lg:text-[16px]  font-semibold bg-[#0A52F6] gap-[10px] lg:px-[48px] lg:py-[15px] px-[40px] py-[13px] rounded-[4px]">
              
                Get Started
              
            </button>
          </div>
        </div>

        {/* Hero Animation goes here */}
        <div className="w-full lg:w-[600px] relative flex items-center justify-center">
          <Image
            src="/Ui-Frame.svg"
            alt="UI Home image"
            width={700}
            height={550}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
