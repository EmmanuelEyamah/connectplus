"use client";

import { BaseTypography } from "../../../components/ui/Typography";
import { commonProps } from "@/types/common";
import { ArrowUpOutlined } from "@ant-design/icons";


import React from 'react'

const UiProcess = () => {
  return (
    <div className="bg-[#011F56] w-full h-full lg:h-[1000px] pt-3 relative container mx-auto">
   
        
      {/* About Text Content */}
      <div className=" ml-14 mt-20 flex flex-col">
      <BaseTypography
        label="ABOUT US"
        color="text-[#FBFAFAB2]"
        fontSizeLarge="20px"
      />
      <BaseTypography
        label="Why Choose Us For your next Project"
        color="text-[#FBFAFACC]"
        fontSizeLarge="lg:text-[48px]"
        className="font-bold capitalize w-full lg:w-[750px]"
      />
      <BaseTypography
        label="We excel in crafting innovative and cutting-edge solutions, prioritize quality with top-notch client satisfaction and compliance, foster collaboration to build strong client partnerships, and we are committed to sustainability with eco-friendly practices and long-lasting products."
        color="text-[#FBFAFACC]"
        fontSizeLarge="lg:text-[20px]"
        className="w-full lg:w-[750px] leading-8"
      />

   
    </div>
    </div>
  )
}

export default UiProcess
