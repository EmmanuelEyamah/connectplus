"use client"

import {CheckCircleFilled } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const Hero =()=>{
    return(
      <div className="flex flex-col lg:flex-row h-full lg:h-[816px] py-[60px] md:flex-col md:h-[100%] lg:py-[120px] px-[24px]  justify-between items-center md:justify-center md:items-center md:gap-14 bg-[#F3F3F3]">

      {/* Hero Copy +CTA */}    
      <section className="flex flex-col w-full lg:w-[464px] justify-center items-start lg:gap-10">
      
          <Typography
              className="text-[#4D4B4B] w-full font-montserrat text-center lg:text-left text-[16px] lg:text-[18px] font-semibold flex gap-[10px] items-start justify-start lg:justify-start"
              {...commonProps}>
              <CheckCircleFilled /> Trusted & Verified
          </Typography>
          
          <div className="w-full lg:w-[512px]">
              <Typography className="text-[#201E1E] font-sans font-bold leading-[normal] text-[36px] lg:text-[52px]" {...commonProps}>
                  Made By Connect<span className="font-sans text-[34px] lg:text-[52px] font-bold leading-[normal] text-[#0A52F6]">+</span>
                  <div>Made To Connect</div>
              </Typography>
          </div>
  
          <div className="flex self-stretch w-full lg:w-[464px] h-auto lg:h-[174px]">
              <Typography className="text-[#4D4B4B] font-montserrat text-[16px] lg:text-[18px] font-medium leading-[28.8px]" {...commonProps}>
                  Explore our collection of case studies that highlight the impact of our work across various industries. Each case study provides an in-depth look at the challenges our clients faced, the innovative solutions we implemented, and the outstanding results achieved.
              </Typography>
          </div>
  
          <div className="w-full lg:w-[464px] flex flex-col justify-center items-start gap-6 lg:gap-10">
              <Button className="flex justify-center mb-10 items-center px-8 lg:px-12 h-10 lg:h-12 bg-[#0A52F6] rounded-[4px]" {...commonProps}>
                  <span className="font-semibold leading-normal text-[14px] lg:text-[16px] font-sans text-[#FCFCFC]" style={{textTransform: "capitalize"}}>Book A Demo</span>
              </Button>
          </div>
  
      </section>
  
      {/* Hero Image */}
      <section className="w-full lg:w-[591px] h-[400px] lg:h-[656px] md:h-full md:w-full ">
          <img src="/Frame 1719.png" alt="Image" className="w-full h-full object-cover" />
      </section>
  
  </div>
  
    )
}
export default Hero