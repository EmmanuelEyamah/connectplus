"use client";

import { Input, Typography } from "@material-tailwind/react";
import React from "react";
import { commonProps } from "@/types/common";
import AppButton from "./Button";

const NewsLetter = () => {
  return (
    <div className="w-full h-[200px] py-20 px-24 bg-[#CDCDCD]">
      <div className="w-full h-full container mx-auto relative">
        <div className="bg-[#002B7D] flex items-center gap-10 absolute top-[-150px] rounded-[40px] py-[88px] px-24 h-[360px] w-[1200px]">
          <Typography
            {...commonProps}
            className="w-[677px] text-[40px] text-white font-bold capitalize"
          >
            The Best Talent <span className="font-normal">for your</span> next
            project
          </Typography>

          <div className="flex flex-col gap-8 items-start">
            <div className="w-[465px]">
              <Input
                crossOrigin={undefined}
                className="rounded-3xl bg-inherit placeholder:text-[#636262] placeholder:opacity-100"
                labelProps={{
                  className: "hidden",
                }}
                placeholder="Email"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <AppButton variant="default">Submit</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
