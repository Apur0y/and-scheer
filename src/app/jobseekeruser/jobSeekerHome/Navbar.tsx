import Navbar from '@/page-components/Navbar';
import React from 'react'

export default function JobSeekerNavbar() {
    const navitem=[
    { name: "Job", href: "" },
    { name: "Company", href: "#" },
    { name: "Course", href: "#" },
   
  ];
  return (
    <div className='sticky top-0 z-50'>
        <Navbar navItem={navitem} />
    </div>
  )
}
