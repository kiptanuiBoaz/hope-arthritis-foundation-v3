import React from "react";

const mainGreen = "rgb(89,146,75)";
const lightGreen = "#e0f5e6";
const accentGreen = "#b6e2c2";

const About = () => {
  return (
    <section
      id="about"
      className="section"
      style={{
        background: mainGreen,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title" style={{ color: "#fff" }}>
            About Us
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4 mb-8"
            style={{ background: mainGreen }}
          />
        </div>

        <div className="mb-16">
          <h3
            className="text-2xl text-center md:text-3xl font-bold mb-6"
            style={{ color: "#fff" }}
          >
            Beat Childhood Arthritis Through Empowerment
          </h3>
          <p className="mb-6 text-center" style={{ color: "#fff" }}>
            We are committed to ensuring every child diagnosed or living with
            arthritis and other rheumatic diseases thrives. That is why we offer
            training to professional healthcare workers and parents of children
            with rheumatic diseases through boot camps and masterclass sessions.
            Join us today!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Mission */}
          <div className="relative flex-1 max-w-full lg:max-w-[50%]">
            {/* Overlay shifted shadow */}
            <div
              className="absolute bottom-2 left-2 w-full h-full rounded-xl z-0 pointer-events-none"
              style={{
                boxShadow: `0 0 16px 16px ${accentGreen}`,
                opacity: 0.18,
              }}
            />
            <div
              className="relative rounded-xl shadow-lg p-8 min-h-[220px] flex flex-col justify-start z-10 border"
              style={{ background: lightGreen, borderColor: accentGreen }}
            >
              <h3
                className="font-bold text-2xl mb-2 flex items-center"
                style={{ color: mainGreen }}
              >
                Mission
              </h3>
              <div
                className="w-12 h-1 mb-4"
                style={{ background: mainGreen }}
              />
              <p className="text-base" style={{ color: mainGreen }}>
                To promote awareness, prevention, early detection and effective
                management of childhood arthritis and rheumatic disease through
                innovation, research, education and collaboration with
                healthcare professionals and stakeholders
              </p>
            </div>
            {/* Dot top left */}
            <span
              className="absolute -top-2 -left-2 w-2 h-2 rounded-full"
              style={{ background: mainGreen }}
            ></span>
          </div>
          {/* Vision */}
          <div className="relative flex-1 max-w-full lg:max-w-[50%] mt-8 lg:mt-0">
            {/* Overlay shifted shadow */}
            <div
              className="absolute bottom-2 left-2 w-full h-full rounded-xl z-0 pointer-events-none"
              style={{
                boxShadow: `0 0 16px 16px ${accentGreen}`,
                opacity: 0.18,
              }}
            />
            <div
              className="relative rounded-xl shadow-lg p-8 min-h-[220px] flex flex-col justify-start z-10 border"
              style={{ background: lightGreen, borderColor: accentGreen }}
            >
              <h3
                className="font-bold text-2xl mb-2 flex items-center"
                style={{ color: mainGreen }}
              >
                Vision
              </h3>
              <div
                className="w-12 h-1 mb-4"
                style={{ background: accentGreen }}
              />
              <p className="text-base" style={{ color: mainGreen }}>
                To be the leading advocate and resource for childhood arthritis,
                rheumatic diseases and bone health
              </p>
            </div>
            {/* Dot bottom right */}
            <span
              className="absolute -bottom-2 -right-2 w-2 h-2 rounded-full"
              style={{ background: accentGreen }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
