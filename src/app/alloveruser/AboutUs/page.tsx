
import Container from '@/components/Container'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function AboutUs() {
    return (
        <div className='bg-gray-50'>
            <Container>
                <div>
                    <div className="flex flex-col md:flex-row items-center gap-10 px-6  max-w-6xl mx-auto">
                        {/* Left - Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src="/about.png" // Replace with your image path
                                alt="About Us"
                                className="w-full rounded-lg  object-cover"
                            />
                        </div>

                        {/* Right - Text Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="text-2xl md:text-5xl font-semibold">About Us!</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                The Future of Job Search, Powered by AI
                            </h3>

                            {/* Description Paragraphs */}
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We're revolutionizing how people find work by combining advanced AI with human-centric design.
                                </p>
                                <p>
                                    Our mission is to empower job seekers with smart tools that make the search faster, smarter, and more aligned with individual goals.
                                </p>
                                <p>
                                    With personalized matching and real-time insights, we’re reshaping the hiring landscape for both candidates and companies.
                                </p>
                            </div>

                            {/* Our Values */}
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Values:</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Innovation: Constantly pushing boundaries with AI-driven solutions.</li>
                                    <li>Transparency: Clear communication and ethical technology use.</li>
                                    <li>Efficiency: Streamlining the job search experience end to end.</li>
                                </ul>
                            </div>

                            {/* Button */}
                            <button className="mt-4 px-6 py-3 flex bg-neutral-800 text-white font-semibold rounded hover:bg-neutral-900 transition">
                                Join Us Today <BsArrowRight className='my-auto ml-2'> </BsArrowRight>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
