"use client"
import Image from "next/image"
import { BaseTypography } from "@/app/components/ui/Typography"
import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common"

const Uiux = () => {
    return(
      <div className="flex w-full container mx-auto max-w-[1440px] py-10 md:py-16 lg:py-[104px] px-6 md:px-12 lg:px-[96px] flex-col justify-center items-center gap-6 md:gap-10 lg:gap-[10px]">
      <div className="flex flex-col md:flex-row w-full max-w-[1248px] items-center gap-6 md:gap-10 lg:gap-20">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start w-full md:w-[448px]">
          <BaseTypography
            label="UI/UX Design"
            fontSizeLarge="text-[30px] md:text-[35px] lg:text-[40px]"
            className="font-bold leading-[36px] md:leading-[42px] lg:leading-[48px] font-sans self-stretch"
            color="text-[#000]"
          />
          <Typography
            className="mt-4 text-[16px] md:text-[18px] font-Montserrat text-[rgba(32, 30, 30, 0.9)] font-normal leading-[28.8px]"
            {...commonProps}
          >
            Lorem ipsum dolor sit amet consectetur.
            In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <Image
            src="/assets/nextProjectimage.png"
            alt="nextProjectimage"
            width={720}
            height={480}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
    
    )
}

export default Uiux