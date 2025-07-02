import React from 'react'
import ProfilePersonalDetails from './personalDetails/page'
import ProfileWorkExperience from './profileWorkExperience/page'
import ProfileSkills from './ProfileSkills'
import ProfileEducationAndCertificate from './ProfileEducationAndCertificate'
import ProfileContactInformation from './ProfileContactInformation'
import Container from '@/components/Container'

export default function ProfileArrange() {
    return (
        <div>
            <Container>
                <ProfilePersonalDetails />
                <ProfileWorkExperience />
                <ProfileSkills />
                <ProfileEducationAndCertificate />
                <ProfileContactInformation />

            </Container>

        </div>
    )
}
