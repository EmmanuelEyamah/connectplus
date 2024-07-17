/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { commonProps } from "@/types/common";
import { BaseTypography } from "../components/ui/Typography";
import AppButton from "../components/ui/Button";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "@material-tailwind/react";

const SelectedWorksFrame = () => {
  return (
    <section className="px-4 py-8 w-full lg:py-16">
      <div className="flex w-full flex-col gap-2 lg:gap-4">
        <div className="w-full h-full">
          <img
            src="/cards.png"
            alt="Card 1"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 lg:gap-6 flex-wrap">
          <div className="pt-4 lg:pt-6">
            <ul className="flex flex-wrap gap-4 lg:gap-[12px] items-start">
              <li>
                <Button
                  className="bg-[#0A52F6] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center"
                  {...commonProps}
                >
                  <span className="text-[10px] text-[#FBFAFA] font-medium leading-normal font-sans">
                    Research
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  className="bg-[#0A52F6] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center"
                  {...commonProps}
                >
                  <span className="text-[10px] text-[#FBFAFA] font-medium leading-normal font-sans">
                    Figma
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  className="bg-[#0A52F6] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center"
                  {...commonProps}
                >
                  <span className="text-[10px] text-[#FBFAFA] font-medium leading-normal font-sans">
                    React
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  className="bg-[#0A52F6] rounded-[20px] w-[71px] h-[32px] flex items-center justify-center"
                  {...commonProps}
                >
                  <span className="text-[10px] text-[#FBFAFA] font-medium leading-normal font-sans">
                    Django
                  </span>
                </Button>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <BaseTypography
              label="Oja MI"
              fontSizeLarge="lg:text-[25px]"
              className="font-sans font-bold pb-3 leading-[30px]"
              color="text-[#000]"
            />

            <BaseTypography
              label="Our product design service is the cornerstone of innovation."
              fontSizeLarge="lg:text-[18px]"
              className="w-full font-Montserrat pb-6 font-medium text-[16px] lg:text-[18px] leading-[23.4px] tracking-[0.36px]"
              color="text-[#000]"
            />
          </div>

          <div className="pt-[20px] lg:pt-[30px]">
            <AppButton variant="secondary">
              <span>View Projects</span>
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorksFrame;
