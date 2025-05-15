import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-gray-800">edu</span>
          <span className="text-yellow-500">ruz</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#journey" className="hover:text-yellow-500">
            Journey
          </a>
          <a href="#services" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#testimonials" className="hover:text-yellow-500">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-yellow-500">
            FAQ
          </a>
        </div>
        <div className="hidden md:block">
          <button className="bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-400">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}