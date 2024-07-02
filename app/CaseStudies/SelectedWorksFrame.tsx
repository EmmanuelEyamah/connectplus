"use client"
import Image from "next/image"
import { commonProps } from "@/types/common"
import { BaseTypography } from "../components/ui/Typography"
import AppButton from "../components/ui/Button"
import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "@material-tailwind/react"



const tags = ["Research", "Figma", "React", "Django"];

const SelectedWorksFrame=()=>{
    return(
<section>
     <div className=" ">
                          <div>  <Image 
                            src="/cards.png"
                            {...commonProps}
                            alt="Card 1"
                            width={389.33333}
                            height={212}
                            className=" w-[389.33px] h-[212px] rounded-[20px] self-stretch"/> </div>
                               

                          {/* Text Section */}          
                       <div className="flex flex-col gap-6 flex-grow ">
                          <div className="pt-6">
                      

                              <ul className="flex gap-[12px] items-start  ">
                                <li> <Button className=" bg-[#0A52F6;] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center "
                                 {...commonProps}> <span className=" text-[10px] text-[#FBFAFA] font-medium leading-normal font-sans "> Research  </span>  </Button>
                                  </li>
                                  
                                  <li> <Button className=" bg-[#0A52F6;] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center  "
                                 {...commonProps}> <span className=" text-[10px] text-[#FBFAFA]  font-medium leading-normal font-sans "> Figma  </span>  </Button>
                                  </li>

                                  <li> <Button className=" bg-[#0A52F6;] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center  "
                                 {...commonProps}> <span className=" text-[10px] text-[#FBFAFA]  font-medium leading-normal font-sans "> React  </span>  </Button>
                                  </li>

                                  <li> <Button className=" bg-[#0A52F6;] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center  "
                                 {...commonProps}> <span className=" text-[10px] text-[#FBFAFA]  font-medium leading-normal font-sans "> Django  </span>  </Button>
                                  </li>
                                </ul>  </div>
             
                                  <span className=" w-[389.33px] h-[46px]">
                                  <BaseTypography 
                                  label="Oja MI"
                                  fontSizeLarge="lg:text-[25px]"
                                  className=" font-sans font-bold pb-3 leading-[30px] "
                                  color="text-[#000]"
                                  
                                  />

                                <BaseTypography 
                                  label="Our product design service is the cornerstone of innovation. "
                                  fontSizeLarge="lg:text-[18px]"
                                  className=" font-Montserrat pb-6  font-medium text-[18px] self-stretch leading-[23.4px] tracking-[0.36px] "
                                  color="text-[#000]"
                                  />
                                    </span>

                            <div className="pt-[30px] ">
                              
                                <AppButton variant="secondary" >
                                <span>View Projects </span>
                                  <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
                                  </AppButton> 

                                </div>
                               </div>
                            </div> 
                        
      
         

               
                    </section>
    )
}

export default SelectedWorksFrame