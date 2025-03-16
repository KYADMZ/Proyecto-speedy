"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and company name */}
        <Link href="/" className="flex items-center -ml-2">
          <img src="/speedyIcon.jpeg" alt="logo" className="w-14 h-auto" />
          <span className="ml-2 text-white text-xl font-bold">Speedy</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-300">
            About Us
          </Link>
          <Link href="/services" className="text-gray-200 hover:text-white transition-colors duration-300">
            Services
          </Link>
          <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-200 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block text-gray-200 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="block text-gray-200 hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <Link href="/services" className="block text-gray-200 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-200 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
