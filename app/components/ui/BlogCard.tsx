"use client";

/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { BaseTypography } from "./Typography";
import { BlogPost } from "@/types/types";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col gap-6 items-start lg:w-[390px] w-full">
      <div className="relative lg:w-[215px] lg:h-[24px] mb-7 w-full h-full">
        {(blog.new || blog.trending) && (
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center py-2 px-3 gap-3 rounded-[8px] bg-[#0A52F6]">
            {blog.new && (
              <>
                <div className="w-8 h-8">
                  <img
                    src="/assets/fire.gif"
                    alt="fire icon"
                    className="w-full h-full"
                  />
                </div>
                <BaseTypography
                  label="#freshoffthepress"
                  fontSizeLarge="lg:text-[18px]"
                  className="font-montserrat font-medium leading-[24px] text-[#FBFAFA]"
                />
              </>
            )}
            {!blog.new && blog.trending && (
              <BaseTypography
                label="Trending"
                fontSizeLarge="lg:text-[18px]"
                className="font-montserrat font-medium leading-[24px] text-[#FBFAFA]"
              />
            )}
          </div>
        )}
      </div>
      <div className="lg:h-[316px] lg:w-[360px] sm:h-[316px] md:w-[360px] w-full h-[316px]">
        <img
          src={blog.image[0]}
          alt="blog thumbnail"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="lg:w-[360px] w-full flex justify-between items-start">
        <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#201E1EE6]">
          {blog.date}
        </h4>
        <h4 className="text-[14px] font-medium leading-normal font-montserrat text-[#0A52F6]">
          By {blog.author}
        </h4>
      </div>
      <BaseTypography
        label={blog.title}
        fontSizeLarge="lg:text-[22px]"
        className=" leading-normal font-semibold font-work-sans lg:w-[360px] w-full"
        color="text-[#201E1EE6]"
      />
      <BaseTypography
        label={blog.short_desc}
        fontSizeLarge="lg:text-[18px]"
        className=" leading-[24px] font-medium font-montserrat lg:w-[360px] w-full"
        color="text-[#201E1EE6]"
      />
    </div>
  );
};

export default BlogCard;
