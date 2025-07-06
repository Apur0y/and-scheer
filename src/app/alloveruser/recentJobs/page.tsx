import React from 'react'
import RecentJob from './RecentJob'
import Container from '@/components/Container'

export default function UserRecentJob() {
  const title ="Recent Job"
  return (
    <div className='bg-[#278b34]'>
      <Container>
        <RecentJob title={title}></RecentJob>
      </Container>

    </div>
  )
}
