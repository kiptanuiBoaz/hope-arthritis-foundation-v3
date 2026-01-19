import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/img/hopelogo 1.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);

  // Mobile menu section states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWhatWeOfferOpen, setMobileWhatWeOfferOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const whatWeOfferRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle mobile menu sections (only one open at a time)
  const toggleMobileSection = (
    section: "about" | "whatWeOffer" | "resources"
  ) => {
    setMobileAboutOpen(section === "about" ? !mobileAboutOpen : false);
    setMobileWhatWeOfferOpen(
      section === "whatWeOffer" ? !mobileWhatWeOfferOpen : false
    );
    setMobileResourcesOpen(
      section === "resources" ? !mobileResourcesOpen : false
    );
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
    setIsWhatWeOfferOpen(false);
    setMobileAboutOpen(false);
    setMobileWhatWeOfferOpen(false);
    setMobileResourcesOpen(false);
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
      if (
        whatWeOfferRef.current &&
        !whatWeOfferRef.current.contains(event.target as Node)
      ) {
        setIsWhatWeOfferOpen(false);
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

  const setTabParam = (tab: "assessment" | "join") => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.replaceState({}, "", url.toString());
  };

  const scrollToSelfAssessment = () => {
    if (location.pathname !== "/") {
      window.location.href = "/?tab=assessment#self-assessment-section";
    } else {
      setTabParam("assessment");
      const element = document.getElementById("self-assessment-section");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToJoinCommunity = () => {
    if (location.pathname !== "/") {
      window.location.href = "/?tab=join#join-community-section";
    } else {
      setTabParam("join");
      const element = document.getElementById("join-community-section");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsWhatWeOfferOpen(false);
  };

  const scrollToOnlineAcademy = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#what-we-do";
    } else {
      const element = document.getElementById("what-we-do");
      if (element) {
        const academySection = element.nextElementSibling;
        if (academySection) {
          academySection.scrollIntoView({ behavior: "smooth" });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    setIsWhatWeOfferOpen(false);
  };

  const scrollToBootCamps = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#services";
    } else {
      const element = document.getElementById("services");
      if (element) {
        // Find the Boot Camps section by heading text
        const bootCampsHeading = document.evaluate(
          "//h3[contains(text(), 'Boot Camps For Healthcare Workers')]",
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue as HTMLElement;

        if (bootCampsHeading) {
          bootCampsHeading.scrollIntoView({ behavior: "smooth" });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    setIsWhatWeOfferOpen(false);
  };

  const scrollToMasterClasses = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#services";
    } else {
      const element = document.getElementById("services");
      if (element) {
        // Find the Master Classes section by heading text
        const masterClassesHeading = document.evaluate(
          "//h3[contains(text(), 'Master Classes For Parents')]",
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue as HTMLElement;

        if (masterClassesHeading) {
          masterClassesHeading.scrollIntoView({ behavior: "smooth" });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    setIsWhatWeOfferOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2 bg-white" : "py-4 bg-transparent"
      } ${isMenuOpen ? "bg-white" : ""}`}
    >
      <div className="container mx-auto px-0 flex justify-between items-center">
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
                  onClick={() => window.scrollTo(0, 0)}
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
                <Link
                  to="/team"
                  onClick={() => window.scrollTo(0, 0)}
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
                </Link>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
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
                <a
                  href="/documents/Customer%20Service%20Charter%20draft.pdf"
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Customer Service Charter
                  </div>
                </a>
              </div>
            )}
          </div>

          <Link
            to="/activities"
            onClick={() => window.scrollTo(0, 0)}
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
            to="/careers"
            onClick={() => window.scrollTo(0, 0)}
            className={`transition-colors font-medium ${
              location.pathname === "/careers"
                ? "text-orange-500"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            Careers
          </Link>

          {/* What We Offer Dropdown */}
          <div className="relative" ref={whatWeOfferRef}>
            <button
              className="transition-colors font-medium flex items-center text-gray-700 hover:text-orange-500"
              onClick={() => setIsWhatWeOfferOpen((open) => !open)}
              aria-expanded={isWhatWeOfferOpen}
              aria-controls="what-we-offer-dropdown"
            >
              What We Offer
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isWhatWeOfferOpen ? "rotate-180" : ""}`}
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

            {isWhatWeOfferOpen && (
              <div
                id="what-we-offer-dropdown"
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
              >
                <button
                  onClick={scrollToOnlineAcademy}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Our Online Academy</div>
                      <p className="text-xs text-gray-500">
                        Access educational resources for arthritis management
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={scrollToBootCamps}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">
                        Boot Camps For Healthcare Workers
                      </div>
                      <p className="text-xs text-gray-500">
                        Professional training for better patient care
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={scrollToMasterClasses}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3 flex-shrink-0"
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
                    <div>
                      <div className="font-medium">
                        Master Classes For Parents/Guardians
                      </div>
                      <p className="text-xs text-gray-500">
                        Learn to support children with arthritis
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={scrollToSelfAssessment}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Self-Assessment Tools</div>
                      <p className="text-xs text-gray-500">
                        Evaluate your arthritis symptoms and track your progress
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={scrollToJoinCommunity}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium">Join Our Community</div>
                      <p className="text-xs text-gray-500">
                        Connect with others and access support resources
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

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
                  onClick={() => window.scrollTo(0, 0)}
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
        </div>

        {/* Call to Action Button */}
        <a
          href="https://app.hopearthritisfoundation.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Our Online Academy</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5-5 5M5 12h13"
            />
          </svg>
        </a>

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

      {/* Backdrop overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg border-t border-gray-100 relative z-50">
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

            {/* Mobile About Us - Collapsible */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("about")}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
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

              {mobileAboutOpen && (
                <div className="pl-4 border-l-2 border-gray-100 mt-2 space-y-1">
                  <Link
                    to="/founder"
                    onClick={() => window.scrollTo(0, 0)}
                    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Our Founder
                  </Link>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Mission & Vision
                  </button>
                  <button
                    onClick={() => scrollToSection("core-values")}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Core Values
                  </button>
                  <Link
                    to="/team"
                    onClick={() => window.scrollTo(0, 0)}
                    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Our Team
                  </Link>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to="/gallery"
                    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Gallery
                  </Link>
                  <a
                    href="/documents/Customer%20Service%20Charter%20draft.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Customer Service Charter
                  </a>
                </div>
              )}
            </div>

            {/* Mobile What We Offer - Collapsible */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("whatWeOffer")}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                <span>What We Offer</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileWhatWeOfferOpen ? "rotate-180" : ""}`}
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

              {mobileWhatWeOfferOpen && (
                <div className="pl-4 border-l-2 border-gray-100 mt-2 space-y-1">
                  <button
                    onClick={scrollToOnlineAcademy}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Our Online Academy
                  </button>
                  <button
                    onClick={scrollToBootCamps}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Boot Camps For Healthcare Workers
                  </button>
                  <button
                    onClick={scrollToMasterClasses}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Master Classes For Parents/Guardians
                  </button>
                  <button
                    onClick={scrollToSelfAssessment}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Self-Assessment Tools
                  </button>
                  <button
                    onClick={scrollToJoinCommunity}
                    className="block w-full py-2 text-gray-700 hover:text-orange-500 transition-colors text-left"
                  >
                    Join Our Community
                  </button>
                </div>
              )}
            </div>

            {/* News & Activities */}
            <Link
              to="/activities"
              onClick={() => window.scrollTo(0, 0)}
              className={`transition-colors font-medium py-2 border-b border-gray-100 ${
                location.pathname === "/activities" ||
                location.pathname.startsWith("/activities/")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              News & Activities
            </Link>

            {/* Careers */}
            <Link
              to="/careers"
              onClick={() => window.scrollTo(0, 0)}
              className={`transition-colors font-medium py-2 border-b border-gray-100 ${
                location.pathname === "/careers"
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Careers
            </Link>

            {/* Mobile Resources - Collapsible */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("resources")}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
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

              {mobileResourcesOpen && (
                <div className="pl-4 border-l-2 border-gray-100 mt-2 space-y-1">
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
                    onClick={() => window.scrollTo(0, 0)}
                    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Patient Information
                  </Link>
                </div>
              )}
            </div>

            <a
              href="https://app.hopearthritisfoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <span>Our Online Academy</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5-5 5M5 12h13"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
