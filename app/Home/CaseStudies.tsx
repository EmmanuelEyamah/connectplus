/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BaseTypography } from "../components/ui/Typography";
import { Button, Card } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import AppButton from "../components/ui/Button";
import { ArrowUpOutlined } from "@ant-design/icons";

const tags = ["Research", "Figma", "React", "Django"];

const CaseStudies = () => {
  return (
    <div className="w-full h-full py-10 px-12 lg:py-20 lg:px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Our Case Studies"
          fontSizeLarge="lg:text-[40px]"
          fontSizeSmall="text-[32px]"
          className=" leading-[48px] font-bold"
          color="text-[#000]"
        />
        <BaseTypography
          label="Our case studies showcase the diverse range of projects we’ve successfully delivered, highlighting our ability to drive business growth and create exceptional user experiences."
          fontSizeLarge="lg:text-[20px]"
          className=" leading-[32px] font-normal text-center w-full lg:w-[708px]"
          color="text-[#201E1EE5]"
        />
      </div>

      <div className="mt-14 flex items-center justify-center">
        <Card
          {...commonProps}
          className="w-full h-full lg:h-[360px] max-w-[59rem] flex-col lg:flex-row p-4 gap-6 rounded-3xl border border-[#F4F3F3]"
        >
          <div className="w-full h-full lg:w-[495px] relative flex items-start">
            <img
              src="/assets/case-img.jpg"
              alt="case-studies img"
              className="rounded-2xl w-full h-full"
            />
          </div>
          <div className="w-full lg:w-[405px] flex flex-col items-start gap-6">
            <BaseTypography
              label="Oja MI"
              fontSizeLarge="lg:text-[40px]"
              className=" leading-[48px] font-bold"
              color="text-[#000000]"
            />
            <BaseTypography
              label="Our product design service is the cornerstone of innovation.  Our product design service is the cornerstone of innovation."
              fontSizeLarge="lg:text-[18px]"
              className=" leading-[23px] font-normal"
              color="text-[#000000]"
            />
            <div className="flex items-start gap-3 flex-wrap">
              {tags.map((tag, index) => {
                return (
                  <Button
                    key={`tag-${index}`}
                    size="sm"
                    className="bg-[#0A52F6] rounded-3xl"
                    {...commonProps}
                  >
                    {tag}
                  </Button>
                );
              })}
            </div>

            <AppButton variant="secondary">
              <span>View Projects </span>
              <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
            </AppButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudies;
