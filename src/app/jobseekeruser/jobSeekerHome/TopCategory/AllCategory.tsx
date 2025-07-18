import React from 'react'
import CategoryCard from './CategoryCard'


export default function AllCategory() {

    const categories=[
        {
            icon:"/Frame.png",
            name:"Remote",
            
        },
        {
            icon:"/Frame 1.png",
            name:"MNC",
       
        },
        {
            icon:"/Frame 2.png",
            name:"Fresher",
           
        },
        {
            icon:"/Frame 3.png",
            name:"Startup",
               
        },
        {
            icon:"/Frame.png",
            name:"Anlytics ",
               
        },
        {
            icon:"/Frame.png",
            name:"Internship",
               
        },
        {
            icon:"/Frame.png",
            name:"Banking",
               
        },

    ]

    
  return (
    <div className='flex gap-8 justify-center flex-wrap '>
        {
            categories.map(category=><CategoryCard key={category.name} category={category} />)
        }
    </div>
  )
}
