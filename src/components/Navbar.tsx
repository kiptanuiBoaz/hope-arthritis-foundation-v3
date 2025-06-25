import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/img/hopelogo 1.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
    setIsResourcesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2 bg-white/95 backdrop-blur-sm" : "py-4 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Hope logo" height={"70px"} width={"200px"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`transition-colors font-medium ${
              location.pathname === "/"
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/activities"
            className={`transition-colors font-medium ${
              location.pathname === "/activities" ||
              location.pathname.startsWith("/activities/")
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            News & Activities
          </Link>
          <Link
            to="/team"
            className={`transition-colors font-medium ${
              location.pathname === "/team" ||
              location.pathname.startsWith("/team/")
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Our Team
          </Link>
          
          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              className={`transition-colors font-medium flex items-center ${
                location.pathname === "/resources" || location.pathname === "/patient-information"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Resources
              <svg 
                className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <a
                  href="https://hopearthritisfoundation.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Blogs
                  </div>
                </a>
                <Link
                  to="/patient-information"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Patient Information
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`transition-colors font-medium ${
              location.pathname === "/contact"
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link to="/contact" className="hidden md:block btn-primary shadow-md hover:shadow-lg">
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
        <div className="md:hidden bg-white py-4 px-4 shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                location.pathname === "/"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/activities"
              className={`transition-colors font-medium ${
                location.pathname === "/activities" ||
                location.pathname.startsWith("/activities/")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              News & Activities
            </Link>
            <Link
              to="/team"
              className={`transition-colors font-medium ${
                location.pathname === "/team" ||
                location.pathname.startsWith("/team/")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Our Team
            </Link>
            
            {/* Mobile Resources */}
            <div className="pl-4 border-l-2 border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-2">Resources</p>
              <a
                href="https://hopearthritisfoundation.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Blogs
              </a>
              <Link
                to="/patient-information"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Patient Information
              </Link>
            </div>

            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                location.pathname === "/contact"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Contact
            </Link>
            <Link to="/contact" className="btn-primary text-center shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;