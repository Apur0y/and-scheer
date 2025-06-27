'use client';
import Logo from "@/components/MainLogo";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi"; // For modern icons
import { LuUser } from "react-icons/lu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "For Job Seekers", href: "#" },
    { name: "For Employers", href: "#" },
    { name: "Course", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && event.target && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);



  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
          <div className="flex items-center space-x-2">
            {/* <img src="/mainlogo.png" alt="Logo" className="h-[40px] w-auto" /> */}
            <Logo width={153} height={72} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className="hover:text-scheer-primary hover:underline transition-colors duration-200 "
              >
                {item.name}
              </Link>

              {index < navItems.length - 1 && (
                <span className="w-0.5 h-6 bg-gray-300 inline-block"></span>

              )}
            </React.Fragment>
          ))}

          {/* <Image
            src={"src"}
            alt={"alt"}
            width={60}
            height={60}
            className="rounded-full object-cover"
          /> */}
          <span className="w-0.5 h-6 bg-gray-300 inline-block"></span>
          <div className="relative">
            <button onClick={toggleMenu}>
              <LuUser className="size-9 bg-scheer-primary hover:bg-green-700 transition-all duration-300 cursor-pointer rounded-full p-2 text-white" />
            </button>

            {showMenu && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-3 min-w-[120px] z-50">
                {user ? (
                  <button
                    onClick={() => setShowMenu(false)}
                    className="w-full text-left hover:text-main-green">Profile</button>
                ) : (
                  <Link
                    onClick={() => setShowMenu(false)}
                    href={"/login"} className="w-full text-left hover:text-main-green">Sign In</Link>
                )}
              </div>
            )}
          </div>

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
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-screen" : "max-h-0"
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
          <div className="relative">
            <button onClick={toggleMenu}>
              <LuUser className="size-9 bg-scheer-primary hover:bg-green-700 transition-all duration-300 cursor-pointer rounded-full p-2 text-white" />
            </button>

            {showMenu && (
              <div className="absolute -top-2 left-10 bg-white shadow-lg rounded-md p-3 min-w-[120px] z-50">

                {user ? (
                  <Link
                    onClick={() => setShowMenu(false)}
                    href={"/profile"} className="w-full text-left hover:text-main-green">Profile</Link>
                ) : (
                  <Link
                    onClick={() => setShowMenu(false)}
                    href={"/login"} className="w-full text-left hover:text-main-green">Sign In</Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
