'use client'

import dynamic from 'next/dynamic'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from 'react'

// Dynamically import Slider so it's client-only
const Slider = dynamic(() => import('react-slick'), { ssr: false })

export default function RecentSwiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div style={{ width: '80%', margin: 'auto', paddingTop: '40px' }}>
      <Slider {...settings}>
        <div><h3 style={slideStyle}>Slide 1</h3></div>
        <div><h3 style={slideStyle}>Slide 2</h3></div>
        <div><h3 style={slideStyle}>Slide 3</h3></div>
        <div><h3 style={slideStyle}>Slide 4</h3></div>
      </Slider>
    </div>
  )
}

const slideStyle: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  padding: '60px',
  textAlign: 'center',
  borderRadius: '8px',
}
