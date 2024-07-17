/* eslint-disable @next/next/no-img-element */
"use client";
import { BaseTypography } from "@/app/components/ui/Typography";
import BookIcon from "@/app/components/svg/BookIcon";
import PlantIcon from "@/app/components/svg/PlantIcon";
import SmBookIcon from "@/app/components/svg/SmBookIcon";

const ClientFeedback = () => {
  return (
    <section className="bg-[#011F56] flex justify-center items-start">
      <div className="bg-[#011F56] container relative w-full h-auto lg:h-[400px] lg:pl-0 lg:pt-0 pb-0 flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 lg:p-0">
        <div className="relative w-full lg:w-[40%] md:w-full h-full lg:pl-[100px]">
          <div className="flex justify-start gap-4 lg:absolute top-0 left-0 lg:top-32 lg:left-0 lg:flex lg:flex-col">
            <div className="lg:block hidden">
              <SmBookIcon />
            </div>
            <div className="lg:absolute relative lg:bottom-[-220px]">
              <PlantIcon />
            </div>
            <div className="block lg:hidden lg:position relative lg:bottom-0 lg:right-[-60px]">
              <BookIcon />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-2 lg:gap-4 p-4 lg:p-0 mt-16 lg:mt-0">
            <BaseTypography
              label="Client Feedback"
              className="leading-[48px] lg:text-[40px] text-[35px] text-[#fff] lg:pt-10 font-work-sans font-bold"
              color="text-black"
            />
            <BaseTypography
              label="CEO - OJamikunle Idowufisi"
              className="leading-[32px] lg:text-[20px] lg:pt-6 lg:pb-6 text-[18px] font-medium font-montserrat italic text-[#FBFAFACC]"
              color="text-black-90"
            />
            <BaseTypography
              label="From concept to final design, they delivered an app that's both functional and aesthetically pleasing and in a timely manner."
              className="leading-[32px] lg:text-[18px] text-[16px] font-medium text-[#FBFAFACC] font-montserrat"
              color="text-black-90"
            />
          </div>
        </div>
        <div className="relative lg:absolute lg:right-20 w-full lg:top-[-55px] lg:w-[50%] h-auto flex flex-col gap-5 items-end justify-end mt-0 lg:mt-0">
          <img
            src="/assets/Frame 1777.png"
            alt="smiling guy"
            className="w-full lg:w-auto h-auto lg:h-[454px] rounded-[23.4px]"
          />
          <div className="flex justify-center lg:absolute lg:top-[100px] lg:right-0 relative w-full mt-4">
            <BookIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientFeedback;
