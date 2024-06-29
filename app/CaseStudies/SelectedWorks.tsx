"use client"

import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import Image from "next/image";

const SelectedWorks = () =>{
    return(
        <div  className=" flex w-[1440px] py-[80px] px-[96px] flex-col justify-center items-start gap-24 bg-white  ">


{/* SELECTED DIV */} <div>
                <Typography className=" gap-6 self-stretch text-[40px] font-sans leading-[48px] text-[#000] font-bold " {...commonProps}>  
                      Selected Works </ Typography>
                        <div>
                            <ul className=" flex gap-6 items-start font-sans text-[#4D4B4B] text-[20px]  active:decoration-blue-500 font-medium leading-8">
                              <li>All</li> 
                                <li>Web3</li>
                                <li>FinTech</li>
                                <li>SAAS</li>
                                <li>Education</li>
                                <li>HealthTech</li>
                                <li>E-Commerce</li>
                            </ul>
                        </div>


                    </div>
{/* CARDS*/}        <div>
{/* Card roll 1*/} <div className=" flex items-center gap-10 self-stretch ">
  {/*Card 1, IMage */}    <div className=" flex flex-col items-start gap-6 flex-grow flex-shrink-0   ">
                          <div>  <Image 
                            src="/cards.png"
                            {...commonProps}
                            alt="Card 1"
                            width={389.33333}
                            height={212}
                            className=" w-[389.33px] h-[212px] rounded-[20px] self-stretch"/> </div>
                                <div>
                                    
                                    </div>  
                            </div>      

              </div>

         

               {/* Card roll 2*/}      <div></div>
                    </div>
       
{/* Carousel 1 & 2 */}       
        </div>
    )

} 
export default SelectedWorks