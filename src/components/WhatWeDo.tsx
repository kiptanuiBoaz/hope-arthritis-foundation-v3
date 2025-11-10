import React, { useState } from "react";
import poster from "/public/img/abcdbootcamp.png";
import BootcampRegistrationModal from "./BootcampRegistrationModal";

const WhatWeDo = () => {
  // Add these refs for scrolling
  const whatWeDoRef = React.useRef<HTMLDivElement>(null);

  // State for the registration modal
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  // NEW: tab state
  const [activeTab, setActiveTab] = useState<"assessment" | "join">(
    "assessment"
  );

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
      </div>
      <BootcampRegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default WhatWeDo;
