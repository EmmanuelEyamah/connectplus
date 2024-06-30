/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { BaseTypography } from "../components/ui/Typography";
import BlogCard from "../components/ui/BlogCard";
import { blogs } from "@/dummyData/db";
import Link from "next/link";

const tags = ["All", "Web3", "SaaS", "Education", "HealthTech", "eCommerce"];

const Post = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((blog) => blog.tag === selectedTag);

  return (
    <div className="w-full h-full bg-[#FFF] py-20 px-24">
      <div className="container mx-auto flex flex-col items-start gap-8">
        <BaseTypography
          label="Tech Posts"
          fontSizeLarge="lg:text-[40px]"
          className=" font-work-sans font-bold leading-[48px]"
          color="text-[#000]"
        />
        <div className="flex gap-4 w-full">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`p-1 font-work-sans text-[#4D4B4B] text-[20px] font-medium leading-[32px] capitalize cursor-pointer ${
                selectedTag === tag
                  ? "text-black border-b-2 border-[#0A52F6]"
                  : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 w-full mt-[45px]">
          {filteredBlogs.map((blog) => (
            <Link key={blog._id} href={`/blog/${blog._id}`}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
