import React, { useState } from "react";

// Service Card component
const ServiceCard = ({
  title,
  description,
  listItems = [],
  image = "",
  ctaText = "Learn More",
}: {
  title: string;
  description: string;
  listItems?: string[];
  image?: string;
  ctaText?: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    {image && (
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {listItems.length > 0 && (
        <ul className="mb-6 space-y-2">
          {listItems.map((item, i) => (
            <li key={`${title}-item-${i}`} className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <button className="btn-primary mt-2">{ctaText}</button>
    </div>
  </div>
);

// Self-assessment Card
const AssessmentCard = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => (
  <div className="bg-white border border-gray-200 rounded-md p-5 text-center hover:shadow-md transition-shadow">
    <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
    <button className="w-full py-2 px-4 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100 transition-colors">
      {buttonText}
    </button>
  </div>
);

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState<"assessment" | "intro">(
    "assessment"
  );

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">What We Do</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-12" />
        </div>

        {/* Tabbed Self Assessment & Introductory Forms */}
        <div className="mb-16">
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ${activeTab === "assessment" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setActiveTab("assessment")}
            >
              Self Assessment
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold focus:outline-none transition-colors ml-2 ${activeTab === "intro" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setActiveTab("intro")}
            >
              Introductory Forms
            </button>
          </div>

          <div className="bg-white rounded-b-lg shadow p-6">
            {activeTab === "assessment" ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Self Assessment
                </h3>
                <p className="text-center text-gray-600 mb-8">
                  Empower yourself with knowledge and insight through our
                  comprehensive self-assessment tools.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <AssessmentCard
                    title="Health Symptom Form"
                    buttonText="Start Health Assessment"
                  />
                  <AssessmentCard
                    title="Health History Form"
                    buttonText="Record Medical History"
                  />
                  <AssessmentCard
                    title="Medical Scheduler Form"
                    buttonText="Schedule Consultation"
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Introductory Forms
                </h3>
                <ul className="max-w-md mx-auto space-y-4">
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe-xNHL50YF6RvSyICDThRjVYj6_ddgixm8nVp_gL7rl_P9LA/viewform?usp=send_form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 bg-orange-50 rounded hover:bg-orange-100 text-orange-700 font-medium text-center"
                    >
                      Health Institution Form
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdnSXTUHPDP2oq-LBb_7Fo2oGRh78udnH3G2sgmTgighijsYQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 bg-orange-50 rounded hover:bg-orange-100 text-orange-700 font-medium text-center"
                    >
                      Health Worker Form
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfCpxbRdXueU2U0x1Rus-zw-_f4zizytAwrjvBCSRgr0x0OjQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-4 bg-orange-50 rounded hover:bg-orange-100 text-orange-700 font-medium text-center"
                    >
                      Parent/Guardian Form
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            title="Boot Camps For Healthcare Workers"
            description="We offer comprehensive online boot camps designed for professional healthcare workers. These virtual training sessions focus on the proper diagnosis and treatment of pediatric rheumatological diseases, including:"
            listItems={[
              "Childhood Arthritis (Juvenile Idiopathic Arthritis - JIA)",
              "Systemic Lupus Erythematosus (SLE)",
              "Juvenile Dermatomyositis (JDM)",
              "Vasculitis",
            ]}
            ctaText="Learn More"
          />
          <ServiceCard
            title="Master Classes For Parents/Guardians"
            description="We conduct master classes tailored for parents/caregivers/guardians. These sessions provide essential training on how to care for children living with rheumatic diseases, ensuring they receive the best possible support and management."
            listItems={[
              "Our classes cover daily care routines, medication management, physical therapy exercises, and emotional support strategies to help families navigate the challenges of childhood arthritis.",
            ]}
            ctaText="Learn More"
          />
        </div>

        {/* Online Academy */}
        <div className="bg-gray-50 rounded-lg p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Online Academy</h3>
            <p className="text-gray-600 mb-6">
              Our online academy offers a wealth of resources for both
              healthcare professionals and families. Access expert articles,
              video tutorials, and up-to-date research on pediatric
              rheumatological diseases. Our academy ensures that everyone
              involved in the care of children with these conditions has the
              knowledge and tools they need.
            </p>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2">
                Leading The Way in Childhood Arthritis
              </h4>
              <p className="text-gray-600">
                Promoting holistic healthcare to children with rheumatic
                diseases across Africa and the globe through mentorship,
                academic leadership and offering psychosocial support to their
                families.
              </p>
            </div>

            <button className="btn-primary">Visit Academy</button>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://ext.same-assets.com/1778183887/1018377783.jpeg"
              alt="Our Online Academy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
