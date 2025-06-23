"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SharedButton from "./primaryButton";

interface ButtonWrapperProps {
  text?: string;
  action?: keyof typeof actionMap;
  bgColor?: string;
  className?: string;
  icon?: keyof typeof iconMap;
}

const iconMap = { "arrow-right": ArrowRightIcon };
const actionMap = { log: () => console.log("Button clicked!") };

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  text = "Next",
  action,
  bgColor = "#28C76F",
  className = "",
  icon = "arrow-right",
}) => {
  const IconComponent = iconMap[icon] || null;
  const handleClick = action ? actionMap[action] || (() => {}) : () => {};

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
