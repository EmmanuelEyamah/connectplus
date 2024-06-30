"use client";
import {
    Typography
}from  "@material-tailwind/react";
import { BaseTypography } from "../../../components/ui/Typography";
import { commonProps } from "@/types/common";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./style.css";

import React from 'react'
import ArrowIcon from "@/app/components/svg/arrowIcon";
import ArrowDown from "@/app/components/svg/arrowDown";

const UiProcess = () => {
  return (
    <div className="bg-[#011F56] w-full h-full pb-[100px] pt-3 relative container mx-auto">
  {/* About Text Content */}
  <div className="ml-14 mt-20 flex flex-col">
    <div className="flex flex-col lg:flex-row items-start justify-between w-full">
      <div className="flex flex-col items-start w-full lg:w-[550px] font-montserrat">
        <h4 className="processHead font-bold">PROCESS & METHODOLOGY</h4>
        <Typography
          className="text-[44px] font-bold leading-normal text-[#FBFAFA]"
          {...commonProps}
        >
          Our Unique Approach-
          The Connect <span className="text-[#0A52F6]">+</span> way
        </Typography>
      </div>
      <div className="processHeadContent flex flex-col lg:ml-10 lg:w-[701px] mt-[45px]">
        <p className="text-[#FBFAFA] processHeadContent2 mr-8">
          Although each project is different and requires a separate process and timeline, this is a condensed version of what to expect should you set this in motion.
        </p>
      </div>
    </div>
  </div>
  {/* -------------innner cards----- */}
  <div className="mt-[40px] flex">
    {/* box 1 & 2  */}
<div className="ml-[80px] flex gap-5 items-center">

<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">01</span>
  <p className="text-[16px] text-[#FBFAFA] content">Initial Consultation- Discovery Call</p>
</div>
{/* box 1 end  */}
<ArrowIcon/>
{/* box 2 */}
<div className="flex gap-5 items-start justify-center flex-col mt-[67px]">
<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">02</span>
  <p className="text-[16px] text-[#FBFAFA] content">Initial User research- surveys, interviews..</p>
</div>

{/* arrowndowm */}
<div className="ml-[35px]">
<ArrowDown/>
</div>
{/* end arrowend */}
</div>
</div>
{/* box1 & 2 ends */}
</div>
{/* box 3 & 4 */}
<div className="ml-[250px] flex gap-5 items-center mt-[-50px]">

<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">03</span>
  <p className="text-[16px] text-[#FBFAFA] content">Wireframing - outline structure and layout</p>
</div>
{/* box 3 end  */}
<ArrowIcon/>
{/* box 4 */}
<div className="flex gap-5 items-start justify-center flex-col mt-[67px]">
<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">04</span>
  <p className="text-[16px] text-[#FBFAFA] content">Visual Design- high- fidelity design</p>
</div>

{/* arrowndowm */}
<div className="ml-[35px]">
<ArrowDown/>
</div>
{/* end arrowend */}
</div>
</div>
{/* box3 & 4 ends */}

{/* box 5 & 6 */}
<div className="ml-[420px] flex gap-5 items-center mt-[-50px]">

<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">05</span>
  <p className="text-[16px] text-[#FBFAFA] content">Prototyping - interactive tests </p>
</div>
{/* box 3 end  */}
<ArrowIcon/>
{/* box 4 */}
<div className="flex gap-5 items-start justify-center flex-col mt-[67px]">
<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">06</span>
  <p className="text-[16px] text-[#FBFAFA] content">Usability testing</p>
</div>

{/* arrowndowm */}
<div className="ml-[35px]">
<ArrowDown/>
</div>
{/* end arrowend */}
</div>
</div>
{/* box5 & 6 ends */}

{/* box 7 & 8 */}
<div className="ml-[590px] flex gap-5 items-center mt-[20px]">

<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">07</span>
  <p className="text-[16px] text-[#FBFAFA] content">Final Designs</p>
</div>
{/* box 3 end  */}
<ArrowIcon/>
{/* box 4 */}
<div className="flex gap-5 items-start justify-center flex-col ">
<div className="box">
  <span className="text-[44px] span text-[#FBFAFA99] number ">08</span>
  <p className="text-[16px] text-[#FBFAFA] content">Post- Launch Evaluation</p>
</div>


{/* end arrowend */}
</div>
</div>
{/* box5 & 6 ends */}
</div>


  )
}

export default UiProcess
