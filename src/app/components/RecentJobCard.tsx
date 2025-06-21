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
    <div className=' max-w-md border border-gray-200 rounded shadow-md p-3 '>
        <div className='flex'>
            <img src={job.icons ||""} alt="" className='h-8 w-8 rounded-full bg-sky-800'/>
            <h1 className='text-xl font-semibold'>{job.position}</h1>
        </div>
        <h2 className='text-md font-semibold'>{job.name}</h2>
        <p>{job.location}</p>

        <div className='flex items-center justify-between'>
            <h1>{job.salary}/month</h1>
            <button className='px-3 py-2 bg-green-600 rounded text-white'>Apply Now</button>
        </div>

    </div>
  )
}
