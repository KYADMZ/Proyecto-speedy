"use client";

import Link from "next/link";
import { useState,useEffect } from "react";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-10 z-50"
      onMouseEnter={() => setIsVisible(true)}
    >
      {/* Navbar */}
      <nav 
        className={`bg-blue-900 shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseLeave={() => !isAtTop && setIsVisible(false)}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-2">
            <img src="/speedyIcon.jpeg" alt="logo" className="w-14 h-auto" />
            <span className="ml-2 text-white text-xl font-bold">Speedy</span>
          </Link>

          {/* Menú en escritorio */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About Us", "Services", "Contact"].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase().replace(" ", "")}`} 
                className="text-gray-200 border border-blue-300 px-3 py-1 rounded-md hover:text-white hover:border-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-gray-200 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden bg-blue-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase().replace(" ", "")}`} 
                  className="block text-gray-200 border border-blue-300 px-3 py-1 rounded-md hover:text-white hover:border-white transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}