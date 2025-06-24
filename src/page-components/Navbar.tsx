'use client';
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <nav className="bg-white border-b border-gray-200  py-3 max-w-[1420px] mx-auto">
      <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-[72px] w-[153px]" />
          {/* <span className="font-bold text-lg">Superjob</span> */}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4 text-sm text-gray-700 font-medium">
          <Link href="#" className="hover:text-green-600">
            Home
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-green-600">
            For Job Seekers
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-green-600">
            For Employers
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-green-600">
            Course
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-green-600">
            Pricing
          </Link>
          <span>|</span>
          <img
            src=""
            alt=""
            className="h-12 w-12 bg-green-300 rounded-full p-2"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 w-11/12 mx-auto py-4">
          <Link
            href="#"
            className="block py-2 text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="block py-2 text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Job Seekers
          </Link>
          <Link
            href="#"
            className="block py-2 text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Employers
          </Link>
          <Link
            href="#"
            className="block py-2 text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Course
          </Link>
          <Link
            href="#"
            className="block py-2 text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          {/* You can add the profile icon or other stuff here */}
          <img
            src=""
            alt=""
            className="h-12 w-12 bg-green-300 rounded-full p-2 mt-2"
          />
        </div>
      )}
    </nav>
  );
}
