import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Mr. Kevin Munyaka",
    title: "Guardian",
    image: "/img/panels/kevin-munyaka.webp",
    text: `It has been a long journey of misdiagnosis and sleepless nights till we got to know what was ailing our son. Dr Migowa has taken us through the journey with encouragement and also advised on how to manage the disease. It's tough but at least we are able to cope through Dr. Migowa's encouragement and treatment.`,
    category: "Parent",
    rating: 5
  },
  {
    name: "Dr. Michuki Maina",
    title: "Paediatric Consultant and Clinical Researcher",
    image: "/img/panels/drmichuki.webp",
    text: `I have attended several seminar presentations by Dr. Angela Migowa on pediatric rheumatoid conditions. She breaks down complex ideas, allowing the learners to grasp the concepts very well. Dr. Migowa also facilitates lively discussions in the sessions. It's always a great learning experience for me.`,
    category: "Healthcare Professional",
    rating: 5
  },
  {
    name: "Dr. Soad Hashad",
    title: "Associate Professor University of Tripoli",
    image: "/img/panels/drsoad.webp",
    text: `Dr. Angela Migowa has contributed to pediatric rheumatology by creating concise, well-designed lectures that have attracted numerous doctors and provided essential baseline knowledge. This has helped to train the next generation of pediatric rheumatologists. The lectures are highly recommended for anyone specializing in this field.`,
    category: "Academic",
    rating: 5
  },
  {
    name: "Dr. Aura Mwende",
    title: "Consultant Paediatrician",
    image: "/img/panels/draura.webp",
    text: `Dr. Angela Migowa's virtual rheumatology sessions on patient history and physical examinations emphasize the crucial role in diagnosing rheumatological conditions. Her teaching and ability to highlight key diagnostic cues have profoundly influenced my practice as a pediatrician and aspiring rheumatologist. I highly recommend her sessions to all pediatricians and physicians caring for children.`,
    category: "Healthcare Professional",
    rating: 5
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="section bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Community Says
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from the healthcare professionals, parents, and guardians whose
            lives we've touched through our mission
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Section */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {currentTestimonial.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-bold text-xl text-white mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-300 font-medium text-sm mb-3">
                      {currentTestimonial.title}
                    </p>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center lg:justify-start gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 text-white/20">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-white leading-relaxed italic pl-8">
                      "{currentTestimonial.text}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex space-x-3">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full shadow-lg"
                        : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            {/* Satisfaction Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300 text-sm font-medium">Satisfaction Rate</div>
              </div>
            </div>

            {/* Expert Testimonials */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm font-medium">Expert Testimonials</div>
              </div>
            </div>

            {/* Community Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm font-medium">Community Support</div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300 text-sm font-medium">Countries Reached</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Be part of our mission to transform pediatric rheumatology care across Africa and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.hopearthritisfoundation.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Join Our Platform
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  Share Your Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;