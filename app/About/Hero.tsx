/* eslint-disable @next/next/no-img-element */
"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
import AppButton from "../components/ui/Button";
import { BaseTypography } from "../components/ui/Typography";
import BookIcon from "../components/svg/BookIcon";
import PlantIcon from "../components/svg/PlantIcon";
import SmBookIcon from "../components/svg/SmBookIcon";
import UnionIcon from "../components/svg/UnionIcon";
import { useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <section className="flex flex-col items-center pt-20 gap-16 bg-[#F3F3F3]  ">
      <div className=" flex flex-col justify-center items-center gap-5 md:px-15 px-30 lg:gap-10 max-w-screen-xl ">
        <div className=" flex flex-col justify-center items-center gap-2 lg:gap-6 ">
          <BaseTypography
            label="ABOUT US"
          
            className=" font-montserrat lg:text-[18px] text-[14px] fontM  font-semibold leading-relaxed tracking-normal"
            color="text-gray-700"
          />
          <div className="flex flex-col justify-center items-center gap-6">
            <BaseTypography
              label="Our Company"
            className=" leading-[48px] lg:text-[48px] text-[35px] work font-bold"
              color="text-black"
            />
            <BaseTypography
              label="We foster a culture of collaboration, where every team member is
              encouraged to contribute their unique perspectives and expertise.
              By cultivating an environment that values both creative ideas and
              technical excellence, we ensure that our solutions not only meet
              but exceed our clients expectations."
             
              className=" leading-[32px] lg:text-[20px] text-[16px] font-medium max-w-screen-lg text-center fontM font-montserrat"
              color="text-black-90"
            />
          </div>
          <section className="flex items-center gap-6 work">
            <AppButton variant="primary">Book A Call</AppButton>
            <AppButton variant="secondary">
              View Project
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />{" "}
            </AppButton>
          </section>
        </div>
      </div>

      <div className="h-[600px] w-full lg:w-[1248px] rounded-b-[20px] rounded-tr-[120px] relative lg:-bottom-[120px] -bottom-[60px] z-20">
  {!isPlaying && (
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      onClick={handlePlayClick}
    >
      <img
        src="/assets/thumbnail.jpg"
        alt="Thumbnail"
        className="w-full h-full object-cover rounded-b-[20px] rounded-tr-[120px]"
      />
      <button className="absolute">
        <svg
          width="80"
          height="80"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="59"
            stroke="#0A52F6"
            strokeWidth="2"
          />
          <path d="M96 62L42 89.7128L42 34.2872L96 62Z" fill="#0A52F6" />
        </svg>
      </button>
    </div>
  )}
  {isPlaying && (
    <video
      className="w-full h-full rounded-b-[20px] rounded-tr-[120px]"
      src="/assets/team-video.mp4"
      controls
      autoPlay
    />
  )}
  <div className="absolute -top-8 -right-5">
    <UnionIcon />
  </div>
</div>
<div className="bg-[#011F56] container relative w-full h-[500px] lg:h-[400px] lg:pl-0 lg:pt-0 pb-0 flex flex-col lg:flex-row items-center justify-between">
  <div className="relative flex flex-col lg:flex-col items-center lg:items-start justify-center gap-2  lg:w-2/3 w-full">
    <div className="flex flex-row lg:flex-col justify-center items-center lg:items-start gap-5 w-full">
      <div className="relative flex justify-center lg:justify-start">
        <SmBookIcon />
      </div>
      <div className="relative flex justify-center lg:justify-start lg:pl-8">
        <BookIcon />
      </div>
      <div className="relative flex justify-center lg:justify-start">
        <PlantIcon />
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-5 lg:w-1/3 w-full items-center lg:items-start text-center lg:text-left px-5 lg:px-0">
    <BaseTypography
      label="“Success is the result of hard work, unwavering dedication, and relentless effort.”"
      fontSizeLarge=""
      className="font-work-sans lg:text-[26px] text-[20px] font-semibold leading-normal lg:w-[519px] w-full"
      color="text-white"
    />
    <BaseTypography
      label="-Dagogo"
      fontSizeLarge="lg:text-[24px] text-[18px]"
      className="font-work-sans font-semibold leading-normal lg:w-full w-full"
      color="text-white"
    />
  </div>
</div>


    </section>
  );
};

export default Hero;
