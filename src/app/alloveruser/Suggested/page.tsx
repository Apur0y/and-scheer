import Container from '@/components/Container'
import ComponentHeader from '@/page-components/ComponentHeader'
import React from 'react'
import CourseSection from './CourseSection'

export default function SuggestedCourses() {
  return (
    <div>
        <Container>
             <div className='space-y-12'>
                <ComponentHeader 
                title='Suggested Courses'
                description="Enhance Your Skills with Our Paernaer Courses. Learn , Grow, Succed."
                ></ComponentHeader>
            
             <CourseSection></CourseSection>
              </div>
        </Container>
    </div>
  )
}
