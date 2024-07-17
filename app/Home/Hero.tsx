/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { commonProps } from "@/types/common";
import AppButton from "../components/ui/Button";

const Hero = () => {
  return (
    <section className="w-full h-full bg-[#F3F3F3] px-8 lg:py-32 lg:px-24">
      <div className="mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0 gap-16 lg:gap-0">
        <div className="w-full lg:w-[500px] relative flex flex-col gap-3">
          <Typography
            className="text-[#4D4B4B] w-full text-center lg:text-left text-[18px] font-medium flex gap-1 items-center justify-center lg:justify-start"
            {...commonProps}
          >
            <CheckCircleFilled /> Trusted & Verified
          </Typography>
          <Typography
            className="text-[#201E1E] text-[28px] text-center lg:text-left lg:text-[52px] font-bold w-full lg:w-[434px] leading-[130%]"
            {...commonProps}
          >
            Transforming Ideas into Product{" "}
            <span className="gradient-text">Reality</span>.
          </Typography>
          <Typography
            className="text-[#4D4B4B] text-[18px] text-center lg:text-left font-medium w-full lg:w-[464px] leading-[160%]"
            {...commonProps}
          >
            Our aim at <span className="font-bold">Connect+</span>, is to ensure
            smooth collaboration from initial ideation and strategic planning to
            cutting-edge design and seamless development, we go the extra mile
            to bring your vision to life.
          </Typography>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-7">
            <AppButton variant="primary">
              <span>Get Started</span>
            </AppButton>
            <AppButton variant="secondary">
              <span>View Projects </span>
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
            </AppButton>
          </div>
        </div>

        {/* Hero Animation goes here */}
        <div className="w-full lg:w-[600px] relative flex items-center justify-center">
          <img
            src="/assets/hero_animation.gif"
            alt="Home animation"
            width={520}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
