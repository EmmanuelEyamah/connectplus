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
    <div className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-5">
        <BaseTypography
          label="Our skills"
          fontSizeLarge="lg:text-[20px]"
          className=" leading-6 uppercase skills font-bold font-montserrat"
        />
        <Typography
          className=" text-5xl font-bold text-center font-work-sans leading-normal skillContent text-[#201E1E]"
          {...commonProps}
        >
          Our Expertise Sets Us Apart
        </Typography>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {service?.skills.map((service, index) => (
              <Card
                className="mt-6 w-full h-[279px] rounded-none shadow-none"
                style={{
                  borderRight: "2px dashed #0A52F6",
                  borderBottom: "2px dashed #0A52F6",
                  padding: "10px",
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
  );
};

export default Skills;
