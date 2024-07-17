"use client";
import { BaseTypography } from "@/app/components/ui/Typography";
import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className=" flex w-[1440px] px-24 pt-[88px] pb-0 flex-col justify-center items-center gap-[104px] bg-[#fff] ">
        <div className=" flex w-[1248px] flex-col justify-center items-start  gap-6 ">
          <BaseTypography
            label="Oja mi- Retail SuperApp"
            fontSizeLarge="lg:text-[48px]"
            className=" font-sans leading-normal font-bold items-center self-stretch "
            color="text-[#201E1E]"
          />
          <Typography
            className=" text-[#201E1E] font-Montserrat font-medium leading-normal text-[20px] "
            {...commonProps}
          >
            {" "}
            By Connect+
          </Typography>
        </div>
        <div className=" flex h-[480px] p-[10px] justify-center items-center gap-[10px] self-stretch ">
          <Image
            src="/assets/Frame 1719 UI.png"
            alt="page image"
            width={1248}
            height={480}
            className="pb-[20px]"
          />
        </div>
      </div>

      <section className="bg-[#CDCDCD]">
        <div className="flex w-[1440px] py-[104px] px-24 flex-col justify-center items-start gap-[10px] ">
          <div className="flex items-center gap-[80px]   ">
            <div className=" ">
              <BaseTypography
                label="Problem Statement"
                fontSizeLarge="lg:text-[40px]"
                className=" font-sans leading-[48px] font-bold self-stretch w-[448px] h-[48px] "
                color="text-[#000]"
              />
              <div className="flex justify-center items-center">
                <Typography
                  className=" w-[448px]  h-[116px] self-stretch bg-[rgba(32, 30, 30, 0.90)] font-Montserrat text-[18px] font-normal leading-[28.8px] "
                  {...commonProps}
                >
                  Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam
                  mauris diam venenatis amet placerat id. Lorem ipsum dolor sit
                  amet consectetur.
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-6 w-[720px] h-[560px] box-border ">
              <Image
                src="/assets/image 25.png"
                alt="Image25"
                width={348}
                height={480}
                className="rounded-xl flex-shrink-0"
              />

              <Image
                src="/assets/image 25.png"
                alt="Image25"
                width={348}
                height={480}
                className="pt-20 rounded-xl flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Hero;
