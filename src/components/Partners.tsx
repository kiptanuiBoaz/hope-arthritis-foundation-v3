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
];

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Partners
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We collaborate with industry leaders to make a lasting impact on
          children's health.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={partner.image}
                alt={partner.alt}
                className="mb-2 object-contain"
                style={partner.style}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
