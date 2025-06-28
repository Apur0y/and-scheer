import React from 'react'
import RecentJob from './RecentJob'
import Container from '@/components/Container'

export default function UserRecentJob() {
  const title ="Recent Job"
  return (
    <div className='bg-[#F8F8F8]'>
      <Container>
        <RecentJob title={title}></RecentJob>
      </Container>

    </div>
  )
}
