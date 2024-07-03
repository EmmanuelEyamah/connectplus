/* eslint-disable @next/next/no-img-element */
"use client";
import { BaseTypography } from "../components/ui/Typography";
import "./style.css";


const ServicesHero = () => {
  return (
    <section className="h-full flex justify-center flex-col items-center gap-8 bg-[#F3F3F3] ">
      <div className=" flex flex-col justify-center items-center gap-10 max-w-screen-xl mx-auto">
        <div className=" flex flex-col justify-center items-center gap-6 ">
          <BaseTypography
            label="All Services"
            fontSizeLarge="lg:text-lg"
            className=" HeroServices text-[#797878]"
          />
          <div className="flex flex-col justify-center items-center gap-6">
            <BaseTypography
              label="Enrich Your Business With Our Offerings That Drives Growth"
              className=" font-montserrat font-bold HeroContent text-[#201E1E]"
              color="text-black"
            />
            <BaseTypography
              label="Whether you're in the early stages of ideation or looking to enhance an existing product, we have the expertise and resources to support your journey."
              className=" font-medium max-w-screen-lg text-center font-montserrat HeroContent1 "
            />
          </div>
          <section
            className="flex items-center gap-6"
            style={{ textTransform: "capitalize" }}
          >
            <button className=" Herobtn ">Get Started</button>
          </section>

          <div className="  flex items-center justify-center pt-[120px] gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
