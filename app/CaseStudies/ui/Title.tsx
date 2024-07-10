"use client"

import { BaseTypography } from "@/app/components/ui/Typography"
import { commonProps } from "@/types/common"
import { Typography } from "@material-tailwind/react"
import Image from "next/image"

const Title =()=>{
    return(
        <main className="flex flex-col justify-center items-center w-[1440px] px-[96px] pt-[88px] gap-[104px] "> 

     {/* First div gap-[80px] */}   <div className="flex flex-col justify-center items-start gap-6  w-[1248px] ">
  
                        <BaseTypography
                          label="Title"
                         fontSizeLarge="lg:text-[48px]"
                         className=" font-sans font-bold leading-normal self-stretch"
                         color="text-[#201E1E]"
                            />      
                            <div className="flex  gap-10 ">
                              <Typography className="w-[604px] h-[87px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-normal leading-[28.8px] flex-grow flex-shrink-0" {...commonProps} > Lorem ipsum dolor sit amet consectetur. 
                                In faucibus nisl etiam mauris diam venenatis amet placerat id. 
                                Lorem ipsum dolor sit amet consectetur.  </Typography>

                                <Typography className="w-[604px] h-[87px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-normal eading-[28.8px] flex-grow flex-shrink-0" 
                                {...commonProps}>
                                Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id.
                                  Lorem ipsum dolor sit amet consectetur. 
                                </Typography>
                            

                                </div>
                        </div>

                        {/*Image Section*/ } <div>
                            <Image
                            src="/assets/Title-Image.png"
                            alt="Title Image"
                            width={1248}
                            height={480}
                            className="flex p-[10px] justify-center items-center gap-[10px] self-stretch "
                            />

                        </div>

{/* Image 1-1*/}       <div className=" flex justify-center p-[10px] items-center gap-10 self-stretch ">
                                <div> <Image 
                                src="/assets/Title-Image.png"
                                alt="Title Image 1"
                                width={604}
                                height={480}
                                className=""
                                 /></div>
                                <div><Image 
                                src="/assets/Title-Image.png"
                                alt="Title Image 2"
                                width={604}
                                height={480}
                              
                                 /></div>
                        </div>
            {/* Second Section*/}      
            <div className="flex flex-col justify-center items-start gap-6  w-[1248px] ">
  
                <BaseTypography
                label="Title"
            fontSizeLarge="lg:text-[48px]"
            className=" font-sans font-bold leading-normal self-stretch"
            color="text-[#201E1E]"
                />      
      <div className="flex  gap-10 ">
        <Typography className="w-[604px] h-[87px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-normal leading-[28.8px] flex-grow flex-shrink-0" {...commonProps} > Lorem ipsum dolor sit amet consectetur. 
          In faucibus nisl etiam mauris diam venenatis amet placerat id. 
          Lorem ipsum dolor sit amet consectetur.  </Typography>

          <Typography className="w-[604px] h-[87px] text-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-normal eading-[28.8px] flex-grow flex-shrink-0" 
          {...commonProps}>
          Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id.
            Lorem ipsum dolor sit amet consectetur. 
          </Typography>
      

          </div>
  </div>

                {/*Image Section*/ } <div>
                    <Image
                    src="/assets/Title-Image.png"
                    alt="Title Image"
                    width={1248}
                    height={480}
                    className="flex p-[10px] justify-center items-center gap-[10px] self-stretch "
                    />

  </div>
        </main>
    )
}

export default Title