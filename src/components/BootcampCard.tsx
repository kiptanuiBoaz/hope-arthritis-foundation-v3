import React, { useState } from "react";
import poster from "/public/img/abcdbootcamp.png";
import BootcampRegistrationModal from "./BootcampRegistrationModal";

const BootcampCard = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            (ABCD-PR) Bootcamp
          </h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A Bedside Clinician's Delight- Paediatric Rheumatology (ABCD-PR)
            Bootcamp
          </p>
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Meet, Interact and Learn
            </h4>
            <ul className="list-disc list-inside mb-10 text-gray-600 space-y-2">
              <li>A 4-day immersive case based learning experience</li>
              <li>
                Gain practical knowledge from leading experts in pediatric
                rheumatology
              </li>
              <li>Network with peers and specialists</li>
              <li>Earn a certificate of participation</li>
            </ul>
            <p className="fold-bold text-gray-600 leading-relaxed">
              Dates: October 9th - 12th, 2025
            </p>
            <p className="fold-bold text-gray-600 leading-relaxed">
              Location: Nairobi, Kenya
            </p>
          </div>
          <button
            onClick={() => setIsRegistrationModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
          >
            Register
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
          </button>
        </div>
        <div className="relative">
          <img
            src={poster}
            alt="Mountain landscape representing our academy"
            className="w-full h-100 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <BootcampRegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
};

export default BootcampCard;
