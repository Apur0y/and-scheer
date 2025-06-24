'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For modern icons

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "For Job Seekers", href: "#" },
    { name: "For Employers", href: "#" },
    { name: "Course", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-[40px] w-auto" />
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-main-green transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <img
            src=""
            alt="Profile"
            className="h-10 w-10 bg-green-300 rounded-full p-2"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-main-green font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <img
            src=""
            alt="Profile"
            className="h-10 w-10 bg-green-300 rounded-full p-2 mt-2"
          />
        </div>
      </div>
    </nav>
  );
}
