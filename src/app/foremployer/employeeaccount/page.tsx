// import Button from '@/components/Button'
// import Container from '@/components/Container'
// import Image from 'next/image'
// import React from 'react'

// function EmployeeAccount() {
//     return (
//             <Container>
//                 <div className='flex justify-center items-center gap-6'>
//                     <div className='w-[578px]'>
//                         <Image src="/account.jpg" width={578} height={499} alt='Employee image' className=' rounded-xl'/>
//                     </div>
//                     <div className='space-y-4'>
//                         <h1 className='text-[#333333] text-4xl font-bold leading-[124%]'>Create Your <br/> Employee Account</h1>
//                         <p className='text-[#777777] text-lg leading-[160%]'>Fllow these simple steps to set up your company profile and find the perfect <br/> candidate for your team</p>
//                         <Button name="Start Now" className='w-[216px] h-[56px] rounded-lg'/>
//                     </div>
//                 </div>
//             </Container>
//     )
// }

// export default EmployeeAccount

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResumeCreate() {
  return (
    <Container>
      <div className="  flex justify-center items-center min-h-screen flex-col md:flex-row md:space-x-4 md:mx-3">
        <div className="flex items-center   ">
          <Image
            src="/account.jpg"
            alt="Sample Resume"
            width={578}
            height={499}
            className="rounded-2xl "
          />
        </div>

        <div className="text-left flex flex-col  justify-between mt-6 md:mt-0 text-primary-dark">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold  mb-4 leading-[1.24]">
            <span className="">Create Your</span> <br />
            Employee Account
          </h1>
          <p className="text-gray-400 text-sm mb-4 md:mb-12 leading-[1.6]">
            Follow these simple steps to set up your company profile and find
            the perfect <br /> candidate for your team.
          </p>
          <Link href={"/jobseekeruser/personalInformation"}>
            <button className="px-18 py-4 bg-[#28C76F] text-[#FCFCFC] font-semibold rounded-lg hover:bg-green-700">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
