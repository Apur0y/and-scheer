
import Image from "next/image";
import React from "react";
import SearchField from "./SearchField";
import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
  return (
    
    <div className=" flex  md:justify-around px-5   bg-gray-100">

      {/* left div site */}
      <div className="flex flex-col gap-8 z-10 justify-center text-left">
        <div className="flex  flex-col gap-5">
          <h1 className="text-5xl md:text-7xl text-left font-medium md:font-bold ">
            Your <span className="text-green-600">AI-Powered <br /> Career</span> Platform
          </h1>
          <p className="text-gray-800 ">
            Discover your next oppertunity with personalized AI job matchong. Apply with <br /> a single click explore new carrer paths today.
          </p>

        </div>
        <SearchField></SearchField>


         <div className="flex gap-3 mt-4">
          <button className="border px-3 rounded py-2">For Employers</button>
          <button className="text-white font-semibold px-3 rounded py-2 flex gap-1 bg-green-600 ">Create AI Resume <BsArrowRight className="my-auto "></BsArrowRight></button>
         </div>
   
     
   

      </div>

      {/* right side div */}
      <div className="absolute  left-1/2 md:left-0 overflow-auto top-3/6 sm:top-1/6 md:top-1/2   md:relative">
       
        <Image src="/man.png" alt="little-girl" height={473} width={434} className="  w-[800px] md:h-full md:w-full"></Image>
      </div>
    </div>
  );
}