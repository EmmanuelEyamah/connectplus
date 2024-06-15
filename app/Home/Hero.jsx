"use client";

import { ArrowUpOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Button, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#F3F3F3]">
      <div className="mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0">
        <div className="w-full lg:w-[500px] relative flex flex-col gap-3">
          <Typography className="text-[#4D4B4B] text-[18px] font-medium flex gap-1 items-center">
            <CheckCircleFilled /> Trusted & Verified
          </Typography>
          <Typography className="text-[#201E1E] text-[52px] font-bold w-full lg:w-[434px] leading-[130%]">
            Transforming Ideas into Product{" "}
            <span className="gradient-text">Reality</span>.
          </Typography>
          <Typography className="text-[#4D4B4B] text-[18px] font-medium w-full lg:w-[464px] leading-[160%]">
            Our aim at <span className="font-bold">Connect+</span>, is to ensure
            smooth collaboration from initial ideation and strategic planning to
            cutting-edge design and seamless development, we go the extra mile
            to bring your vision to life.
          </Typography>

          <div className="flex items-center gap-5 mt-7">
            <Button size="lg" className="bg-[#0A52F6] text-white rounded-md">
              <span>Get Started</span>
            </Button>
            <Button
              size="lg"
              className="bg-transparent text-[#060A10] rounded-md border border-solid border-[#060A10]"
            >
              <span>View Projects </span>
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
            </Button>
          </div>
        </div>

        {/* Hero Animation goes here */}
        <div className="w-full lg:w-[600px] relative"></div>
      </div>
    </section>
  );
};

export default Hero;
