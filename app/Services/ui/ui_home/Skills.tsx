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
import { servicesData } from "./Ui_data";

const Services = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Our skills"
          fontSizeLarge="lg:text-[20px]"
          className=" leading-6 uppercase font-bold "
        
        />
        <Typography
          className=" text-5xl font-bold text-center leading-normal text-[#201E1E]" style={{
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "120%", /* 48px */
            textTransform: "capitalize"}}
          {...commonProps}
        >
          Our Expertise Sets Us Apart
        </Typography>
    

        <div className="mt-8 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {servicesData.map((service) => (
      <Card
        className="group mt-6 w-full h-[279px] rounded-none"
        style={{ borderRight: "1px dashed var(--LINEAR-LBUE, #0A52F6)", borderBottom: "1px dashed var(--LINEAR-LBUE, #0A52F6)" }}
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
            className="leading-7 font-bold"
            color="text-[#000]"
          />
          <BaseTypography
            label={service.description}
            fontSizeLarge="lg:text-[20px]"
            color="text-[#000]"
            className="leading-7 font-normal"
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

export default Services;
