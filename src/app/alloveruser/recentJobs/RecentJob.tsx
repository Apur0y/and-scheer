'use client'
import React from 'react'
// import RecentJobCard from './RecentJobCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import RecentJobCard from './RecentJobCard';

interface JobTitle{
    title:string
}

export default function RecentJob({title}:JobTitle) {

    const jobs = [
        {
            icnos: "/company1.png",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: " $4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: " $4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$4500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$4500",

        },

    ]

    console.log(title)

    return (
        <div className='bg-[#F8F8F8] '>
            
            <div className='bg-[#F8F8F8] ml-0  2xl:ml-44'>
                <div className=' py-15  px-11 md:px-15'>
                    <h1 className='text-2xl md:text-5xl font-semibold mb-4'>{title || "Recent Job"}   </h1>


                    <div className="relative">
                        {/* Custom arrows */}
                        <div className="swiper-button-prev-custom custom-arrow left-[-50px]" />
                        <div className="swiper-button-next-custom custom-arrow md:right-[-50px] right-[-40px]" />

                        <Swiper
                            spaceBetween={30}
                            freeMode={true}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 2.5 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 3.5 },
                            }}
                        >
                            {jobs.map((job, index) => (
                                <SwiperSlide key={index} className='pb-2'>
                                    <RecentJobCard job={job} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                </div>
            </div>
        </div>


    )
}
