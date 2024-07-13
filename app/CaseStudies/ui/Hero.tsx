"use client"
import { BaseTypography } from "@/app/components/ui/Typography"
import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common"
import Image from "next/image"

const Hero = ()=>{
    return(
        <>
        <section>
       <div className="flex w-full container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 pt-8 md:pt-16 lg:pt-[88px] pb-0 flex-col justify-center items-center gap-10 md:gap-16 lg:gap-[104px] bg-[#fff]">
       <div className="flex w-full max-w-[1440px] px-6 md:px-12 lg:px-24 pt-8 md:pt-16 lg:pt-[88px] pb-0 flex-col justify-center items-center gap-10 md:gap-16 lg:gap-[104px] bg-[#fff]">
    <div className="flex w-full max-w-[1248px] flex-col justify-center items-start gap-4 md:gap-6">
        <BaseTypography
            label="Oja mi - Retail SuperApp"
            fontSizeLarge="lg:text-[48px]"
            className="font-sans leading-normal font-bold self-stretch"
            color="text-[#201E1E]"
        />
        <Typography className="text-[#201E1E] font-Montserrat font-medium leading-normal text-[16px] md:text-[18px] lg:text-[20px]" {...commonProps}>
            By Connect+
        </Typography>
    </div>
    <div className="flex w-full max-w-[1248px] h-full max-h-[480px] p-2 md:p-4 lg:p-[10px] justify-center items-center gap-2 md:gap-4 lg:gap-[10px]">
        <img 
            src="/assets/Frame 1719 UI.png"
            alt="page image"
          
            className="w-full h-auto rounded-md object-cover"
        />
    </div>
</div>

</div>

<section className="bg-[#f3f3f3]">
    <div className="flex w-full max-w-[1440px] py-10 md:py-16 lg:py-[104px] px-6 md:px-12 lg:px-24 flex-col justify-center items-start gap-4 md:gap-6 lg:gap-[10px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-16 lg:gap-[80px] w-full">
            <div className="flex flex-col w-full lg:w-[448px]">
                <BaseTypography
                    label="Problem Statement"
                    fontSizeLarge="lg:text-[40px]"
                    className="font-sans leading-[48px] font-bold w-full"
                    color="text-[#000]"
                />
                <div className="mt-4">
                    <Typography className="bg-[rgba(32, 30, 30, 0.90)] text-[#201E1EE5] p-4 rounded-md font-Montserrat text-[16px] md:text-[18px] font-normal leading-[28.8px]">
                        Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id. Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                <img 
                    src="/assets/image 25.png"
                    alt="Image25"
                    className="w-full h-auto max-w-[348px] rounded-xl object-cover"
                />
                <img 
                    src="/assets/image 25.png"
                    alt="Image25"
                    className="w-full h-auto max-w-[348px] md:block hidden rounded-xl object-cover lg:mt-[120px] mt-3 md:mt-0"
                />
            </div>
        </div>
    </div> 
</section>


        </section>
        </>
    )
}
export default Hero;