import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import CategoryCard from '../../jobSeekerHome/TopCategory/CategoryCard'


export default function AllCategory() {

    const categories = [
        {
            icon: "/Frame.png",
            name: "Remote",

        },
        {
            icon: "/Frame 1.png",
            name: "MNC",

        },
        {
            icon: "/Frame 2.png",
            name: "Fresher",

        },
        {
            icon: "/Frame 3.png",
            name: "Startup",

        },
        {
            icon: "/Frame.png",
            name: "Anlytics ",

        },
        {
            icon: "/Frame.png",
            name: "Internship",

        },
        {
            icon: "/Frame.png",
            name: "Banking",

        },

    ]


    return (
        <div className='flex gap-8 justify-center flex-wrap '>
            {/* {
                categories.map(category => <CategoryCard key={category.name} category={category} />)
            } */}

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
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className='pb-2'>
                        <CategoryCard key={category.name} category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
