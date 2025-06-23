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
    className = "w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition",
    onClick,
    disabled = false,
    ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} bg-green-600 text-white`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {name}
    </button>
  )
}
