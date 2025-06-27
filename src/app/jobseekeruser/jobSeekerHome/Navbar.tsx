import Navbar from '@/page-components/Navbar';
import React from 'react'

export default function JobSeekerNavbar() {
    const navitem=[
    { name: "Job", href: "" },
    { name: "Company", href: "#" },
    { name: "Course", href: "#" },
   
  ];
  return (
    <div>
        <Navbar navItem={navitem} />
    </div>
  )
}
