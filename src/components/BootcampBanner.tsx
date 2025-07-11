import React, { useState } from "react";
import { Link } from "react-router-dom";

const BootcampBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed left-0 right-0 bottom-0 z-40 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-gradient-to-r from-orange-100/90 to-cyan-100/90 border border-orange-200 shadow-2xl rounded-t-2xl px-6 py-4 max-w-2xl w-full mx-2 flex items-center gap-4 relative animate-fadeInUp">
        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-bold text-orange-600 mb-1">
            (ABCD-PR) Bootcamp
          </h4>
          <p className="text-gray-700 text-sm md:text-base mb-1">
            A Bedside Clinician's Delight- Paediatric Rheumatology (ABCD-PR)
            Bootcamp
          </p>
          <p className="text-gray-600 text-xs md:text-sm mb-1">
            Dates:{" "}
            <span className="font-semibold">October 9th - 12th, 2025</span>
          </p>
          <p className="text-gray-600 text-xs md:text-sm mb-4">
            Location: <span className="font-semibold">Nairobi, Kenya</span>
          </p>
          <Link
            to="/bootcamp-registration"
            onClick={() => window.scrollTo(0, 0)}
            className="block w-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base mb-2"
          >
            Learn More & Register
          </Link>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl p-1 rounded-full focus:outline-none"
          aria-label="Dismiss banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
};

export default BootcampBanner;
