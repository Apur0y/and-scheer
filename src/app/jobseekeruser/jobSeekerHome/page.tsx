import React from 'react'
import JobSeekerNavbar from './Navbar'
import SeekerBanner from './seekerBanner/page'
import RecentJob from '@/app/alloveruser/recentJobs/RecentJob'
import TopCategory from './TopCategory/page'
import RecentUpload from './recentUploaded/page'


export default function JobSeekerHomePage() {
  const title="Recommend for you"
  return (
    <div>
        <JobSeekerNavbar></JobSeekerNavbar>
        <SeekerBanner/>
        <RecentJob title={title}></RecentJob>
        <TopCategory/>
        <RecentUpload/>

    </div>
  )
}
