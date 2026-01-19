import React from "react";

const Careers: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      <div className="px-4">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <h1 className="section-title gradient-title">Careers</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in advancing childhood arthritis awareness and pediatric
            rheumatology care across Africa.
          </p>
        </div>

        {/* Opportunity Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-700">
                      Volunteer Opportunity
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                      Marketing &amp; Communications
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Marketing &amp; Communications Volunteer
                  </h2>
                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">
                      Hope Arthritis Foundation
                    </span>{" "}
                    (HAF)
                  </p>
                </div>

                {/* <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-2xl p-5 shadow-md md:min-w-[280px]">
                  <div className="text-sm opacity-90">Application deadline</div>
                  <div className="text-xl font-bold">23 January 2026</div>
                  <a
                    href="mailto:info@hopearthritisfoundation.com"
                    className="mt-4 inline-flex items-center justify-center w-full bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 px-5 rounded-xl transition-all duration-300 shadow-sm"
                  >
                    Apply via Email
                  </a>
                  <div className="text-xs opacity-90 mt-3">
                    Send a short cover note and CV (portfolio/social samples if
                    available).
                  </div>
                </div> */}
              </div>

              <div className="mt-8 space-y-8">
                {/* Overview */}
                <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Opportunity Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hope Arthritis Foundation is looking for a motivated,
                    creative, and strategic Marketing &amp; Communications
                    Volunteer to help amplify our programs, strengthen our
                    brand, and support the promotion of our education and
                    awareness initiatives focused on childhood arthritis and
                    rheumatic diseases across Africa.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This role is ideal for someone who enjoys digital marketing,
                    storytelling, and purpose-driven work, and wants hands-on
                    experience in nonprofit communications.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Support the promotion and visibility of HAF programs, campaigns, and events",
                      "Assist in marketing and selling HAF education products and awareness materials",
                      "Contribute to brand building, messaging, and storytelling across platforms",
                      "Develop and implement digital marketing and content strategies",
                      "Manage and grow HAF’s social media presence (Instagram, TikTok, Facebook, X, LinkedIn, etc.)",
                      "Support email marketing campaigns, newsletters, and subscriber engagement",
                      "Assist with content creation (copy, visuals, video ideas) and content scheduling",
                      "Track basic engagement metrics and support reporting and learning",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Background, training, or strong interest in marketing, communications, digital marketing, media, or branding",
                      "Good understanding of social media platforms and digital trends",
                      "Ability to create engaging content and clear, consistent messaging",
                      "Familiarity with email marketing tools and content planning is an added advantage",
                      "Strong written communication skills and creativity",
                      "Interest in health advocacy, nonprofit work, or social impact",
                      "Reliable, proactive, and able to work independently in a remote setting",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You'll Gain */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What You’ll Gain
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Practical experience in nonprofit marketing, communications, and brand building",
                      "Exposure to program promotion, product marketing, and advocacy campaigns",
                      "Opportunity to contribute to meaningful work impacting children and families",
                      "Mentorship, professional growth, and networking opportunities",
                      "Certificate of volunteering and reference upon successful completion",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 px-4 py-4 bg-orange-50/40 border-l-4 border-orange-500 rounded-r-lg italic">
                  <div className="text-gray-700">
                    Hope Arthritis is an equal opportunity organization. We
                    welcome applications from passionate, creative, and
                    impact-driven individuals from diverse backgrounds.
                  </div>
                </div>
                {/* How to Apply */}
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-6 md:p-8 text-white shadow-xl">
                  <div className="flex flex-col  md:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">How to Apply</h3>
                      <p className="opacity-90">
                        Please send a short cover note and CV (and portfolio or
                        social media samples if available) to:
                      </p>
                      <a
                        href="mailto:info@hopearthritisfoundation.com"
                        className="inline-flex mt-3 font-semibold underline underline-offset-4"
                      >
                        info@hopearthritisfoundation.com
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="mailto:info@hopearthritisfoundation.com?subject=Application%20-%20Marketing%20%26%20Communications%20Volunteer"
                        className="bg-white w-30 text-orange-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-center"
                      >
                        Email Your Application
                      </a>
                      <div className="text-sm opacity-90 ">
                        Deadline:{" "}
                        <span className="font-semibold">23 January 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
