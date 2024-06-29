
"use client";

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import { BaseTypography } from "../../../components/ui/Typography";
import { commonProps } from "@/types/common";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./style.css";
import { Benefits } from "./Ui_data";


import React from 'react'

const Ui_benefit = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-white">
    <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
      <BaseTypography
        label="Your Benefits"
        fontSizeLarge="lg:text-[20px]"
        className=" leading-6 uppercase skills font-bold font-montserrat"
      
      />
      <Typography
        className=" text-5xl font-bold text-center font-work-sans leading-normal skillContent text-[#201E1E]" 
        {...commonProps}
      >
      What You Can Expect From Us
      </Typography>
  

      <div className="mt-8 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
  {Benefits.map((service) => (
    <Card
      className="group mt-6 w-full h-[279px] rounded-none card_benefits"
      style={{ borderRight: "1.2px dashed var(--LINEAR-LBUE, #0A52F6)" }}
      {...commonProps}
      key={`service-card-${service.id}`}
    >
      <CardBody
        {...commonProps}
        className="flex flex-col gap-5"
        style={{ marginBottom: "20px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: service.icon }} />
        <BaseTypography
          label={service.title}
          fontSizeLarge="lg:text-[23px]"
          className="leading-7 skillCardTitle"
        />
        <BaseTypography
          label={service.description}
          fontSizeLarge="lg:text-[20px]"
         
          className="leading-7 skillCardDesc  font-normal"
        />
      </CardBody>
    </Card>
  ))}
</div>
</div>

    </div>
  </div>
  )
}

export default Ui_benefit
