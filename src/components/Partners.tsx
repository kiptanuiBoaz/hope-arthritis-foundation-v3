import React from "react";

const partners = [
  {
    name: "MIHRA",
    image: "/partners/myositis_international_logo.png",
    alt: "Myositis International Health & Research Collaborative Alliance",
    style: { height: "96px", maxWidth: "320px" },
  },
  {
    name: "Custom Media House",
    image: "/partners/custom_media_house.png",
    alt: "Custom Media House",
    style: { height: "96px", maxWidth: "320px" },
  },
  {
    name: "Israel & Associates C.P.A",
    image: "/partners/israel.jpg",
    alt: "Israel & Associates C.P.A",
    style: { height: "110px", maxWidth: "320px" },
  },
  {
    name: "Devigence",
    image: "/partners/devligence.png",
    alt: "Devigence",
    style: { height: "96px", maxWidth: "320px" },
  },
  {
    name: "PAFLAR",
    image: "/partners/paflar.jpg",
    alt: "Pan-African League of Associations for Rheumatology",
    style: { height: "96px", maxWidth: "320px" },
  },
  {
    name: "Bush Blazers",
    image: "/partners/bushblazers_logo.jpg",
    alt: "Bush Blazers",
    style: { height: "96px", maxWidth: "320px" },
  },
  {
    name: "Rare Disease Kenya",
    image: "/partners/rdk_logo.jpg",
    alt: "Rare Disease Kenya",
    style: { height: "96px", maxWidth: "320px" },
  },
];

export default function Partners() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Partners
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We collaborate with industry leaders to make a lasting impact on
          children's health.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full py-4 overflow-hidden">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-8 flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="object-contain  transition-all duration-300"
                style={partner.style}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
