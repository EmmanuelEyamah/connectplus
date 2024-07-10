"use client"
import Image from "next/image"
import { BaseTypography } from "@/app/components/ui/Typography"
import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common"

const Uiux = () => {
    return(
        <div className="flex w-[1440px] py-[104px] px-[96px] flex-col justify-center items-center gap-[10px] ">
           <div className=" flex w-[1248px] items-center gap-20 "> 
         
           {/* Text Section*/} <div>
           <BaseTypography
                   label="UI/UX Design"
                   fontSizeLarge="lg:text-[40px]"
                   className=" font-bold leading-[48px] font-sans self-stretch w-[448px] h-[48px] "
                   color="text-[#000]"
                   />

                   <Typography className=" w-[448px] h-[116x] font-Montserrat text-[rgba(32, 30, 30, 0.9)] font-normal leading-[28.8px] text-[18px] " {...commonProps} >
                   Lorem ipsum dolor sit amet consectetur. 
                   In faucibus nisl etiam mauris diam venenatis amet placerat id.
                     Lorem ipsum dolor sit amet consectetur. 

                   </Typography>
            </div>
            
    {/* Image Section */} <div> <Image 
                            src="/assets/nextProjectimage.png"
                            alt="nextProjectimage"
                            width={720}
                            height={480}
                            className="rounded-xl "
                            />
                 </div>
                 </div>
        </div>
    )
}

export default Uiux