import { FC, ReactNode } from "react";
import { Button } from "@material-tailwind/react";
import { commonProps } from "@/types/common";

export interface ButtonProps {
  variant: "primary" | "secondary" | "accent" | "default";
  children: ReactNode;
  onClick?: () => void;
}

const AppButton: FC<ButtonProps> = ({ variant, children, onClick }) => {
  let className = "";

  switch (variant) {
    case "primary":
      className = "bg-[#0A52F6] text-white rounded-md";
      break;
    case "secondary":
      className =
        "bg-transparent text-[#060A10] rounded-md border border-solid border-[#060A10]";
      break;
    case "accent":
      className =
        "bg-transparent text-[#FBFAFA] rounded-md border border-solid border-[#FBFAFA]";
      break;
    case "default":
      className = "bg-[#FCFCFC] text-[#201E1EE5] rounded-md";
      break;
  }

  return (
    <Button className={className} {...commonProps} onClick={onClick}>
      {children}
    </Button>
  );
};

export default AppButton;
