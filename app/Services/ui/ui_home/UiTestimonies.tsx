import React from 'react'
import ImageBox from "../../../components/ui/ImgBox";
import { BaseTypography } from "../../../components/ui/Typography";

const UiTestimonies = () => {
  return (
    <div className="w-full h-full py-28 px-24 bg-white">
      <div className="w-full h-full container mx-auto flex items-start gap-10">
        <div className="flex flex-col gap-7 lg:w-[350px]">
          <BaseTypography
            label="TESTIMONIALS"
            fontSizeLarge="lg:text-[20px]"
            className=" leading-[24px] font-semibold"
            color="text-[#4D4B4B]"
          />
          <BaseTypography
            label="What Our Clients Are Saying"
            fontSizeLarge="lg:text-[40px]"
            className=" leading-[48px] font-bold lg:w-[316px]"
            color="text-[#000]"
          />
          <BaseTypography
            label="Join happy founders from around the world who are fully satisfied with our delivery."
            fontSizeLarge="lg:text-[18px]"
            className=" leading-[29px] font-normal"
            color="text-[#201E1EE5] lg:w-[316px]"
          />
        </div>

        <div className="w-[900px] flex gap-6 items-start overflow-x-auto no-scrollbar ">
          <ImageBox
            imageUrl="/assets/testimonial.png"
            title="Super easy to work with"
            name="Mark Richards, CEO-Flipstop"
            description="“Our development service leverages cutting-edge technologie”"
          />
          <ImageBox
            imageUrl="/assets/testimonial.png"
            title="Super easy to work with"
            name="Mark Richards, CEO-Flipstop"
            description="“Our development service leverages cutting-edge technologie”"
          />
          <ImageBox
            imageUrl="/assets/testimonial.png"
            title="Super easy to work with"
            name="Mark Richards, CEO-Flipstop"
            description="“Our development service leverages cutting-edge technologie”"
          />
        </div>
      </div>
    </div>
  );
};

export default UiTestimonies;
