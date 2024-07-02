import { BlogPost, IServices } from "@/types/types";
import {
  benefits,
  otherSkills,
  serviceDescription,
  serviceTitles,
  steps,
  uiuxSkills,
} from "./data";

export const blog: BlogPost = {
  _id: "1",
  title: "Restructuring UX flow the artisanal supply-chain of rural Nigeria.",
  short_desc: "Our product design service is the cornerstone of innovation.",
  description:
    "Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id.Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id.Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id.Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In faucibus nisl etiam mauris diam venenatis amet placerat id",
  author: "Okolo Enemona",
  date: "24th June, 2024",
  tag: "Web3",
  new: false,
  trending: true,
  image: ["/assets/case-img.jpg", "/assets/blog2.jpg"],
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

export const service: IServices = {
  _id: "1",
  title: "UI/UX Design",
  description:
    " Our UI/UX design services are dedicated to creating intuitive, engaging, and aesthetically pleasing interfaces. We focus on understanding the needs and behaviors of your users to design products that offer exceptional experiences. From wireframes to high-fidelity prototypes, our team ensures every design decision enhances usability and delight.",
  skills: [
    {
      title: "User Research",
      description:
        "Conducting comprehensive research to understand user needs and pain points.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Expertise in tools like Sketch, Figma, Adobe XD, and InVision.",
    },
    {
      title: "Interaction Design",
      description:
        "Crafting interactive elements that enhance user experience.",
    },
    {
      title: "Visual Design",
      description:
        "Creating visually appealing interfaces that align with brand identity.",
    },
    {
      title: "User Testing",
      description: "Ensuring designs are intuitive and meet user expectations.",
    },
    {
      title: "Design Strategy",
      description: "Ensure user experience aligns with business goals",
    },
  ],
  steps: [
    { step: "01", description: "Initial Consultation- Discovery Call" },
    { step: "02", description: "User research- surveys, interviews.." },
    { step: "03", description: "Wireframing - outline structure and layout" },
    { step: "04", description: "Visual Design- high- fidelity design" },
    { step: "05", description: "Prototyping - interactive tests" },
    { step: "06", description: "Usability testing" },
    { step: "07", description: "Final Designs" },
    { step: "08", description: "Post- Launch Evaluation" },
  ],
  benefits: [
    {
      title: "Increased User Satisfaction",
      description:
        "Interfaces that are easy to use and visually pleasing, leading to higher user satisfaction.",
    },
    {
      title: "Higher Engagement",
      description:
        "Designs that encourage users to interact more with your produc",
    },
    {
      title: "Improved Usability",
      description:
        "Products that users can navigate intuitively, reducing frustration and improving retention.",
    },
  ],
};

export const services: IServices[] = Array(8)
  .fill(service)
  .map((srv, index) => {
    return {
      ...srv,
      _id: (index + 1).toString(),
      title: serviceTitles[index],
      description: serviceDescription[index],
      skills: index === 0 ? uiuxSkills : otherSkills[index - 1],
      steps: steps[index],
      benefits: benefits[index],
    };
  });
