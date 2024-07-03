/* eslint-disable @next/next/no-img-element */
"use client";
import "./style.css";

import React from "react";

const Project = () => {
  return (
    <div className="w-full innerUI h-full p-[60px] bg-[#e7e7e7]">
      {/* -innerUiSome */}
      <div className="InnerUiSomer bg-[#1C1E20] container mx-auto w-[1250px] h-[700px]">
        {/* inner top */}
        <div className="innerTop flex">
          <h3 className="text-[#FBFAFA] innerHead text-[28px] font-normal">
            Some UI/UX projects handled by the team..
          </h3>
        </div>
        {/* end inner top */}
        {/* inner_box */}
        <hr className="mt-7 border-t-2 border-[#FFFFFF1F] mb-11" />
        <div className="innerbox flex">
          {/* inner left */}
          <div className="innerLeft flex flex-col items-start gap-7">
            {/* card1 */}
            <a hrefLang="#" className="cardContent">
              <div className="flex justify-center UiSomeCard w-[370px] h-[96px] items-center">
                Oja mi- Retail App Design
              </div>
            </a>
            {/* card1 end */}
            {/* card2 */}
            <a hrefLang="#" className="cardContent">
              <div className="flex justify-center UiSomeCard w-[370px] h-[96px] items-center">
                Oja mi- Retail App Design
              </div>
            </a>
            {/* card2 end */}
            {/* card3 */}
            <a hrefLang="#" className="cardContent">
              <div className="flex justify-center UiSomeCard w-[370px] h-[96px] items-center">
                Oja mi- Retail App Design
              </div>
            </a>
            {/* card3 end */}
            {/* card4 */}
            <a hrefLang="#" className="cardContent">
              <div className="flex justify-center UiSomeCard w-[370px] h-[96px] items-center">
                Oja mi- Retail App Design
              </div>
            </a>
            {/* card4 end */}
          </div>
          {/* end inner left */}
          {/* inner right */}
          <div className="innerRight flex flex-col items-center justify-center ml-auto mt-[-50px]">
            <img
              src="/assets/ui_image.png"
              className="centralizedImage"
              alt=""
            />
            <p className="flex flex-col items-center text-center pt-[20px]">
              <a
                href="#"
                className="text-[#FBFAFA] text-[18px] center-head font-normal"
              >
                Oja mi- Retail App Design
              </a>
            </p>
            {/* content */}
            <p className="text-[#FBFAFA] content-body text-[16px]">
              Oja mi- Retail App Design. Lorem ipsum dolor sit amet consectetur.
              In faucibus nisl etiam mauris diam venenatis amet placerat id.
              Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam
              mauris diam venenatis amet placerat id.{" "}
            </p>
          </div>
          {/* inner right ends */}
        </div>
        {/* end inner_box */}
      </div>
      {/* end innerUiSome */}
    </div>
  );
};

export default Project;
