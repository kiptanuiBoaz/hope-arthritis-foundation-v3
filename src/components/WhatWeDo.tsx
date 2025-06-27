import React from "react";

// Service Card component with improved design
const ServiceCard = ({
  icon,
  title,
  description,
  links = [],
  ctaText = "Learn More",
  ctaLink = "#",
  isExternal = false
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  links?: Array<{ text: string; url: string; external?: boolean }>;
  ctaText?: string;
  ctaLink?: string;
  isExternal?: boolean;
}) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group h-full flex flex-col">
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    
    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
      {description}
    </p>

    {links.length > 0 && (
      <div className="mb-6 space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : ""}
            className="block w-full py-3 px-4 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium text-center rounded-xl transition-all duration-300 border border-orange-200 hover:border-orange-300"
          >
            {link.text}
          </a>
        ))}
      </div>
    )}

    <a
      href={ctaLink}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="btn-primary text-center shadow-md hover:shadow-lg mt-auto"
    >
      {ctaText}
    </a>
  </div>
);

const WhatWeDo = () => {
  const scrollToIntroForms = () => {
    const element = document.getElementById('intro-forms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto">
        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">What We Do</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Empowering healthcare professionals and families through comprehensive education, resources, and support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <ServiceCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Self Assessment"
            description="Empower yourself with knowledge and insight through our comprehensive self-assessment tools."
            links={[
              { text: "Health Institution Form", url: "/assesment_forms/health_institution_gap_analysis.html", external: true },
              { text: "Health Worker Form", url: "/assesment_forms/health_worker_gap_analysis.html", external: true },
              { text: "Parent Guardian Form", url: "/assesment_forms/patient_gap_analysis.html", external: true }
            ]}
          />

          <ServiceCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Boot Camps For Professional Healthcare Workers"
            description="We offer comprehensive online boot camps designed for professional healthcare workers. These virtual training sessions focus on the proper diagnosis and treatment of pediatric rheumatological diseases, including: Childhood Arthritis (Juvenile Idiopathic Arthritis - JIA), Systemic Lupus Erythematosus (SLE), Juvenile Dermatomyositis (JDM) and Vasculitis"
            ctaText="Access Platform"
            ctaLink="https://app.hopearthritisfoundation.com/"
            isExternal={true}
          />

          <ServiceCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="Master Classes for Parents / Guardians / Caregivers"
            description="We conduct master classes tailored for parents/caregivers/guardians. These sessions provide essential training on how to care for children living with rheumatic diseases, ensuring they receive the best possible support and management."
            ctaText="Join Classes"
            ctaLink="https://app.hopearthritisfoundation.com/"
            isExternal={true}
          />

          <ServiceCard
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            title="Our Online Academy"
            description="Our online academy offers a wealth of resources for both healthcare professionals and families. Access expert articles, video tutorials, and up-to-date research on pediatric rheumatological diseases. Our academy ensures that everyone involved in the care of children with these conditions has the knowledge and tools they need."
            ctaText="Visit Academy"
            ctaLink="https://app.hopearthritisfoundation.com/"
            isExternal={true}
          />
        </div>

        {/* Introductory Forms Section */}
        <div id="intro-forms" className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Get Started Today</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take the first step in your journey with us by completing one of our introductory forms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe-xNHL50YF6RvSyICDThRjVYj6_ddgixm8nVp_gL7rl_P9LA/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 text-center transition-all duration-300 border border-orange-200 hover:border-orange-300 shadow-md hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                Health Institution Form
              </h4>
              <p className="text-gray-600 text-sm">
                For healthcare institutions looking to partner with us
              </p>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnSXTUHPDP2oq-LBb_7Fo2oGRh78udnH3G2sgmTgighijsYQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl p-6 text-center transition-all duration-300 border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                Health Worker Form
              </h4>
              <p className="text-gray-600 text-sm">
                For healthcare professionals seeking training and resources
              </p>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCpxbRdXueU2U0x1Rus-zw-_f4zizytAwrjvBCSRgr0x0OjQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl p-6 text-center transition-all duration-300 border border-green-200 hover:border-green-300 shadow-md hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                Parent/Guardian Form
              </h4>
              <p className="text-gray-600 text-sm">
                For parents and guardians of children with rheumatic diseases
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;