import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div >
            <nav className="bg-white border-b border-gray-200 px-4 py-3">
                <div className=" w-11/12  mx-auto flex flex-wrap items-center justify-between">
                    {/* Left: Logo + App Name */}
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-[72] w-[153]" />
                        {/* <span className="font-bold text-lg">Superjob</span> */}
                    </div>

                    {/* Right: Nav Links */}
                    <div className="hidden md:flex items-center space-x-4 text-sm text-gray-700 font-medium">
                        <Link href="#" className="hover:text-blue-600">Home</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-600">For Job Seekers</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-600">For Employers</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-600">Course</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-blue-600">Pricing</Link>
                        <span>|</span>
                        <img src="" alt="" className='h-12 w-12 bg-green-300 rounded-full p-2' />
                    </div>

                    {/* Mobile Menu Placeholder (Optional) */}
                    <div className="md:hidden">
                        {/* Add mobile menu toggle here if needed */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
