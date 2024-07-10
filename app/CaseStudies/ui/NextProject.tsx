"use client"
import { BaseTypography } from "@/app/components/ui/Typography"
import { commonProps } from "@/types/common"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"
import AppButton from "@/app/components/ui/Button"
import { ArrowUpOutlined } from "@ant-design/icons";

const NextProject = ()=>{
    return(
    <main className="flex w-[1440px] py-[80px] px-[96px] flex-col justify-center items-center gap-[10px] ">
      {/*Main div*/}  <div className=" flex flex-col items-start gap-[80px] self-stretch ">
                        <div> <BaseTypography
                   label="Next Project"
                   fontSizeLarge="lg:text-[40px]"
                   className=" font-bold leading-[48px] font-sans self-stretch "
                   color="text-[#000]"
                   />
                   </div>
                        <div className="flex items-start gap-[80px] self-stretch rounded-xl " >
                            <div> <Image 
                            src="/assets/nextProjectimage.png"
                            alt="nextProjectimage"
                            width={720}
                            height={480}
                            className="rounded-xl "
                            />
                             </div>
                            

                            <div className="flex flex-col items-start gap-6 ">
                                 <Typography {...commonProps}
                                  className="w-[355px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-medium leading-[28.8px] ">
                                     Lorem ipsum dolor sit amet consectetur. 
                                    In faucibus nisl etiam mauris diam venenatis amet placerat id. 
                                     Lorem ipsum dolor sit amet consectetur. 
                                     In faucibus nisl etiam mauris diam venenatis amet placerat id.</Typography>
                                <div className="flex items-center gap-6">
                             
                                <AppButton variant="primary" > Book a Demo</AppButton>   
                                <AppButton variant="secondary" >
                                <span>View Projects </span>
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