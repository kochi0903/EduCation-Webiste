import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-yellow-500">Eduruz</span> &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#testimonials" className="footer-link">Testimonials</a>
          <a href="#faq" className="footer-link">FAQ</a>
        </div>
      </div>
    </footer>
  );
}