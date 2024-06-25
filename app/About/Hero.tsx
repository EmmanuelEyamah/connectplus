"use client"
import { ArrowUpOutlined} from "@ant-design/icons";
import { Button, Typography } from "@material-tailwind/react"
import { commonProps } from "@/types/common";

const Hero = () =>{
    return(
        <section className="flex flex-col items-center pt-20 gap-16 bg-[#F3F3F3] ">
            <div className=" flex flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto">
                <div className=" flex flex-col justify-center items-center gap-6 ">
                    <Typography className=" text-gray-700 font-montserrat font-semibold text-lg leading-relaxed tracking-normal" {...commonProps} >
                            About Us
                    </Typography>
                        <div className="flex flex-col justify-center items-center gap-6">
                    <Typography className=" text-black font-worksans text-center text-4xl font-bold "  {...commonProps}>
                        Our Company
                    </Typography>

                    <Typography className="text-black-90 text-center font-montserrat text-base font-medium leading-8 max-w-screen-lg" {...commonProps}>
                    We foster a culture of collaboration, where every team member is encouraged to contribute their unique
                     perspectives and expertise.
                     By cultivating an environment that values both creative ideas and technical excellence,
                      we ensure that our solutions not only meet but exceed our clients' expectations.
                    </Typography>
                    </div>
                        <section className="flex items-center gap-6">
                            <Button  {...commonProps} className=" bg-blue-800 flex h-12 px-12 justify-center items-center gap-2 rounded-md text-white font-worksans text-base font-semibold " > Book A Call </Button>
                            <Button  {...commonProps} className=" bg-transparent rounded-md border border-gray-900 flex h-12 px-6 justify-center items-center gap-2 text-gray-900 font-worksans text-base font-semibold "> 
                                View Project <ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>  </Button>
                        </section>

                </div>
            </div>
            {/*Video Container */}
            <div className=" flex justify-center items-center max-w-screen-xl max-h-96 flex-shrink-0 "  >
                <section className=" flex justify-center items-center max-w-screen-lg  ">
                    {/*Video Container */}
                    <video src="../assets/Team-Video.mp4">
                    </video>
                  
                </section>
            </div>
            
        </section>
    )
}

export default Hero