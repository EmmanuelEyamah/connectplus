import React from "react";
import { BaseTypography } from "../components/ui/Typography";
import AccordionComponent from "../components/ui/Accordian";

const items = [
  {
    id: 1,
    title: "What services does your product development agency offer?",
    content:
      "In the ever-evolving landscape of technology and business, informed decisions are crucial. Our service provides you with expert guidance and strategic insights to navigate challenges and seize opportunities.",
  },
  {
    id: 2,
    title: "How do you handle intellectual property and confidentiality?",
    content:
      "We take intellectual property and confidentiality very seriously. All client information and project details are protected under strict non-disclosure agreements (NDAs). We ensure that your proprietary information remains secure and confidential throughout our collaboration.",
  },
  {
    id: 3,
    title: "What services does your product development agency offer?",
    content: "Content for Tab 3",
  },
  {
    id: 4,
    title: "What is your typical project timeline?",
    content: "Content for Tab 4",
  },
  {
    id: 5,
    title: " How do you ensure the quality of the products you develop?",
    content: "Content for Tab 4",
  },
];

const Faq = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex flex-col items-center gap-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <BaseTypography
            label="FAQ"
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[24px] font-semibold font-montserrat font-small-caps"
            color="text-[#4D4B4B]"
          />
          <BaseTypography
            label="Frequently Asked Questions"
            fontSizeLarge="lg:text-[48px]"
            className=" leading-normal font-bold font-work-sans"
            color="text-[#201E1E]"
          />
          <BaseTypography
            label="Here, we've compiled answers to common questions about our services, process, and what sets us apart."
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[32px] font-normal font-montserrat text-center w-[900px]"
            color="text-[#201E1EE6]"
          />
        </div>

        <div className="mb-[100px] w-[1050px] px-12">
          <AccordionComponent items={items} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
