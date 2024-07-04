/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";

import React from "react";

const Project = () => {
  return (
<div className="w-full h-full lg:p-[10px] sm:p-[10px] p-[10px] bg-[#e7e7e7] ">
  <div className="bg-[#1C1E20] container rounded-[20px] mx-auto lg:w-[100%] lg:h-[700px] sm:w-[100%] sm:p-[3] h-[100%] lg:p-10 py-[40px] px-[16px] w-full">
    <div className="flex flex-col f items-start">
      <h3 className="text-[#FBFAFA] lg:text-[28px] font-bold  leading-[120%] font-work">
        Some UI/UX projects handled by the team..
      </h3>
      <hr className="mt-7 border-t-2 border-[#FFFFFF1F] mb-11 w-full" />
    </div>
    <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-10 sm:grid-cols-2 sm:gap-5">
      <div className="flex flex-col gap-7">
        <a href="#" className="cardContent">
        <div className="flex justify-center items-center w-[370px] h-[96px] lg:text-[16px] text-[14px] text-[#FBFAFA] font-bold text-center bg-[#1C1E20] cursor-pointer rounded-lg hover:bg-[#FBFAFA] hover:text-[#1C1E20] transition-colors duration-300">
            Oja mi- Retail App Design
          </div>
        </a>
        <a href="#" className="cardContent">
         <div className="flex justify-center items-center w-[370px] h-[96px] lg:text-[16px] text-[14px] text-[#FBFAFA] font-bold text-center bg-[#1C1E20] cursor-pointer rounded-lg hover:bg-[#FBFAFA] hover:text-[#1C1E20] transition-colors duration-300">
            Oja mi- Retail App Design
          </div>
        </a>
        <a href="#" className="cardContent">
         <div className="flex justify-center items-center w-[370px] h-[96px] lg:text-[16px] text-[14px] text-[#FBFAFA] font-bold text-center bg-[#1C1E20] cursor-pointer rounded-lg hover:bg-[#FBFAFA] hover:text-[#1C1E20] transition-colors duration-300">
            Oja mi- Retail App Design
          </div>
        </a>
        <a href="#" className="cardContent">
         <div className="flex justify-center items-center w-[370px] h-[96px] lg:text-[16px] text-[14px] text-[#FBFAFA] font-bold text-center bg-[#1C1E20] cursor-pointer rounded-lg hover:bg-[#FBFAFA] hover:text-[#1C1E20] transition-colors duration-300">
            Oja mi- Retail App Design
          </div>
        </a>
      </div>
      <div className="flex flex-col items-center lg:col-span-2">
        <img src="/assets/ui_image.png" className="w-full h-auto" alt="" />
        <div className="text-center pt-[20px]">
          <a href="#" className="text-[#FBFAFA] center-head  font-bold lg:text-[18px]">
            Oja mi- Retail App Design
          </a>
        </div>
        <p className="text-[#FBFAFA] lg:text-[16px] text-[14px] font-normal mt-4 content-body">
          Oja mi- Retail App Design. Lorem ipsum dolor sit amet consectetur.
          In faucibus nisl etiam mauris diam venenatis amet placerat id.
          Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam
          mauris diam venenatis amet placerat id.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Project;
