"use client"
import { BaseTypography } from "@/app/components/ui/Typography";
import Image from "next/image";
import BookIcon from "@/app/components/svg/BookIcon";
import PlantIcon from "@/app/components/svg/PlantIcon";
import SmBookIcon from "@/app/components/svg/SmBookIcon";

const ClientFeedback = () =>{
return(
    <section className="bg-[#011F56;] flex justify-center items-start ">
    <div className="flex w-[1440px] h-[428px] py-[80px] px-[96px] flex-col justify-center items-start gap-20  container ">
        
        <div className=" flex flex-col justify-center items-start h-[29px] w-[604px]">
          <BaseTypography
            label="Client Feedback"
            fontSizeLarge="lg:text-[40px]"
            className="font-work-sans font-bold leading-[48px] text-center text-[#FBFAFA] "
            color="text-white"
          />


          </div>
            <div className="flex flex-col justify-center items-start gap-6 w-[604px] ">

            <BaseTypography
            label="CEO - OJamikunle Idowufisi"
            fontSizeLarge="lg:text-[18px]"
            className="font-Montserrat h-[29px] w-[604px] italic font-semibold leading-[28.8px] text-opacity-80 text-white "
          /> 

          <BaseTypography
            label="From concept to final design, they delivered an app that's both functional and aesthetically pleasing and in a timely manner."
            fontSizeLarge="lg:text-[18px]"
            className="w-[604px] h-[87px] text-opacity-80 text-white font-Montserrat font-medium leading-[28.8px] "
            color="text-white"
          /> 
          
          </div>
      

    </div>
    {/*Image Section */} <div className="flex w-[344.01px] h-[454px] pt-[93.61px] px-[28.082px] flex-col justify-center items-start  ">

    <Image
    src="/assets/Frame 1777.png"
    alt="A man smiling"
    width={344.01}
    height={454}
    className="rounded-[23.4px] box-border pr-7 right-[181.99px]  "
    />

        <div className="absolute left-124 lg:left-60">
            <BookIcon />
          </div>
          <div className="absolute left-0 bottom-0">
            <PlantIcon />
          </div>
          <div className="absolute left-0">
            <SmBookIcon />
          </div>
</div>
    </section>
)
}
export default ClientFeedback;