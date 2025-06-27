import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            About Us
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-8" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Beat Childhood Arthritis Through Empowerment
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are committed to ensuring every child diagnosed or living with
            arthritis and other rheumatic diseases thrives. That is why we offer
            training to professional healthcare workers and parents of children
            with rheumatic diseases through boot camps and masterclass sessions.
            Join us today!
          </p>
        </div>

        {/* Mission, Vision, and Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mr-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To promote awareness, prevention, early detection, and effective
              management of childhood arthritis and rheumatic disease through
              innovation, research, education and collaboration with healthcare
              professionals and stakeholders.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mr-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be the leading advocate and resource for childhood arthritis,
              rheumatic diseases and bone health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;