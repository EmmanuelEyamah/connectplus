"use client";

import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import SelectedWorksFrame from "./SelectedWorksFrame";

const SelectedWorks = () => {
  return (
    <div className="flex w-full max-w-[1440px] py-[80px] px-[24px] lg:px-[46px] flex-col justify-center items-start gap-5 lg:gap-24 bg-white">
      {/* SELECTED DIV */}
      <div>
        <Typography
          className="gap-6 self-stretch text-[32px] lg:text-[40px] font-sans leading-[36px] lg:leading-[48px] text-[#000] font-bold"
          {...commonProps}
        >
          Selected Works
        </Typography>

        <ul className="flex flex-wrap items-start gap-4 lg:gap-6 font-sans pt-6 text-[#4D4B4B] text-[16px] lg:text-[20px] font-medium leading-6 lg:leading-8">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">Web3</li>
          <li className="cursor-pointer">FinTech</li>
          <li className="cursor-pointer">SAAS</li>
          <li className="cursor-pointer">Education</li>
          <li className="cursor-pointer">HealthTech</li>
          <li className="cursor-pointer">E-Commerce</li>
        </ul>

        {/* CARDS */}
        <div className="pt-12 lg:pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 self-stretch">
          <SelectedWorksFrame />
          <SelectedWorksFrame />
          <SelectedWorksFrame />
          <SelectedWorksFrame />
          <SelectedWorksFrame />
          <SelectedWorksFrame />
        </div>
      </div>
    </div>
  );
};
export default SelectedWorks;
