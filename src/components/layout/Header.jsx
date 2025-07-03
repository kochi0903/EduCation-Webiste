import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import Eduruz from "../../assets/Eduruz.png"; // Ensure this path is correct
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
    isScrolled ? "bg-white shadow-subtle py-2" : "bg-white py-2"
  }`;

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-lg font-medium transition-colors duration-200
    ${
      isActive
        ? "text-primary-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500"
        : "text-primary-700 hover:text-primary-600"
    }`;

  // Common button classes for both Login and Register
  const buttonClasses = `px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
                         flex justify-center items-center text-center whitespace-nowrap`;

  return (
    <header className={headerClasses}>
      {/* Increased max-width for the header content container */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={Eduruz} alt="Eduruz Logo" style={{ width: 75, height: 50 }} />
          <span className="ml-2 text-xl font-bold" style={{ color: "#1E293B" }}>
            Edu
          </span>
          <span className="text-xl font-bold" style={{ color: "#FFD200" }}>
            Ruz
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
          {/* Register Button */}
          <NavLink to="/register" className={`${buttonClasses} bg-yellow-400 text-gray-900 hover:bg-yellow-500 ml-4`}>
            Register Now
          </NavLink>
          {/* Login Button - Now to the right of Register, with yellow border */}
          <NavLink
            to="/login"
            className={`${buttonClasses} bg-gray-200 text-gray-800 hover:bg-gray-300 border-2 border-yellow-400 hover:border-yellow-500 ml-2`}
          >
            Login
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
            {/* Mobile Register Button */}
            <NavLink
              to="/register"
              className={`${buttonClasses} bg-yellow-400 text-gray-900 hover:bg-yellow-500 mt-4 mb-2`}
              onClick={closeMenu}
            >
              Register Now
            </NavLink>
            {/* Mobile Login Button - Now below Register, with yellow border */}
            <NavLink
              to="/login"
              className={`${buttonClasses} bg-gray-200 text-gray-800 hover:bg-gray-300 border-2 border-yellow-400 hover:border-yellow-500`}
              onClick={closeMenu}
            >
              Login
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
