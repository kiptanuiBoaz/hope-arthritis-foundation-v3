import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/img/hopelogo 1.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
      style={
        isScrolled
          ? { background: "#fff" }
          : {
              background: "transparent",
            }
      }
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Hope logo" height={"70px"} width={"200px"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === "/"
                ? "text-orange-500 font-medium"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/activities"
            className={`transition-colors ${
              location.pathname === "/activities" ||
              location.pathname.startsWith("/activities/")
                ? "text-orange-500 font-medium"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            News & Activities
          </Link>
          <Link
            to="/team"
            className={`transition-colors ${
              location.pathname === "/team" ||
              location.pathname.startsWith("/team/")
                ? "text-orange-500 font-medium"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Our Team
          </Link>
          <Link
            to="/resources"
            className={`transition-colors ${
              location.pathname === "/resources"
                ? "text-orange-500 font-medium"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${
              location.pathname === "/contact"
                ? "text-orange-500 font-medium"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link to="/contact" className="hidden md:block btn-primary">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === "/"
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/activities"
              className={`transition-colors ${
                location.pathname === "/activities" ||
                location.pathname.startsWith("/activities/")
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              News & Activities
            </Link>
            <Link
              to="/team"
              className={`transition-colors ${
                location.pathname === "/team" ||
                location.pathname.startsWith("/team/")
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Our Team
            </Link>
            <Link
              to="/resources"
              className={`transition-colors ${
                location.pathname === "/resources"
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                location.pathname === "/contact"
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Contact
            </Link>
            <Link to="/contact" className="btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
