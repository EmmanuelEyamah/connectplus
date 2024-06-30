/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Hero from "./Hero";
import Post from "./Post";
import Packages from "../components/ui/Packages";

const Blog = () => {
  return (
    <main>
      <Hero />
      <Post />
      <Packages />
    </main>
  );
};

export default Blog;
