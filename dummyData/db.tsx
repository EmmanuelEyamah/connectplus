import { BlogPost } from "@/types/types";

export const blog: BlogPost = {
  _id: "1",
  title: "Restructuring UX flow the artisanal supply-chain of rural Nigeria.",
  short_desc: "Our product design service is the cornerstone of innovation.",
  description:
    "Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id",
  author: "Okolo Enemona",
  date: "24th June, 2024",
  tag: "Web3",
  new: false,
  trending: true,
  image: "/assets/case-img.jpg",
};

const tags = [
  "Web3",
  "Fintech",
  "SaaS",
  "Education",
  "HealthTech",
  "eCommerce",
];

export const blogs: BlogPost[] = Array(6)
  .fill(blog)
  .map((post, index) => ({
    ...post,
    _id: (index + 1).toString(),
    new: [true, false, true, false, false, false][index],
    trending: [false, false, false, true, false, false][index],
    tag: tags[index],
  }));
