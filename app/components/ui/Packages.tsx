import React from "react";
import { BaseTypography } from "./Typography";
import StarFilled from "../svg/StarFilled";
import StrickIcon from "../svg/StrickIcon";
import MobileIcon from "../svg/MobileIcon";

const packages = [
  {
    title: "Code Optimisation",
    description:
      "We streamline your codebase for efficiency, faster load times, and a seamless experience",
    icon: <StarFilled />,
  },
  {
    title: "Website Redesign",
    description:
      "We enhance your site's aesthetics, functionality, and user experience, with our website redesign services",
    icon: <StrickIcon />,
  },
  {
    title: "Mobile App Design & Dev",
    description:
      "Our team crafts intuitive interfaces and engaging visuals that captivate users and drive engagement.",
    icon: <MobileIcon />,
  },
];

const Packages = () => {
  return (
    <div className="w-full h-[820px] bg-[#011F56] px-24 py-20">
      <div className="w-full h-full container mx-auto flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-2">
          <BaseTypography
            label="Top Packages"
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[24px] font-semibold font-montserrat font-small-caps"
            color="text-[#FBFAFACC]"
          />
          <BaseTypography
            label="Most Founders Liked This Services"
            fontSizeLarge="lg:text-[40px]"
            className=" leading-[48px] font-bold font-work-sans"
            color="text-[#FBFAFA]"
          />
        </div>

        <div className="w-full flex gap-10 items-center justify-center">
          {packages.map((item, index) => {
            return (
              <div
                key={`package-card-${index}`}
                className="gradient-bg flex flex-col items-start py-12 px-6 justify-center gap-10 h-[415px] w-[410px]"
              >
                {item.icon}
                <BaseTypography
                  label={item.title}
                  fontSizeLarge="lg:text-[28px]"
                  className=" leading-[34px] font-bold font-work-sans"
                  color="text-[#FBFAFA]"
                />
                <BaseTypography
                  label={item.description}
                  fontSizeLarge="lg:text-[18px]"
                  className=" leading-[24px] font-medium fon-montserrat"
                  color="text-[#FBFAFA]"
                />
                <div className="gradient-btn w-full py-4 flex items-center justify-center cursor-pointer px-6 font-work-sans">
                  Book A Call
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
