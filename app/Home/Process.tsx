import { BaseTypography } from "../components/ui/Typography";
import OurProcess from "../components/svg/OurProcess";
import SmOurProcess from "../components/svg/SmOurProcess";

const Process = () => {
  return (
    <div className="w-full h-full px-12 py-10 lg:py-20 lg:px-24 bg-[#011F56]">
      <div className="w-full h-full container mx-auto flex flex-col items-start gap-5">
        <BaseTypography
          label="Our Process"
          fontSizeLarge="lg:text-[40px]"
          className=" leading-[48px] font-bold"
          color="text-[#fff]"
        />

        <div className="hidden lg:flex relative -left-32 w-full mt-24">
          <OurProcess />
        </div>
        <div className="flex lg:hidden relative left-0 w-full mt-24">
          <SmOurProcess />
        </div>
      </div>
    </div>
  );
};

export default Process;
