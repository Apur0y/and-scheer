import React from 'react'

export default function ComponentHeader({
  title = "Component Header",
  description = "This is a component header" as string | React.ReactNode,
  className = "text-3xl md:text-5xl font-bold ",

}) {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
  
      <h1 className={className}>{title}</h1>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      {/* {children && <div className="mt-4">{children}</div>} */}
    </div>
  )
}
