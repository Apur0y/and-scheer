import React from 'react'

interface Job {
  icons?: string;
  position: string;
  name: string;
  location: string;
  salary: string | number;
}

interface RecentJobCardProps {
  job: Job;
}

export default function RecentJobCard({ job }: RecentJobCardProps) {
  return (
    <div className=' max-w-md border border-gray-100 rounded-lg shadow-md p-3 bg-white '>
        <div className='flex'>
            <img src={job.icons ||""} alt="" className='h-8 w-8 rounded-full bg-sky-800'/>
            <h1 className='text-md xl:text-xl font-semibold'>{job.name}</h1>
        </div>
        <h2 className='text-sm   xl:text-lg  font-semibold'>{job.position}</h2>
        <p className='text-gray-500 text-xs xl:text-base'>{job.location}</p>

    <hr className="xl:my-3 my-2 border-t border-gray-200" />

        <div className='flex items-center justify-between'>
            <h1 className='text-xs xl:text-base'><span className='text-md xl:text-xl font-semibold'>{job.salary}</span>/Month</h1>
            <button className='xl:px-3 px-2 py-2 main-bg rounded xl:text-base  text-xs text-white cursor-pointer'>Apply Now</button>
        </div>

    </div>
  )
}
