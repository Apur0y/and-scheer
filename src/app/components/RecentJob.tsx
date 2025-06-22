'use client'
import React from 'react'
import RecentJobCard from './RecentJobCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function RecentJob() {

    const jobs = [
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },
        {
            icnos: "",
            name: "BLUE Technology",
            position: "Full Stack Developer",
            location: "Dhaka, Bangladesh",
            salary: "$1000 - $1500",

        },

    ]

    return (
        <div className='w-11/12 mx-auto py-4'>
            <h1 className='text-2xl font-semibold my-4'>Recent Job</h1>

            <div className=''>
                {/* {
                    jobs.map((job, index) => <RecentJobCard key={index} job={job}></RecentJobCard>)
                } */}


                <Swiper
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {jobs.map((job, index) => (
                        <SwiperSlide key={index}>
                            <RecentJobCard job={job} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>



        </div>
    )
}
