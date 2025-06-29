import React from 'react'
import JobSeekerNavbar from '../jobSeekerHome/Navbar'
import AllCategory from './searchCategory/page'

import { FilterSidebar } from './filterSidebar/page'
import JobList from './jobList/page'
import SerachRightSideBar from './rightSearchBar/page'

export default function SearchJobPage() {
    return (
        <div>
            <JobSeekerNavbar></JobSeekerNavbar>
            <AllCategory />
            <div className='max-w-[1420px]  mx-auto'>
                {/* <JobSearchPage /> */}

            </div>
            <div className=" max-w-[1420px] flex mx-auto ">
                <FilterSidebar />
                <JobList />
                <SerachRightSideBar />
            </div>


        </div>
    )
}
