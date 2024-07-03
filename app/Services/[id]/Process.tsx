"use client";
import { Typography } from "@material-tailwind/react";
import { BaseTypography } from "../../components/ui/Typography";
import { commonProps } from "@/types/common";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./style.css";

import React, { FC } from "react";
import ArrowIcon from "@/app/components/svg/arrowIcon";
import ArrowDown from "@/app/components/svg/arrowDown";
import { IServices } from "@/types/types";

export interface ProcessProps {
  service?: IServices;
}
const Process: FC<ProcessProps> = ({ service }) => {
  return (
    <div className="bg-[#011F56] w-full h-full pb-[100px] pt-3 relative container mx-auto">
      <div className="ml-14 mt-20 flex flex-col">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start w-full lg:w-[550px] font-montserrat">
            <h4 className="processHead font-bold">PROCESS & METHODOLOGY</h4>
            <Typography
              className="text-[44px] font-bold leading-normal text-[#FBFAFA]"
              {...commonProps}
            >
              Our Unique Approach- The Connect{" "}
              <span className="text-[#0A52F6]">+</span> way
            </Typography>
          </div>
          <div className="processHeadContent flex flex-col lg:ml-10 lg:w-[701px] mt-[45px]">
            <p className="text-[#FBFAFA] processHeadContent2 mr-8">
              Although each project is different and requires a separate process
              and timeline, this is a condensed version of what to expect should
              you set this in motion.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-y-8 ml-[80px] w-[700px]">
        {service?.steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-start ${
              index === 2 || index === 3
                ? "ml-[170px]"
                : index === 4 || index === 5
                ? "ml-[350px]"
                : index === 6 || index === 7
                ? "ml-[540px]"
                : ""
            }`}
          >
            <div className="flex gap-5 items-center justify-center">
              <div className="box">
                <span className="text-[44px] span text-[#FBFAFA99] number ">
                  {step.step}
                </span>
                <p className="text-[16px] text-[#FBFAFA] content">
                  {step.description}
                </p>
              </div>
              {index % 2 === 0 && index !== service.steps.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowIcon />
                </div>
              )}
            </div>
            {index % 2 !== 0 && index !== service.steps.length - 1 && (
              <div className="mt-2 ml-11">
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
