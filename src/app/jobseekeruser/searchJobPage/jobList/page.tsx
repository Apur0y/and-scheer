import React from 'react'
import JobCard from '../jobCard/JobCard';

export default function  JobList() {
    
  const jobs = [
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    },
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    },
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    },
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    },
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    },
    {
      company: "SM Technology",
      title: "UI/UX Designer", 
      location: "Dhaka, Bangladesh (Onsite)",
      rating: "2.9",
      reviews: "4.0 (50 Reviews)",
      skills: "Figma • Adobe Illustrator • Adobe Photoshop • Adobe XD(optional)",
      salary: "4,500",
      timePosted: "Updated 2 days ago"
    }
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

