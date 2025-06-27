import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    name: 'Mr. Kevin Munyaka',
    title: 'Guardian',
    image: '/img/panels/kevin-munyaka.webp',
    text: `It has been a long journey of misdiagnosis and sleepless nights till we got to know what was ailing our son. Dr Migowa has taken us through the journey with encouragement and also advised on how to manage the disease. It's tough but at least we are able to cope through Dr. Migowa's encouragement and treatment.`
  },
  {
    name: 'Dr. Michuki Maina',
    title: 'Paediatric Consultant and Clinical Researcher',
    image: '/img/panels/drmichuki.webp',
    text: `I have attended several seminar presentations by Dr. Angela Migowa on pediatric rheumatoid conditions. She breaks down complex ideas, allowing the learners to grasp the concepts very well. Dr. Migowa also facilitates lively discussions in the sessions. It's always a great learning experience for me.`
  },
  {
    name: 'Dr. Soad Hashad',
    title: 'Associate Professor University of Tripoli',
    image: '/img/panels/drsoad.webp',
    text: `Dr. Angela Migowa has contributed to pediatric rheumatology by creating concise, well-designed lectures that have attracted numerous doctors and provided essential baseline knowledge. This has helped to train the next generation of pediatric rheumatologists. The lectures are highly recommended for anyone specializing in this field.`
  },
  {
    name: 'Dr. Aura Mwende',
    title: 'Consultant Paediatrician',
    image: '/img/panels/draura.webp',
    text: `Dr. Angela Migowa's virtual rheumatology sessions on patient history and physical examinations emphasize the crucial role in diagnosing rheumatological conditions. Her teaching and ability to highlight key diagnostic cues have profoundly influenced my practice as a pediatrician and aspiring rheumatologist. I highly recommend her sessions to all pediatricians and physicians caring for children.`
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonialsData.length
    );
  };

  return (
    <section className="section bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">What Our Community Says</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from the healthcare professionals, parents, and guardians whose lives we've touched
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-500">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonialsData[currentIndex].text}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-xl text-gray-800 mb-1">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-orange-600 font-medium">
                      {testimonialsData[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300 rounded-full flex items-center justify-center text-orange-500 hover:text-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots for navigation */}
            <div className="flex space-x-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-500 scale-125 shadow-md' 
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300 rounded-full flex items-center justify-center text-orange-500 hover:text-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600">Expert Testimonials</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;