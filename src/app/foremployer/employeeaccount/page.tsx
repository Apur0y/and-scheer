import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

function EmployeeAccount() {
    return (
        <div>
            <Container>
                <div className='flex justify-center items-center gap-6'>
                    <div className='w-[578px]'>
                        <Image src="/employeeimg.jpg" width={150} height={150} alt='Employee image' className='w-full rounded-xl'/>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-[#333333] text-4xl font-bold leading-[124%]'>Create Your <br/> Employee Account</h1>
                        <p className='text-[#777777] '>Fllow these simple steps to set up your company profile and find the perfect <br/> candidate for your team</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default EmployeeAccount