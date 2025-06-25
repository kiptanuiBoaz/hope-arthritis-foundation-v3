import React, { useState, useEffect } from 'react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "It has been a long journey of misdiagnosis and sleepless nights till we got to know what was ailing our son. Dr Migowa has taken us through the journey with encouragement and also advising on how to manage the disease. It's tough but at least we are able to cope through Dr. Migowa's encouragement and treatment.",
    name: "Mr. Kevin Munyaka",
    title: "Guardian",
    avatar: "https://ext.same-assets.com/1778183887/2838098675.svg"
  },
  {
    id: 2,
    text: "The resources and support provided by Hope Arthritis Foundation have been life-changing for our family. The masterclass gave us practical tools to help our daughter manage her JIA symptoms daily, and the community support has been invaluable.",
    name: "Mrs. Sarah Johnson",
    title: "Parent",
    avatar: "https://ext.same-assets.com/1778183887/2838098675.svg"
  },
  {
    id: 3,
    text: "As a healthcare professional, the bootcamp training transformed my approach to diagnosing and treating childhood arthritis. The material was comprehensive and practical. I now feel much more confident in providing care for these young patients.",
    name: "Dr. James Mwangi",
    title: "Paediatrician",
    avatar: "https://ext.same-assets.com/1778183887/2838098675.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Testimonials</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
          <p className="text-gray-600">What our beneficiaries say</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm relative">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt="Quote"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrev}
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots for navigation */}
              <div className="flex space-x-2">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleDotClick(testimonial.id - 1)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      testimonial.id - 1 === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${testimonial.id}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
