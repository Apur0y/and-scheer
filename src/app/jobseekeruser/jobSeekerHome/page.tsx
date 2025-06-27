import React from 'react'
import JobSeekerNavbar from './Navbar'
import SeekerBanner from './seekerBanner/page'
import UserRecentJob from '@/app/alloveruser/recentJobs/page'

export default function JobSeekerHomePage() {
  return (
    <div>
        <JobSeekerNavbar></JobSeekerNavbar>
        <SeekerBanner/>
        <UserRecentJob></UserRecentJob>

    </div>
  )
}
