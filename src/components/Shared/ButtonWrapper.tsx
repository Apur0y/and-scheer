"use client";

import React from "react";
// Adjust path if different
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SharedButton from "./SharedButton";

interface ButtonWrapperProps {
  text?: string;
  action?: string;
  bgColor?: string;
  className?: string;
  icon?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  text = "Next",
  action,
  bgColor = "#28C76F",
  className = "",
  icon = "arrow-right",
  // type = "button",
}) => {



  const iconMap: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    "arrow-right": ArrowRightIcon,
  };


  const actionMap: { [key: string]: () => void } = {
    log: () => console.log("Button clicked!"),
    submit: () => {},
  };
  const IconComponent = iconMap[icon] || null;
  const handleClick = action ? actionMap[action] : undefined;




  return (
    <SharedButton
      text={text}
      Icon={IconComponent}
      onClick={handleClick}
      bgColor={bgColor}
      className={className}
    />
  );
};

export default ButtonWrapper;
