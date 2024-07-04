"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { BaseTypography } from "../../components/ui/Typography";
import { commonProps } from "@/types/common";
import { FC } from "react";
import { IServices } from "@/types/types";
import PenIcon from "@/app/components/svg/PenIcon";
import TechniIcon from "@/app/components/svg/TechniIcon";
import BtcIcons from "@/app/components/svg/BtcIcons";

export interface SkillsProps {
  service?: IServices;
  id: string | string[];
}
const Skills: FC<SkillsProps> = ({ service, id }) => {
  return (
    <div className="w-full h-full lg:py-20 lg:px-24 px-10 py-15 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Our skills"
          className=" leading-6 uppercase skills text-[#4D4B4B] lg:text-[20px] text-[16px] font-semibold small-caps font-montserrat"
        />
        <Typography
          className=" lg:text-[40px] text-[26px] font-bold text-center font-work-sans leading-[120%] skillContent capitalize text-[#201E1E]"
          {...commonProps}
        >
          Our Expertise Sets Us Apart
        </Typography>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 pb-7">
            {service?.skills.map((service, index) => (
              <Card
                className="mt-6 w-full h-[290px] rounded-none shadow-none border-r-2 border-b-2 border-[#0A52F6] border-dashed p-2"
                style={{
                  borderColor:"#0A52F6"
                }}
                {...commonProps}
                key={`service-card-${index}`}
              >
                <CardBody
                  {...commonProps}
                  className="flex flex-col gap-5"
                  style={{ marginBottom: "20px" }}
                >
                  {id === "2" ? (
                    <BtcIcons />
                  ) : id === "6" ? (
                    <TechniIcon />
                  ) : (
                    <PenIcon />
                  )}
                  <BaseTypography
                    label={service.title}
                    className="leading-7 lg:text-[28px] sm:text-[25px] text-23px] skillCardTitle text-[#000] font-bold "
                  />
                  <BaseTypography
                    label={service.description}
                    fontSizeLarge="lg:text-[20px]"
                    className="leading-7 skillCardDesc  font-normal pb-[10px]"
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

export default Skills;
