import React from "react";
const FeaturedArticles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="section-title gradient-title">Featured Articles</h2>
      <div className="w-24 h-1 bg-orange-500  mt-4 mb-8" />
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-6 md:mb-0">
          <h4 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">
            Pediatric Arthritis: Recognizing the Signs and Taking Action Early
          </h4>
          <p className="text-gray-600 text-lg mb-4">
            Learn how to recognize the early signs of childhood arthritis,
            including pain, swelling, stiffness, and fatigue. Discover how
            pediatric rheumatologists diagnose and manage juvenile idiopathic
            arthritis to help children live active, healthy lives.
          </p>
          {/* <p className="text-gray-600 mb-4">
            Join us in Nairobi, Kenya, October 9th - 12th, 2025, to gain
            practical knowledge, network with peers, and earn a certificate of
            participation.
          </p> */}
          <a
            href="/pediatric-arthritis-recognizing-the-signs-and-taking-action-early"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
          >
            Read More
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
  );
};

export default FeaturedArticles;
