import React from "react";

export default function Partners() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Partners
        </h2>
        {/* <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We collaborate with industry leaders to deliver exceptional solutions
          and drive innovation.
        </p> */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex flex-col items-center">
            <img
              src="/partners/myositis_international_logo.png"
              alt="Myositis International Health & Research Collaborative Alliance"
              className="h-24 w-auto mb-2 object-contain"
              style={{ maxWidth: 320 }}
            />
            <span className="text-base font-semibold text-gray-700">MIHRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
