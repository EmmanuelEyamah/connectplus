"use client";

import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { commonProps } from "@/types/common";

interface IconProps {
  id: number;
  open: number;
}

const Icon: FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
export interface AccordionProps {
  items: { id: number; title: string; content: string }[];
}

export const AccordionComponent: FC<AccordionProps> = ({ items }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <div>
      {items.map((item, index) => {
        return (
          <Accordion
            key={`accordion-${index}`}
            open={open === item.id}
            icon={<Icon id={item.id} open={open} />}
            {...commonProps}
            className="w-full"
          >
            <AccordionHeader
              onClick={() => handleOpen(item.id)}
              {...commonProps}
              className="text-[#201E1EE6] font-work-sans font-semibold leading-6 text-[20px] bg-[#EBEBEB66] px-3 py-6 mb-8"
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="text-[#201E1EE6] font-montserrat font-medium leading-6 text-[18px]">
              {item.content}
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
