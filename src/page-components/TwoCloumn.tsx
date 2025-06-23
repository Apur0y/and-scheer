import {  BsArrowRight } from "react-icons/bs";

interface InfoSectionProps {
  imageUrl: string;
  title: string;
  title2: string | React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function InfoSection({
  imageUrl,
  className = "",
  title,
  title2,
  description,
  buttonText,
  onButtonClick,
}: InfoSectionProps) {
  return (
    <div className={`flex flex-col  items-center gap-14 md:px-6 py-12 max-w-6xl mx-auto ${className}`}>
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-[689px] rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 space-y-12">
        <div className="space-y-4 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">{title} <span className="text-green-600">{title2}</span></h2>

          <p className="text-gray-600">{description}</p>
        </div>

        <button
          onClick={onButtonClick}
          className="px-6 py-3 bg-neutral-800 text-white font-semibold rounded hover:bg-neutral-900 transition flex"
        >
          {buttonText}<BsArrowRight className='my-auto ml-2'> </BsArrowRight>
        </button>
      </div>
    </div>
  );
}
