"use client"
import Image from "next/image"
import { BaseTypography } from "@/app/components/ui/Typography"
import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common"
const Subtitle = ()=> {
    return (
        <div className="flex w-full container mx-auto py-10 md:py-16 lg:py-[104px] px-6 md:px-12 lg:px-[96px] flex-col justify-center items-center gap-4 md:gap-6 lg:gap-[10px]">
        <div className="flex flex-col lg:flex-row w-full lg:w-full pb-10 md:pb-16 lg:pb-20 items-center gap-6 lg:gap-8">
          {/* Images Section */}
          <section className="w-full lg:w-[720px] h-auto lg:h-[579px] flex justify-center items-center relative">
            <Image 
              src="/assets/Frame 1906.png"
              alt="Image25"
              width={720}
              height={579}
              className="rounded-xl w-full h-auto"
            />
          </section>
          {/* Text Section */}
          <section className="flex flex-col items-start gap-3 w-full lg:w-[448px]">
            <div>
              <BaseTypography
                label="Subtitle"
                fontSizeLarge="lg:text-[40px]"
                className="font-bold leading-[48px] font-sans text-[30px] md:text-[35px] lg:text-[40px]"
                color="text-[#000]"
              />
            </div>
            <div>
              <Typography className="text-[rgba(32, 30, 30, 0.9)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]">
                Lorem ipsum dolor sit amet consectetur.
                In faucibus nisl etiam mauris diam venenatis amet placerat id.
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
            <div>
              <Typography className="text-[rgba(32, 30, 30, 0.9)] font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]">
                Lorem ipsum dolor sit amet consectetur.
                In faucibus nisl etiam mauris diam venenatis amet placerat id.
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
          </section>
        </div>
      </div>
      
        
    )
}

export default Subtitle