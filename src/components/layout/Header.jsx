import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaListUl, FaGraduationCap } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-subtle py-2" : "bg-white py-2"   //bg-transparent py-2 
  }`;

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-lg font-medium transition-colors duration-200
    ${
      isActive
        ? "text-primary-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500"
        : "text-primary-700 hover:text-primary-600"
    }`;

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <FaGraduationCap size={32} className="text-primary-500" />
          <span className="ml-2 text-xl font-bold text-neutral-900">
            LearnWell
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/courses" className={navLinkClasses}>
            Courses
          </NavLink>
          <NavLink to="/register" className="btn-primary ml-4">
            Register Now
          </NavLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <MdClose size={24} /> : <FaListUl size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-elevated z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-neutral-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <MdClose size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-4 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-3 mb-2 rounded-md ${
                  isActive
                    ? "bg-primary-100 text-primary-700"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-3 mb-2 rounded-md ${
                  isActive
                    ? "bg-primary-100 text-primary-700"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `px-4 py-3 mb-2 rounded-md ${
                  isActive
                    ? "bg-primary-100 text-primary-700"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`
              }
              onClick={closeMenu}
            >
              Courses
            </NavLink>
            <NavLink
              to="/register"
              className="btn-primary mt-4 text-center"
              onClick={closeMenu}
            >
              Register Now
            </NavLink>
          </nav>
        </div>

        {/* Overlay for mobile nav */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
