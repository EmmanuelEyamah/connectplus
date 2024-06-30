import { BaseTypography } from "../components/ui/Typography";
import OurProcess from "../components/svg/OurProcess";

const Process = () => {
  return (
    <div className="w-full h-full py-20 px-24 bg-[#011F56]">
      <div className="w-full h-full container mx-auto flex flex-col items-start gap-5">
        <BaseTypography
          label="Our Process"
          fontSizeLarge="lg:text-[40px]"
          className=" leading-[48px] font-bold"
          color="text-[#fff]"
        />

        <div className="flex relative -left-32 w-full mt-24">
          <OurProcess />
        </div>
      </div>
    </div>
  );
};

export default Process;
