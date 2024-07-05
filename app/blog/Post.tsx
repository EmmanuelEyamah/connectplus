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
    <div className="px-5 lg:px-15 lg:py-[50px] py-28 h-full w-full">
    <div className="container mx-auto flex flex-col justify-center items-start gap-8">
      <BaseTypography
        label="Tech Posts"
        fontSizeLarge="lg:text-5xl"
        className="font-work-sans font-bold leading-12 lg:leading-14 text-black"
      />
      <div className="flex flex-wrap gap-4 w-full">
        {tags.map((tag) => (
          <div
            key={tag}
            className={`p-1 font-work-sans text-[#4D4B4B] lg:text-xl font-medium leading-8 capitalize cursor-pointer ${
              selectedTag === tag ? "text-black border-b-2 border-[#0A52F6]" : ""
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    
      <div className="flex justify-center items-center w-full mt-8 lg:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 w-full lg:w-auto">
          {filteredBlogs.map((blog) => (
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

export default Post;
