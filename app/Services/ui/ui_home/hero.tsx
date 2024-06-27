"use client";
import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { commonProps } from "@/types/common";
import AppButton from "../../../components/ui/Button";


const Hero = () => {
  return (
    <section className="w-full h-full bg-[# ] py-32 px-24">
      <div className="mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0 gap-16 lg:gap-0">
        <div className="w-full lg:w-[500px] relative flex flex-col gap-3">
          <Typography
            className="text-[#4D4B4B] w-full text-center lg:text-left text-[18px] font-medium flex gap-1 items-center justify-center lg:justify-start" style={{ fontFamily: 'Montserrat, sans-serif',letterSpacing: "0px", textTransform: "uppercase"}}
            {...commonProps}
          >
           Overview
          </Typography>
          <Typography
            className="text-[#201E1E] text-[28px] text-center lg:text-left lg:text-[52px] font-bold w-full lg:w-[434px] leading-[130%]"
            {...commonProps}
          >
            UI/UX Design
          </Typography>
          <Typography
            className="text-[#4D4B4B] text-[18px] text-center lg:text-left font-medium w-full lg:w-[464px] leading-[160%]"
            {...commonProps}
          >
            Our UI/UX design services are dedicated to creating intuitive, engaging, and aesthetically pleasing interfaces. We focus on understanding the needs and behaviors of your users to design products that offer exceptional experiences. From wireframes to high-fidelity prototypes, our team ensures every design decision enhances usability and delight.
          </Typography>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-7">
            <AppButton variant="primary">
              <span  style={{textTransform: 'capitalize'}}>Get Started</span>
            </AppButton>
            
          </div>
        </div>

        {/* Hero Animation goes here */}
        <div className="w-full lg:w-[600px] relative flex items-center justify-center">
          <Image
            src="/Ui-Frame.svg"
            alt="UI Home image"
            width={350}
            height={550}
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
