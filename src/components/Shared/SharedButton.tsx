"use client";

type SharedButtonProps = {
  text?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  className?: string;
};

const SharedButton: React.FC<SharedButtonProps> = ({
  text = "Next",
  Icon,
  onClick,
  bgColor = "#28C76F",
  className,
}) => {
  return (
    <button
      className={`w-full px-4 py-4 rounded flex items-center justify-center text-white bg-[${bgColor}] hover:bg-green-600 gap-2 ${className}`}
      onClick={onClick}
    >
      {text}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default SharedButton;
