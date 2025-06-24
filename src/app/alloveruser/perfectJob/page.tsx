'use client'
import Container from '@/components/Container'
import InfoSection from '@/page-components/TwoCloumn'
import React from 'react'

export default function PerfectJob() {
    return (
        <div >
            <Container>
                <div>
                    <InfoSection
                        imageUrl="/perfect.jpg"
                        title="Ready to"
                        title2={<>Find Your <br /> Perfect Job?</> }
                        description="With AI-powered tools, we help you find the right job faster and easier. Get matched with top roles based on your skills and goals. Take control of your career path today."
                        buttonText="Create Your Profile"
                        onButtonClick={() => alert("Button clicked!")}
                        className='md:flex-row-reverse'
                    ></InfoSection>
                </div>
            </Container>
        </div>
    )
}
