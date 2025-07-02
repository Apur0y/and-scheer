import React from 'react'

import JobSeekerNavbar from '../jobSeekerHome/Navbar'
import MyResumeProfile from './MyProfilePage'
import ProfileArrange from './ProfileArrange'


export default function page() {
  return (
    <div>
      <JobSeekerNavbar/>
        {/* <MyResumeProfile/>
         */}
         <ProfileArrange/>
    </div>
  )
}
