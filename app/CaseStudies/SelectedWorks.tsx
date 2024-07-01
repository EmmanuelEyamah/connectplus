"use client"

import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import SelectedWorksFrame from "./SelectedWorksFrame";



const SelectedWorks = () =>{
    return(
        <div  className=" flex w-[1440px] py-[80px] px-[96px] flex-col justify-center items-start gap-24 bg-white  ">


{/* SELECTED DIV */} <div>
                <Typography className=" gap-6 self-stretch text-[40px] font-sans leading-[48px] text-[#000] font-bold " {...commonProps}>  
                      Selected Works </ Typography>
                        
                            <ul className=" flex items-start  gap-6  font-sans pt-6 text-[#4D4B4B] text-[20px]  active:decoration-blue-500 font-medium leading-8">
                              <li>All</li> 
                                <li>Web3</li>
                                <li>FinTech</li>
                                <li>SAAS</li>
                                <li>Education</li>
                                <li>HealthTech</li>
                                <li>E-Commerce</li>
                            </ul>
                           

                {/* CARDS1*/} <div className=" pt-24  flex items-center gap-10 self-stretch  ">

                 <SelectedWorksFrame />
                 <SelectedWorksFrame />
                 <SelectedWorksFrame />
                 </div>

{/* CARDS 2 */}
             <div className=" pt-24  flex items-center gap-10 self-stretch  ">

                <SelectedWorksFrame />
                 <SelectedWorksFrame />
                 <SelectedWorksFrame />
                 </div>

                   </div>
    
           
        </div>
    )

} 
export default SelectedWorks