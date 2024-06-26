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
                            <Button  {...commonProps} className=" bg-[#0A52F6] flex h-12 px-12 justify-center items-center gap-2 rounded-md text-white font-worksans text-base font-semibold " > Book A Call </Button>
                            <Button  {...commonProps} className=" bg-transparent rounded-md border border-gray-900 flex h-12 px-6 justify-center items-center gap-2 text-gray-900 font-worksans text-base font-semibold "> 
                                View Project <ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>  </Button>
                        </section>

                </div>
            </div>
            {/*Video + Quote */}
            <div className=" flex justify-center items-center max-w-screen-xl max-h-96 flex-shrink-0 "  >
                <section className=" flex justify-center items-center max-w-screen-lg  ">

              {/*  <svg className="justify-right flex-shrink-0  justify-items-end  " xmlns="http://www.w3.org/2000/svg" width="139" height="139" viewBox="0 0 140 140" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M81.832 11.8315C81.832 5.29712 76.5349 0 70.0006 0C63.4663 0 58.1691 5.29712 58.1691 11.8315V24.8018L51.7608 13.5248C48.5324 7.84372 41.3098 5.85542 35.6287 9.08381C29.9476 12.3122 27.9593 19.5348 31.1877 25.2159L38.481 38.0501L25.6467 30.7568C19.9656 27.5284 12.7431 29.5167 9.51466 35.1978C6.28626 40.8789 8.27457 48.1015 13.9557 51.3299L25.2309 57.7373H12.2611C5.72681 57.7373 0.429688 63.0344 0.429688 69.5687C0.429687 76.1031 5.72681 81.4002 12.2611 81.4002H25.2331L13.955 87.8092C8.2739 91.0376 6.2856 98.2602 9.51399 103.941C12.7424 109.622 19.965 111.611 25.6461 108.382L38.482 101.088L31.1892 113.921C27.9607 119.603 29.9491 126.825 35.6302 130.054C41.3113 133.282 48.5338 131.294 51.7622 125.613L58.1691 114.338V127.306C58.1691 133.841 63.4663 139.138 70.0006 139.138C76.5349 139.138 81.832 133.841 81.832 127.306V114.336L88.2401 125.613C91.4685 131.294 98.6911 133.282 104.372 130.054C110.053 126.825 112.042 119.603 108.813 113.921L101.522 101.091L114.352 108.382C120.033 111.611 127.256 109.622 130.484 103.941C133.713 98.2602 131.725 91.0376 126.043 87.8092L114.765 81.4002H127.736C134.27 81.4002 139.568 76.1031 139.568 69.5688C139.568 63.0344 134.27 57.7373 127.736 57.7373H114.767L126.043 51.3299C131.724 48.1015 133.712 40.8789 130.484 35.1978C127.255 29.5167 120.033 27.5284 114.352 30.7568L101.523 38.0469L108.815 25.2159C112.043 19.5348 110.055 12.3122 104.374 9.08381C98.6925 5.85542 91.47 7.84372 88.2416 13.5248L81.832 24.8038V11.8315Z" fill="#0A52F6"/>
</svg>
*/}
                    {/*Video Container */}
                    <video src="../assets/Team-Video.mp4" controls>
                    </video>
                  
                </section>
            </div>
            
        </section>
    )
}

export default Hero