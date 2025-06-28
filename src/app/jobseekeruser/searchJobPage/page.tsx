import React from 'react'
import JobSeekerNavbar from '../jobSeekerHome/Navbar'
import AllCategory from './searchCategory/page'
import JobSearchPage from './mainSearchSection/page'

export default function SearchJobPage() {
    return (
        <div>
            <JobSeekerNavbar></JobSeekerNavbar>
            <AllCategory />
            <div className='max-w-[1420px]  mx-auto'>
                <JobSearchPage />
            </div>


        </div>
    )
}
