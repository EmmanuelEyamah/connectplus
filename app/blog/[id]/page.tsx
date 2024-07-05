/* eslint-disable @next/next/no-img-element */
"use client";
import BlogCard from "@/app/components/ui/BlogCard";
import { BaseTypography } from "@/app/components/ui/Typography";
import { blogs } from "@/dummyData/db";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SingleBlog = () => {
  const params = useParams();
  const { id } = params;

  const blog = blogs.find((post) => post._id === id);

  const topBlog = blogs.slice(0, 3);

  return (
<div className="w-full h-full py-10 px-5 lg:py-20 lg:px-24 bg-white">
  <div className="w-full h-full container mx-auto flex flex-col items-start gap-8 lg:gap-16">
    {/* Blog Title */}
    <div className="flex flex-col items-start gap-4">
      <BaseTypography
        label={blog?.title}
        fontSizeLarge="text-2xl lg:text-4xl"
        className="leading-normal font-bold font-work-sans"
        color="text-[#201E1E]"
      />
      <BaseTypography
        label={blog?.date}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-normal font-medium font-montserrat"
        color="text-[#201E1E]"
      />
      <BaseTypography
        label={blog?.author}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-normal font-medium font-montserrat"
        color="text-[#201E1E]"
      />
    </div>

    {/* Blog Image */}
    <div className="w-full h-64 lg:w-[1200px] lg:h-[480px]">
      <img
        src={blog?.image[1]}
        alt="case-studies img"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Blog Description */}
    <div className="flex flex-col items-start gap-8">
      <BaseTypography
        label={blog?.short_desc}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
      <BaseTypography
        label={blog?.description}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
      <BaseTypography
        label={blog?.description}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
      <BaseTypography
        label={blog?.description}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
    </div>

    {/* Blog Image */}
    <div className="w-full h-64 lg:w-[1200px] lg:h-[480px]">
      <img
        src={blog?.image[1]}
        alt="case-studies img"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Blog Description */}
    <div className="flex flex-col items-start gap-8">
      <BaseTypography
        label={blog?.description}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
      <BaseTypography
        label={blog?.description}
        fontSizeLarge="text-base lg:text-lg"
        className="leading-7 lg:leading-9 font-normal font-montserrat"
        color="text-[#201E1EE6]"
      />
    </div>

    {/* Top Blog */}
    <div className="flex flex-col gap-6">
      <BaseTypography
        label="Top Blogs"
        fontSizeLarge="text-2xl lg:text-4xl"
        className="leading-normal font-bold font-work-sans"
        color="text-[#201E1E]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 w-full">
        {topBlog.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog._id}`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default SingleBlog;
