/* eslint-disable @next/next/no-img-element */
"use client";
import { BaseTypography } from "../components/ui/Typography";
import "./style.css";


const ServicesHero = () => {
  return (
    <section className="h-full flex justify-center flex-col items-center gap-8 bg-[#F3F3F3] ">
      <div className=" mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0 gap-16 lg:gap-0">
        <div className=" flex flex-col justify-center items-center gap-6 ">
          <BaseTypography
            label="All Services"
            fontSizeLarge="lg:text-lg"

           
            className=" HeroServices text-[#797878] lg:text-[20px] text-[16px] pt-[100px] font-normal "
          />
          <div className="flex flex-col justify-center items-center gap-6">
            <BaseTypography
              label="Enrich Your Business With Our Offerings That Drives Growth"
              className="text-center font-montserrat font-bold HeroContent  text-[#201E1E] w-full lg:w-[600px] text-[28px] lg:text-[48px]"
              color="text-black"
            />
            <BaseTypography
              label="Whether you're in the early stages of ideation or looking to enhance an existing product, we have the expertise and resources to support your journey."
              className=" font-medium lg:max-w-screen-lg text-center text-[16px] lg:text-[20px] font-montserrat  lg:w-[600px] w-full  HeroContent1 leading-[160%]"
            />
          </div>
          <section
            className="flex items-center gap-6"
            style={{ textTransform: "capitalize" }}
          >
            <button className=" Herobtn text-[#fcfcfc] lg:text-[16px] text-[14px] h-[48px] px-[24px] lg:px-[48px] bg-[#0a52f6] rounded-[4px]  font-semibold leading-normal ">Get Started</button>
          </section>

           {/* <div className="  flex items-center justify-center pt-[120px] gap-4">
            <img
              className="HeroImage"
              src="/assets/ServiceImg.png"
              alt="image"
            />
            <img className="" src="/assets/ServiceImg.png" alt="image" />
            <img className="" src="/assets/ServiceImg.png" alt="image" />
            <img className="" src="/assets/ServiceImg.png" alt="image" />
            <img className="" src="/assets/ServiceImg.png" alt="image" />
            <img className="" src="/assets/ServiceImg.png" alt="image" />
          </div>  */}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
