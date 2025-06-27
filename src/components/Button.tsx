import React from 'react'

type ButtonProps = {
  name?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  [key: string]: any;
};

export default function Button({
    name = "Submit",
    type = "button",
    className = "w-full bg-scheer-primary text-white py-3 px-6 rounded-lg hover:bg-green-700 transition",
    onClick,
    disabled = false,
    ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} bg-scheer-primary text-white`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {name}
    </button>
  )
}
