"use client"

import {CheckCircleFilled } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const Hero =()=>{
    return(
      <div className=" flex h-[816px] py-[120px] px-[96px] justify-between items-center bg-[#F3F3F3] ">

    {/* Hero Copy +CTA */}    
        <section className=" flex flex-col w-[464px] justify-center items-start gap-10 ">
        
        <Typography
            className="text-[#4D4B4B] w-full font-montserrat text-center lg:text-left text-[18px] font-semibold flex gap-[10px] items-center justify-center lg:justify-start"
            {...commonProps}>
            <CheckCircleFilled /> Trusted & Verified
            </Typography>
            
            <div className=" w-[512px] ">

                <Typography className=" text-[#201E1E] font-sans font-bold leading-[normal] text-[52px] " {...commonProps}>
                Made By Connect<span  className=" font-sans text-[52px] font-bold leading-[normal] text-[#0A52F6] ">+ </span> 
               <div> Made To Connect </div>
                </Typography>
            </div>

            <div className=" flex self-stretch w-[464px] h-[174px] ">
                <Typography className="text-[#4D4B4B] font-montserrat text-[18px] font-medium leading-[28.8px]  " {...commonProps}>
                Explore our collection of case studies that highlight the impact of our work across various industries.
                 Each case study provides an in-depth look at the challenges our clients faced, 
                the innovative solutions we implemented, and the outstanding results achieved.
                </Typography>
            </div>

            <div className="w-[464px] flex flex-col justify-center items-start gap-10 ">
                <Button className="flex justify-center items-center px-12 h-12 bg-[#0A52F6] rounded-[4px] " {...commonProps} >
                <span className=" font-semibold leading-normal text-[16px] font-sans text-[#FCFCFC] ">  Book A Demo </span>
                </Button>
            </div>
   


        </section>

     {/* Hero Copy +CTA */} 
        <section className="w-[591px] h-[656px]">
        
        <Image src="/Frame 1719.png"
            alt="Image"
            width={591}
            height={656}
          />
        </section>
      
      
      </div>
    )
}
export default Hero