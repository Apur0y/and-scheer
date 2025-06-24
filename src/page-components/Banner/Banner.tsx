
import Image from "next/image";
import React from "react";
import SearchField from "./SearchField";
import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
  return (
    
  <div className="relative overflow-hidden w-full">
      <div className="flex py-15 md:py-28 md:justify-around px-5">
        {/* Left side */}
        <div className="flex flex-col gap-8 z-10 justify-center text-left">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl md:text-7xl text-left font-medium md:font-bold">
              Your <span className="text-green-600">AI-Powered <br /> Career</span> Platform
            </h1>
            <p className="text-gray-800">
              Discover your next opportunity with personalized AI job matching. Apply with <br />
              a single click and explore new career paths today.
            </p>
          </div>

          <SearchField />

          <div className="flex gap-3 mt-4">
            <button className="border px-3 rounded py-2">For Employers</button>
            <button className="text-white font-semibold px-3 rounded py-2 flex gap-1 bg-green-600">
              Create AI Resume <BsArrowRight className="my-auto" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:block">{/* Empty or add future content */}</div>

        {/* Positioned image */}
        <div className="absolute left-1/2 top-10 md:top-20 md:left-3/5 ">
          <Image
            src="/man.png"
            alt="AI Career"
            height={884}
            width={626} 
            className="w-[600px] md:w-[800px] object-contain shadow-white-bottom"
          />
          
        </div>
      </div>
    </div>
  );
}