import React, { useState, useEffect } from "react";

// Carousel data
const slides = [
  {
    image: "/img/heroImg0-min.webp",
    title: "Our Online Academy",
    subtitle: "Beat Childhood Arthritis",
  },
  {
    image: "/img/medical_camp.webp",
    title: "Medical Camp",
    subtitle: "Community Outreach & Care",
  },
  {
    image: "/img/x_space_poster.webp",
    title: "X Space Poster",
    subtitle: "Awareness & Advocacy",
  },
  {
    image: "/img/health_workers_bootcamp.webp",
    title: "Dr. Angela Poster",
    subtitle: "Leadership in Pediatric Rheumatology",
  },
  {
    image: "/img/heroImg1-min.webp",
    title: "Expert-Led Workshops",
    subtitle: "Empower Families & Providers",
  },
  {
    image: "/img/heroImg2-min.webp",
    title: "Hope Events",
    subtitle: "Inspiring Change Together",
  },
  {
    image: "/img/heroImg3-min.webp",
    title: "Global Collaboration",
    subtitle: "Connecting Experts Worldwide",
  },
  {
    image: "/img/heroImg4-min.webp",
    title: "Research & Innovation",
    subtitle: "Advancing Pediatric Care",
  },
  {
    image: "/img/leveling_up.webp",
    title: "Leveling Up",
    subtitle: "Raising Standards in Care",
  },
];

// Up-down animation keyframes (very slow, small distance)
const heartbeatStyle = `
@keyframes updown {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-8px);}
}
.updown {
  animation: updown 5s ease-in-out infinite;
}
.fade {
  opacity: 0;
  transition: opacity 0.7s;
  position: absolute;
  inset: 0;
  z-index: 0;
}
.fade.active {
  opacity: 1;
  z-index: 1;
  position: relative;
}
`;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Autoplay carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(246, 133, 33, 0.15) 0%, rgba(30, 158, 176, 0.15) 100%)",
      }}
    >
      {/* Animation styles */}
      <style>{heartbeatStyle}</style>
      <div className="container mx-auto flex-1 flex items-center pt-10 md:pt-12 px-2 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
              <span className="text-gray-900"> Beat </span>
              <span className=" bg-gradient-to-r from-orange-500 via-[#8d9e6f] to-[#4bb3b3] bg-clip-text text-transparent">
                Childhood
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-orange-500 via-[#8d9e6f] to-[#4bb3b3] bg-clip-text text-transparent">
                  Arthritis
                </span>
                <span className="text-gray-900"> Through</span>
              </span>
              <span className="block">Empowerment</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Ready to make a lasting impact on children's health? Join us and
              help ensure every child diagnosed with arthritis thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                Register Now <span className="ml-2">→</span>
              </a>
              <a
                href="#about"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 font-medium px-8 py-4 rounded-xl text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Decorative graphics - top left */}
            <div className="absolute -top-8 -left-8 z-0 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle
                  cx="60"
                  cy="60"
                  r="60"
                  fill="rgb(178, 222, 245) "
                  fillOpacity="0.7"
                />
              </svg>
            </div>
            {/* Decorative graphics - bottom right */}
            <div className="absolute -bottom-8 -right-8 z-0 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <ellipse
                  cx="50"
                  cy="50"
                  rx="50"
                  ry="40"
                  fill="rgb(250, 211, 160)"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
            {/* Carousel */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative bg-white">
              <div className="relative w-full h-[340px] md:h-[400px]">
                {slides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt={slide.subtitle}
                    className={`w-full h-[340px] md:h-[450px] object-cover updown fade${
                      idx === current ? " active" : ""
                    }`}
                  />
                ))}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                  <h3 className="text-white font-semibold text-xl mb-1">
                    {slides[current].title}
                  </h3>
                  <p className="text-white/80 text-lg font-medium">
                    {slides[current].subtitle}
                  </p>
                </div>
              </div>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`block w-3 h-3 rounded-full border border-orange-500 transition-all duration-200 ${
                      idx === current
                        ? "bg-orange-500 scale-125"
                        : "bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;