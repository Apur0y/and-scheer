'use client'
import Container from '@/components/Container'
import InfoSection from '@/page-components/TwoCloumn'
import React from 'react'

export default function TopTalent() {
    return (
        <div className='bg-[#F8F8F8]'>
            <Container>
                <div>
                    <InfoSection
                        imageUrl="/talent.jpg"
                        title="Looking for"
                        title2={<>Top Talent?</>}
                        description="With AI-powered tools, we help you find the right job faster and easier. Get matched with top roles based on your skills and goals. Take control of your career path today."
                        buttonText="Post a Job "
                        onButtonClick={() => alert("Button clicked!")}
                        className='md:flex-row'
                    ></InfoSection>
                </div>
            </Container>


        </div>
    )
}
