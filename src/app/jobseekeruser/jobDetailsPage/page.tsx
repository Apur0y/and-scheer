import React from 'react'
import companies from '@/data/companies.json'
import RecentJobCard from '@/app/alloveruser/recentJobs/RecentJobCard'
import JobSeekerNavbar from '../jobSeekerHome/Navbar'
import Container from '@/components/Container'

export default function JobDetailspage() {
    console.log(companies)
    return (
        <div>


            <JobSeekerNavbar />
            <Container>
                <div className='space-y-6 mt-12'>
                    {
                        companies.map(company => <RecentJobCard key={company.name} job={company} />)
                    }
                </div>

            </Container>



        </div>
    )
}
