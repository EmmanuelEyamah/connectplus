"use client"

import { BaseTypography } from "@/app/components/ui/Typography"
import { commonProps } from "@/types/common"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"

const Title =()=>{
    return(
      <main className="flex flex-col justify-center items-center w-full px-6 md:px-12 lg:px-[46px] pt-10 md:pt-16 lg:pt-[88px] gap-10 md:gap-16 lg:gap-[30px]">
      {/* First Section */}
      <div className="flex flex-col justify-center items-start gap-6 w-full">
        <BaseTypography
          label="Title"
          fontSizeLarge="text-[30px] md:text-[40px] lg:text-[48px]"
          className="font-sans font-bold leading-normal self-stretch"
          color="text-[#201E1E]"
        />
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
          <Typography className="w-full md:w-1/2 text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]" {...commonProps}>
            Lorem ipsum dolor sit amet consectetur.
            In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography className="w-full md:w-1/2 text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]" {...commonProps}>
            Lorem ipsum dolor sit amet consectetur.
            In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </div>
      </div>
    
      {/* Main Image Section */}
      <div className="w-full flex justify-center items-center">
        <Image
          src="/assets/Title-Image.png"
          alt="Title Image"
          width={1248}
          height={480}
          className="w-full rounded-xl"
        />
      </div>
    
      {/* Image 1-1 Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full">
        <Image
          src="/assets/Title-Image.png"
          alt="Title Image 1"
          width={604}
          height={480}
          className="w-full md:w-1/2 rounded-xl"
        />
        <Image
          src="/assets/Title-Image.png"
          alt="Title Image 2"
          width={604}
          height={480}
          className="w-full md:w-1/2 rounded-xl"
        />
      </div>
    
      {/* Second Section */}
      <div className="flex flex-col justify-center items-start gap-6 w-full lg:w-full">
        <BaseTypography
          label="Title"
          fontSizeLarge="text-[30px] md:text-[40px] lg:text-[48px]"
          className="font-sans font-bold leading-normal self-stretch"
          color="text-[#201E1E]"
        />
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
          <Typography className="w-full md:w-1/2 text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]" {...commonProps}>
            Lorem ipsum dolor sit amet consectetur.
            In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography className="w-full md:w-1/2 text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]" {...commonProps}>
            Lorem ipsum dolor sit amet consectetur.
            In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </div>
      </div>
    
      {/* Second Image Section */}
      <div className="w-full flex justify-center items-center">
        <img
          src="/assets/Title-Image.png"
          alt="Title Image"
        
          className="w-full rounded-xl"
        />
      </div>
    </main>
    
    )
}

export default Title