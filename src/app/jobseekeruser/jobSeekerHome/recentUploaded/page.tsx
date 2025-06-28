import Container from '@/components/Container'
import React from 'react'
import RecentUploadedPost from './RecentUploadedPost'

export default function RecentUpload() {
    return (
        <div>
            <Container>
                
                <h1 className='text-2xl md:text-5xl font-semibold text-center mb-12'>Recent Uploaded Jobs</h1>
                <RecentUploadedPost/>

 
            </Container>

        </div>
    )
}
