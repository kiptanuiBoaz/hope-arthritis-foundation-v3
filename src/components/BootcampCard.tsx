import { useState } from "react";
import poster from "/public/img/abcdbootcamp.png";
import BootcampRegistrationModal from "./BootcampRegistrationModal";

const BootcampCard = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100">
      {/* Centered Title with gradient and underline */}
      <div className="text-center mb-12">
        <h2 className="section-title gradient-title">(ABCD-PR) Bootcamp</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          A Bedside Clinician's Delight- Paediatric Rheumatology (ABCD-PR)
          Bootcamp
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Meet, Interact and Learn
            </h3>
            <ul className="list-disc list-inside mb-10 text-gray-600 space-y-2">
              <li>A 4-day immersive case based learning experience</li>
              <li>
                Gain practical knowledge from leading experts in pediatric
                rheumatology
              </li>
              <li>Network with peers and specialists</li>
              <li>Earn a certificate of participation</li>
            </ul>
            <p className="font-bold text-gray-600 leading-relaxed">
              Dates: October 9th - 12th, 2025
            </p>
            <p className="font-bold text-gray-600 leading-relaxed mb-4">
              Location: Nairobi, Kenya
            </p>

            {/* Tiered pricing structure */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Registration Fees
              </h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Early Bird Rate
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    $80 USD
                  </span>
                  <span className="text-sm text-gray-500">Until July 31st</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Standard Rate
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    $100 USD
                  </span>
                  <span className="text-sm text-gray-500">
                    Until August 31st
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Late Rate</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    $120 USD
                  </span>
                  <span className="text-sm text-gray-500">
                    Until September 30th
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-gray-700">
                    Last Minute Rate
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    $150 USD
                  </span>
                  <span className="text-sm text-gray-500">
                    Until October 5th
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => window.open("/documents/program.pdf", "_blank")}
              className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center bg-white"
              style={{ textDecoration: "none" }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              Download Program
            </button>
            <button
              onClick={() => setIsRegistrationModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-2"
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
            </button>
          </div>
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
