import React, { useState } from "react";
import poster from "/public/img/abcdbootcamp.png";
import BootcampRegistrationModal from "./BootcampRegistrationModal";

const WhatWeDo = () => {
  // Add these refs for scrolling
  const whatWeDoRef = React.useRef<HTMLDivElement>(null);
  const getStartedRef = React.useRef<HTMLDivElement>(null);

  // State for the registration modal
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  // Helper for smooth scroll to a section by id
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="section bg-gradient-to-br from-gray-50 to-orange-50/30"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* What We Do Section */}
        <div id="what-we-do" className="text-center mb-16">
          <h2 className="section-title gradient-title">What We Do</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Empowering healthcare professionals and families through
            comprehensive education, resources, and support
          </p>
        </div>

        {/* Bootcamp Brief Card */}
        <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              (ABCD-PR) Bootcamp
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              A Bedside Clinician's Delight- Paediatric Rheumatology (ABCD-PR)
              Bootcamp is a 4-day immersive learning experience for healthcare
              professionals interested in pediatric rheumatology.
            </p>
            <p className="text-gray-600 mb-4">
              Join us in Nairobi, Kenya, October 9th - 12th, 2025, to gain
              practical knowledge, network with peers, and earn a certificate of
              participation.
            </p>
            <a
              href="/bootcamp-registration"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
            >
              Read More & Register
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Two Column Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Boot Camps */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50/50 rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Boot Camps For Healthcare Workers
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We offer comprehensive online boot camps designed for professional
              healthcare workers. These virtual training sessions focus on the
              proper diagnosis and treatment of pediatric rheumatological
              diseases, including:
            </p>
            <ul className="text-gray-600 mb-8 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Childhood Arthritis (Juvenile Idiopathic Arthritis - JIA)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Systemic Lupus Erythematosus (SLE)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Juvenile Dermatomyositis (JDM)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Vasculitis
              </li>
            </ul>
            <a
              href="https://app.hopearthritisfoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Learn More
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Master Classes */}
          <div className="bg-cyan-500/10 rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-cyan-500 mb-6">
              Master Classes For Parents/Guardians
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We conduct master classes tailored for
              parents/caregivers/guardians. These sessions provide essential
              training on how to care for children living with rheumatic
              diseases, ensuring they receive the best possible support and
              management.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our classes cover daily care routines, medication management,
              physical therapy exercises, and emotional support strategies to
              help families navigate the challenges of childhood arthritis.
            </p>
            <a
              href="https://app.hopearthritisfoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Learn More
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Get Started Today Section - Enhanced with Self-Assessment */}
        <div
          id="intro-forms"
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 gradient-title">
              Get Started Today
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Take the first step in your journey with us by completing one of
              our introductory forms or assessment tools
            </p>
          </div>

          {/* Self-Assessment Section */}
          <div id="self-assessment-section" className="mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-3 text-orange-500"
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
                Self-Assessment Tools
              </h4>
              <p className="text-gray-600">
                Evaluate current practices and identify areas for improvement in
                pediatric rheumatology care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="/assesment_forms/health_institution_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 text-center transition-all duration-300 border border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
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
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  Institution Assessment
                </h5>
                <p className="text-gray-600 text-sm">
                  For healthcare institutions to evaluate their pediatric
                  rheumatology services
                </p>
              </a>

              <a
                href="/assesment_forms/health_worker_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 rounded-2xl p-6 text-center transition-all duration-300 border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
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
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                  Healthcare Worker Assessment
                </h5>
                <p className="text-gray-600 text-sm">
                  For healthcare professionals to assess their knowledge and
                  skills
                </p>
              </a>

              <a
                href="/assesment_forms/patient_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-brandgreen-50 to-brandgreen-100 hover:from-brandgreen-100 hover:to-brandgreen-200 rounded-2xl p-6 text-center transition-all duration-300 border border-brandgreen-200 hover:border-brandgreen-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-brandgreen-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-brandgreen-600 transition-colors">
                  Guardian Assessment
                </h5>
                <p className="text-gray-600 text-sm">
                  For parents and guardians to evaluate their support needs
                </p>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="px-4 text-gray-500 font-medium">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Registration Forms Section */}
          <div id="join-community-section">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-3 text-orange-500"
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
                Join Our Community
              </h4>
              <p className="text-gray-600">
                Register to access our platform and connect with our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-xNHL50YF6RvSyICDThRjVYj6_ddgixm8nVp_gL7rl_P9LA/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 text-center transition-all duration-300 border border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
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
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  Health Institution Registration
                </h5>
                <p className="text-gray-600 text-sm">
                  For healthcare institutions looking to partner with us
                </p>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnSXTUHPDP2oq-LBb_7Fo2oGRh78udnH3G2sgmTgighijsYQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 rounded-2xl p-6 text-center transition-all duration-300 border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
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
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                  Health Worker Registration
                </h5>
                <p className="text-gray-600 text-sm">
                  For healthcare professionals seeking training and resources
                </p>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCpxbRdXueU2U0x1Rus-zw-_f4zizytAwrjvBCSRgr0x0OjQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-brandgreen-50 to-brandgreen-100 hover:from-brandgreen-100 hover:to-brandgreen-200 rounded-2xl p-6 text-center transition-all duration-300 border border-brandgreen-200 hover:border-brandgreen-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-brandgreen-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-brandgreen-600 transition-colors">
                  Parent/Guardian Registration
                </h5>
                <p className="text-gray-600 text-sm">
                  For parents and guardians of children with rheumatic diseases
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BootcampRegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default WhatWeDo;
