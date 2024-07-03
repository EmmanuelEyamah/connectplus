import React, { FC } from "react";
import { BaseTypography } from "./Typography";
import Link from "next/link";
import { ArrowUpOutlined } from "@ant-design/icons";
import CardArrow from "../svg/cardArrow";

export interface CardProps {
  backgroundColor?: string;
  height?: string;
  linkHref?: string;
  service?: string;
  description?: string;
  icon?: React.ReactNode;
  PrimaryColor?: boolean;
}
export const ServiceCard: FC<CardProps> = ({
  backgroundColor = "bg-black",
  height = "h-full",
  linkHref = "/",
  service,
  description,
  icon,
  PrimaryColor = false,
}) => {
  return (
    <div
      className={`w-[370px] ${height} flex flex-col justify-end px-4 py-9 gap-4 ${backgroundColor} rounded-2xl`}
    >
      {icon}
      <BaseTypography
        label={service}
        fontSizeLarge="lg:[20px]"
        className=" font-work-sans font-bold leading-6"
        color={`${PrimaryColor ? "text-[#FBFAFA]" : "text-[#201E1EE5]"}`}
      />
      <BaseTypography
        label={description}
        fontSizeLarge="lg:[13px]"
        className=" font-Montserrat font-normal leading-6"
        color={`${PrimaryColor ? "text-[#FBFAFACC]" : "text-[#201E1EE5]"}`}
      />
      <Link
        href={linkHref}
        className={`flex gap-3 underline ${
          PrimaryColor ? "text-[#FBFAFACC]" : "text-[#201E1EE5]"
        }`}
      >
        <BaseTypography
          label="Learn More"
          fontSizeLarge="lg:text-[14px]"
          className=" font-Montserrat font-semibold leading-4"
          color={`${PrimaryColor ? "text-[#FBFAFACC]" : "text-[#201E1EE5]"}`}
        />
        <ArrowUpOutlined
          style={{
            transform: "rotate(45deg)",
            color: PrimaryColor ? "#FBFAFACC" : "#000",
          }}
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
