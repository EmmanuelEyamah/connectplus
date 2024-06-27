/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import { BaseTypography } from "./ui/Typography";
import { commonProps } from "@/types/common";
import LogoIcon from "./svg/Logo";

const SITEMAP = [
  {
    title: "Company",
    links: ["Our Vision", "Our Mission", "Careers"],
  },
  {
    title: "Services",
    links: [
      "Consultancy",
      "Product Design",
      "Product Research",
      "Web Development",
      "Mobile App Development",
    ],
  },
  {
    title: "Product",
    links: ["Our Process", "Research", "Planning", "Our Execution", "Blog"],
  },
  {
    title: "Legal",
    links: ["Terms & Condition", "Privacy Policy"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full h-full py-28 px-14 bg-[#151719]">
      <div className="w-full h-full container mx-auto flex flex-col items-start gap-5">
        <div>
          <div className="w-full mb-20">
            <img src="/assets/logo.png" alt="logo" className="" />
            <hr className="mt-9 border-t-2 border-[#FFFFFF1F]" />
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <BaseTypography
                  label={title}
                  fontSizeLarge="lg:text-[16px]"
                  className=" font-semibold leading-normal uppercase mb-5"
                  color="text-[#fff]"
                />
                <ul className="flex flex-col gap-4">
                  {links.map((link, key) => (
                    <BaseTypography
                      key={key}
                      label={link}
                      fontSizeLarge="lg:text-[14px]"
                      className=" font-medium leading-normal"
                      color="text-[#FBFAFAB2]"
                    />
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full">
              <BaseTypography
                label="We Would Love To Hear From You"
                fontSizeLarge="lg:text-[16px]"
                className=" font-semibold leading-normal uppercase mb-5"
                color="text-[#fff]"
              />
              <BaseTypography
                label="Book a call and tell us all about your ideas."
                fontSizeLarge="lg:text-[14px]"
                className=" font-medium leading-normal"
                color="text-[#FBFAFAB2]"
              />
              <div className="w-full flex gap-2 mt-7">
                <div className="w-[150px]">
                  <Input
                    crossOrigin={undefined}
                    className="w-[150px] rounded-3xl bg-white placeholder:text-[#636262] placeholder:opacity-100"
                    labelProps={{
                      className: "hidden",
                    }}
                    placeholder="Email Address"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </div>
                <Button
                  size="sm"
                  className="bg-[#0A52F6] rounded-3xl"
                  {...commonProps}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between mt-40">
            <BaseTypography
              label="All Rights Reserved."
              fontSizeLarge="lg:text-[56px]"
              className=" font-medium"
              color="text-[#fff]"
            />
            <Typography
              className="text-white font-medium lg:text-[56px]"
              {...commonProps}
            >
              &copy; {currentYear}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
