import React from 'react'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({
    label,
    type = 'text',
    className = 'p-2 border border-[#8b8b8b]  rounded w-full',
    ...props

}, ref) 
{
    const id = React.useId();
  return (
    <div>
        {label && <label htmlFor={id} className='text-[#333333]'> {label}</label>}
        <input
        type={type}
        className={`${className} `}
        ref={ref}
        {...props}
        id={id}
        ></input>
    </div>
  )
})

export default Input;