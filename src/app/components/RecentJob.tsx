import React from 'react'
import RecentJobCard from './RecentJobCard'

export default function RecentJob() {

    const jobs = [{
        icnos:"",
        name:"BLUE Technology",
        position:"Full Stack Developer",
        location:"Dhaka, Bangladesh",
        salary:"$1000 - $1500",
      
    }]

  return (
    <div>
        <h1>Recent Job</h1>

        <div>
            {
                jobs.map((job, index) =><RecentJobCard key={index} job={job}></RecentJobCard>)
            }
        </div>
    </div>
  )
}
