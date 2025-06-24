import ComponentHeader from '@/page-components/ComponentHeader'
import React from 'react'
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";
import Container from './Container';

export default function ChooseUs() {
  const cardData = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "10,000+ jobs Listings",
      description: <>The best jobs, all in one <br /> place.</>,


    },
    {
      icon: <FaPaintBrush className="text-3xl text-pink-500" />,
      title: "AI Mathching Engine",
      description: <>Get connected with oppertunities based on <br /> your skills and goals.</>,
    },
    {
      icon: <FaChartLine className="text-3xl text-green-500" />,
      title: "1-Click Applications",
      description: <>Apply for jobs in an instant and get <br /> noticed.</>
    },
  ]

  return (
    <div>
      <Container>
        <div className='space-y-4'>
     <ComponentHeader
          title='Why Choose Us?'
          description={<>
            We are a team of professionals who are dedicated to providing the best service possible.  Our team is made up of experts in their <br /> respective fields, and we work together to ensure that our clients receive the highest quality service.'
          </>}
        ></ComponentHeader>

        <div className="flex flex-wrap gap-6 justify-center ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full sm:w-[30%] min-w-[280px] max-w-[457px]"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
        </div>
   


      </Container>
    </div>
  )
}
