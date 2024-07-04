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
    <section className="flex flex-col items-center pt-20 gap-16 bg-[#F3F3F3] ">
      <div className=" flex flex-col justify-center items-center gap-5 lg:gap-10 max-w-screen-xl mx-auto">
        <div className=" flex flex-col justify-center items-center gap-2 lg:gap-6 ">
          <BaseTypography
            label="About Us"
            fontSizeLarge="lg:text-lg"
            className=" font-montserrat font-semibold leading-relaxed tracking-normal"
            color="text-gray-700"
          />
          <div className="flex flex-col justify-center items-center gap-6">
            <BaseTypography
              label="Our Company"
              fontSizeLarge="lg:text-[36px]"
              className=" leading-[48px] font-montserrat font-bold"
              color="text-black"
            />
            <BaseTypography
              label="We foster a culture of collaboration, where every team member is
              encouraged to contribute their unique perspectives and expertise.
              By cultivating an environment that values both creative ideas and
              technical excellence, we ensure that our solutions not only meet
              but exceed our clients expectations."
              fontSizeLarge="lg:text-[16px]"
              className=" leading-[32px] font-medium max-w-screen-lg text-center font-montserrat"
              color="text-black-90"
            />
          </div>
          <section className="flex items-center gap-6">
            <AppButton variant="primary">Book A Call</AppButton>
            <AppButton variant="secondary">
              View Project
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />{" "}
            </AppButton>
          </section>
        </div>
      </div>

      <div className="h-[600px] w-[1248px] rounded-b-[20px] rounded-tr-[120px] relative -bottom-[120px] z-20">
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
                width="120"
                height="120"
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

      <div className="bg-[#011F56] container relative w-full h-[500px] lg:h-[450px] lg:px-20 lg:py-36 pl-[220px] flex items-center justify-start lg:justify-end" >
        <div className="flex flex-col gap-5 w-full">
          <BaseTypography
            label="“Success is the result of hard work, unwavering dedication, and relentless effort.”"
            fontSizeLarge="lg:text-[28px]"
            className="font-work-sans font-semibold leading-normal w-[250px] lg:w-[519px]"
            color="text-white"
          />
          <BaseTypography
            label="-Dagogo"
            fontSizeLarge="lg:text-[24px]"
            className="font-work-sans font-semibold leading-normal w-[519px]"
            color="text-white"
          />

          <div className="absolute left-24 lg:left-60">
            <BookIcon />
          </div>
          <div className="absolute left-0 bottom-0">
            <PlantIcon />
          </div>
          <div className="absolute left-0">
            <SmBookIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
