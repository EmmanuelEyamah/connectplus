/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Input, Typography } from "@material-tailwind/react";
import { BaseTypography } from "./ui/Typography";
import { commonProps } from "@/types/common";
import LogoIcon from "./svg/Logo";
import Link from "next/link";

const SITEMAP = [
  {
    title: "Company",
    links: [
      { label: "Our Vision", link: "ourVision" },
      { label: "Our Mission", link: "ourMission" },
      { label: "Careers", link: "careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consultancy", link: "consultancy" },
      { label: "Product Design", link: "productDesign" },
      { label: "Product Research", link: "productResearch" },
      { label: "Web Development", link: "webDevelopment" },
      { label: "Mobile App Development", link: "mobileDevelopment" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Our Process", link: "ourProcess" },
      { label: "Research", link: "research" },
      { label: "Planning", link: "planning" },
      { label: "Our Execution", link: "ourExecution" },
      { label: "Blog", link: "blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Condition", link: "terms" },
      { label: "Privacy Policy", link: "privacy" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full h-full py-28 px-14 bg-[#151719] z-10">
      <div className="w-full h-full container mx-auto flex flex-col items-start gap-5">
        <div>
          <div className="w-full mb-20">
            <img src="/assets/logo.png" alt="logo" className="" />
            <hr className="mt-9 border-t-2 border-[#FFFFFF1F]" />
          </div>
          <div className="grid w-full gap-5 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <BaseTypography
                  label={title}
                  fontSizeLarge="lg:text-[16px]"
                  className=" font-semibold leading-normal uppercase mb-5"
                  color="text-[#fff]"
                />
                <ul className="flex flex-col gap-4">
                  {links.map(({ link, label }, key) => (
                    <Link key={key} href={link}>
                      <BaseTypography
                        label={label}
                        fontSizeLarge="lg:text-[14px]"
                        className=" font-medium leading-normal"
                        color="text-[#FBFAFAB2]"
                      />
                    </Link>
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
              <div className="w-full flex flex-col gap-3 mt-7">
                <div className="w-full">
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
                  className="bg-[#0A52F6] rounded-xl w-1/2"
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
