"use client"
import Image from "next/image"
import { BaseTypography } from "@/app/components/ui/Typography"
import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common"
const Subtitle = ()=> {
    return (
        <div>
{/* main div */}  <div className=" flex w-[1440px] py-[104px] px-[96px] flex-col justify-center items-center gap-[10px] ">

        <div className="flex w-[1248px] pb-20 items-center ">
             
            {/*Images*/}   <section className="flex w-[720] h-[579px] items-center flex-grow ">
            <Image 
                    src="/assets/Frame 1906.png"
                    alt="Image25"
                    height={579}
                    width={720}
                    className=" absolute  rounded-xl "
                    /> 

            </section>
            {/*Text*/}     <section className="flex flex-col items-start gap-3 self-stretch ">
            <div>
            <BaseTypography
                   label="Subtitle"
                   fontSizeLarge="lg:text-[40px]"
                   className="w-[448px] h-[48px] font-bold leading-[48px] font-sans self-stretch "
                   color="text-[#000]"
                   /></div>
                   <div>
                   <Typography className="w-[448px] h-[116px] self-stretch text-[rgba(32, 30, 30, 0.9)] font-Montserrat  text-[18px] font-normal leading-[28.8px] " {...commonProps}>
                Lorem ipsum dolor sit amet consectetur.
                 In faucibus nisl etiam mauris diam venenatis amet placerat id. 
                  Lorem ipsum dolor sit amet consectetur. 
                </Typography>
                   </div>

                   <div>
                   <Typography className="w-[448px] h-[116px] self-stretch text-[rgba(32, 30, 30, 0.9)] font-Montserrat  text-[18px] font-normal leading-[28.8px] " {...commonProps}>
                Lorem ipsum dolor sit amet consectetur.
                 In faucibus nisl etiam mauris diam venenatis amet placerat id. 
                  Lorem ipsum dolor sit amet consectetur. 
                </Typography>
                   </div>
           


            </section>
        </div>
         </div>

        </div>
        
    )
}

export default Subtitle