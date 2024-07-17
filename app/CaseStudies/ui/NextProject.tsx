"use client"
import { BaseTypography } from "@/app/components/ui/Typography"
import { commonProps } from "@/types/common"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"
import AppButton from "@/app/components/ui/Button"
import { ArrowUpOutlined } from "@ant-design/icons";

const NextProject = ()=>{
    return(
        <main className="flex w-full max-w-[1440px] py-10 md:py-16 lg:py-[80px] px-6 md:px-12 lg:px-[96px] container mx-auto flex-col justify-center items-center gap-6 md:gap-10 lg:gap-[10px]">
        {/*Main div*/}
        <div className="flex flex-col items-start gap-10 md:gap-16 lg:gap-[80px] self-stretch w-full">
          <div>
            <BaseTypography
              label="Next Project"
              fontSizeLarge="text-[30px] md:text-[35px] lg:text-[40px]"
              className="font-bold leading-[36px] md:leading-[42px] lg:leading-[48px] font-sans self-stretch"
              color="text-[#000]"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 lg:gap-[80px] self-stretch">
            <div className="flex justify-center items-center w-full md:w-auto">
              <Image
                src="/assets/nextProjectimage.png"
                alt="nextProjectimage"
                width={720}
                height={480}
                className="w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col items-start gap-6 w-full md:w-auto">
              <Typography
                {...commonProps}
                className="text-[16px] md:text-[18px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat font-medium leading-[24px] md:leading-[28.8px] w-full md:w-[355px]"
              >
                Lorem ipsum dolor sit amet consectetur.
                In faucibus nisl etiam mauris diam venenatis amet placerat id.
                Lorem ipsum dolor sit amet consectetur.
                In faucibus nisl etiam mauris diam venenatis amet placerat id.
              </Typography>
              <div className="flex lg:flex-row flex-row md:flex-row items-center gap-6">
                <AppButton variant="primary">Book a Demo</AppButton>
                <AppButton variant="secondary">
                  <span>View Projects</span>
                  <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    )

}
export default NextProject