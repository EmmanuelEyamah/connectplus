"use client"

import { Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common";

const QuoteBanner = () => {
    return(
        <>
        <section className=" w-screen-lg lg:h-[440px] flex  justify-end items-center gap-2  bg-[#011F56]">

                <div className="flex flex-col justify-center items-end gap-6 py-36 px-24 ">
               <div className=" text-white font-worksans text-28 font-semibold w-[519px] " > “Success is the result of hard work, unwavering dedication, and relentless effort.” </div>

             <div className="text-white font-worksans text-28 italic w-[519px] font-semibold " {...commonProps}>  -Dagogo </div>

             
                </div>
        </section>
        </>
    )
}
export default QuoteBanner