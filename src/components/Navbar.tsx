import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/img/hopelogo 1.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

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
    setIsAboutOpen(false);
  }, [location.pathname]);

  // Click away to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg py-2 bg-white"
          : "py-4 bg-transparent"
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

          {/* About Us Dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              className={`transition-colors font-medium flex items-center ${
                location.pathname === "/founder" ||
                location.pathname === "/gallery"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
              onClick={() => setIsAboutOpen((open) => !open)}
              aria-expanded={isAboutOpen}
              aria-controls="about-dropdown"
            >
              About Us
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isAboutOpen && (
              <div
                id="about-dropdown"
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
              >
                <Link
                  to="/founder"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Our Founder
                  </div>
                </Link>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Mission
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Vision
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("core-values")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Core Values
                  </div>
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Our Team
                  </div>
                </button>
                <Link
                  to="/gallery"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Gallery
                  </div>
                </Link>
              </div>
            )}
          </div>

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

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              className={`transition-colors font-medium flex items-center ${
                location.pathname === "/resources" ||
                location.pathname === "/patient-information"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
              onClick={() => setIsResourcesOpen((open) => !open)}
              aria-expanded={isResourcesOpen}
              aria-controls="resources-dropdown"
            >
              Resources
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isResourcesOpen && (
              <div
                id="resources-dropdown"
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
              >
                <a
                  href="https://hopearthritisfoundation.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    Blogs
                  </div>
                </a>
                <Link
                  to="/patient-information"
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
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
        <Link
          to="/contact"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
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

            {/* Mobile About Us */}
            <div className="pl-4 border-l-2 border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-2">
                About Us
              </p>
              <Link
                to="/founder"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Our Founder
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
              >
                Mission & Vision
              </button>
              <button
                onClick={() => scrollToSection("core-values")}
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
              >
                Core Values
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
              >
                Our Team
              </button>
              <Link
                to="/gallery"
                className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Gallery
              </Link>
            </div>

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

            {/* Mobile Resources */}
            <div className="pl-4 border-l-2 border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Resources
              </p>
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