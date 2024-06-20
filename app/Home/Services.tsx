"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { BaseTypography } from "../components/ui/Typography";
import { commonProps } from "@/types/common";
import { ArrowUpOutlined } from "@ant-design/icons";
import { servicesData } from "./data";

const Services = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="What We Do"
          fontSizeLarge="lg:text-[20px]"
          className=" leading-6 uppercase"
        />
        <Typography
          className=" text-5xl font-bold text-center leading-normal text-[#201E1E]"
          {...commonProps}
        >
          We Provide <span className="text-[#0A52F6]">A+</span> Products In
          Record Time
        </Typography>
        <BaseTypography
          label="Our mission is to empower businesses to reach their full potential through a perfect blend of creativity, technical expertise, and strategic insight."
          fontSizeLarge="lg:text-[20px]"
          className=" leading-7 font-normal text-center w-[614px]"
        />

        <div className="mt-8">
          <div className="flex w-full gap-6">
            {servicesData.map((service) => {
              return (
                <Card
                  className="group mt-6 w-[294px] h-[375px] hover:bg-[#0A52F6]"
                  {...commonProps}
                  key={`service-card-${service.id}`}
                >
                  <CardBody {...commonProps} className="flex flex-col gap-5">
                    <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                    <BaseTypography
                      label={service.title}
                      fontSizeLarge="lg:text-[22px]"
                      className=" leading-7 font-bold group-hover:text-[#FBFAFA] w-[214px]"
                    />
                    <BaseTypography
                      label={service.description}
                      fontSizeLarge="lg:text-[20px]"
                      color="text-[#4D4B4B]"
                      className=" leading-7 font-normal group-hover:text-[#FBFAFACC]"
                    />
                  </CardBody>
                  <CardFooter
                    className="pt-0 flex gap-2 underline group-hover:text-[#FBFAFACC]"
                    {...commonProps}
                  >
                    Lead more
                    <ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
