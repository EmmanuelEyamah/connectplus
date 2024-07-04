"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

import { BaseTypography } from "../../components/ui/Typography";
import { commonProps } from "@/types/common";
import "./style.css";

import React, { FC } from "react";
import { IServices } from "@/types/types";
import StarOutlined from "@/app/components/svg/StarOutlined";

export interface BenefitProps {
  service?: IServices;
}
const Benefit: FC<BenefitProps> = ({ service }) => {
  return (
    <div className="w-full h-full py-20 lg:px-24 px-10 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Your Benefits"
          
          className="leading-6 uppercase skills text-[#4D4B4B] lg:text-[20px] text-[16px] font-semibold small-caps font-montserrat"
        />
        <Typography
          className="lg:text-[40px] text-[26px] font-bold text-center font-work-sans leading-[120%] skillContent capitalize text-[#201E1E]"
          {...commonProps}
        >
          What You Can Expect From Us
        </Typography>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {service?.benefits.map((service, index) => (
              <Card
                className="group mt-6 w-full h-[279px] rounded-none card_benefits border-r-[1.2px] border-l-[0.3px] border-dashed "
                style={{
                  borderColor: "var(--LINEAR-LBUE, #0A52F6)",
                }}
                {...commonProps}
                key={`service-card-${index}`}
              >
                <CardBody
                  {...commonProps}
                  className="flex flex-col gap-5"
                  style={{ marginBottom: "20px" }}
                >
                  <StarOutlined />
                  <BaseTypography
                    label={service.title}
                
                    className="leading-7 lg:text-[28px] sm:text-[25px] text-23px] skillCardTitle text-[#000] font-bold "
                  />
                  <BaseTypography
                    label={service.description}
                    fontSizeLarge="lg:text-[20px]"
                    className="leading-7 skillCardDesc  font-leading-7 skillCardDesc  font-normal pb-[10px]"
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
