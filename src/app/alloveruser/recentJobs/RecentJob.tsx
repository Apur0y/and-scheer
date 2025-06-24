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
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import RecentJobCard from './RecentJobCard';

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
        <div className='bg-[#F8F8F8] '>
            <div className='   px-11 md:px-15'>
                <h1 className='text-2xl font-semibold my-4'>Recent Job</h1>


                <div className="relative">
                    {/* Custom arrows */}
                    <div className="swiper-button-prev-custom custom-arrow left-[-40px]" />
                    <div className="swiper-button-next-custom custom-arrow right-[-40px]" />

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
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {jobs.map((job, index) => (
                            <SwiperSlide key={index } className='py-4'>
                                <RecentJobCard job={job} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>


                {/* <div className=''>

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

            </div> */}



            </div>
        </div>

    )
}
