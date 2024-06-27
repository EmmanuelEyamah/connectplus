/* eslint-disable @next/next/no-img-element */
// src/ImageBox.tsx

import React from "react";

interface ImageBoxProps {
  imageUrl: string;
  title: string;
  name: string;
  description: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageUrl,
  title,
  name,
  description,
}) => {
  return (
    <div className="relative w-[300px] h-[390px] cursor-pointer flex-shrink-0">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-[#0A52F680] bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-[22px] font-bold leading-[25px] text-white">
            {title}
          </h3>
          <h3 className="text-[14px] font-semibold leading-[16px] text-[#FBFAFAB2]">
            {name}
          </h3>
          <p className="text-[16px] font-semibold leading-[20px] text-center text-[#D2D2D2]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
