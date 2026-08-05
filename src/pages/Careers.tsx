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
                      Administration &amp; Communications
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Volunteer
                  </h2>
                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">
                      Hope Arthritis Foundation
                    </span>{" "}
                    (HAF)
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                {/* Job Purpose */}
                <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Job Purpose
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Support Hope Arthritis Foundation to promote holistic
                    healthcare to children with rheumatic diseases across Kenya,
                    Africa and the globe through mentorship, academic
                    leadership; and offering psychosocial support to the
                    children and their families.
                  </p>
                </div>

                {/* Critical Accountabilities */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Critical Accountabilities
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Take charge of communication with both internal and external stakeholders.",
                      "Disseminate information about the Organization to the stakeholders and all other interested parties.",
                      "Organize for the organization's weekly, biweekly and monthly meetings.",
                      "Co-ordinate logistics of the Organization's virtual and in-person programs.",
                      "Implement activities as per the strategic plan pillars.",
                      "Draft and implement work plans as per the strategic plan pillars.",
                      "Prepare monitoring and evaluation reports as per the strategic plan pillars.",
                      "Prepare reports and minutes.",
                      "Perform all other duties as assigned.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills and Knowledge */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Skills and Knowledge
                  </h3>

                  {/* Educational Qualifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Educational Qualifications
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          A Bachelor's degree in Communications, Public
                          Relations, Business Administration, Project
                          Management, Public Health, Social Sciences,
                          Development Studies, Nonprofit Management, or a
                          related field from a recognized institution.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Additional training or certification in Project
                          Management, Monitoring and Evaluation (M&amp;E), Event
                          Management, Communications, or Office Administration
                          will be an added advantage.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Proficiency in Microsoft Office Suite (Word, Excel,
                          PowerPoint), Google Workspace, and virtual meeting
                          platforms such as Zoom and Microsoft Teams.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Knowledge of social media management and digital
                          communication tools is desirable.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Excellent written and spoken English. Knowledge of
                          Kiswahili is an added advantage.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Relevant Experience */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Relevant Experience
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          At least one (1) year of experience in administration,
                          project coordination, communications, nonprofit
                          management, or a related field (internships and
                          volunteer experience will be considered).
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Experience coordinating meetings, workshops,
                          conferences, or community engagement activities.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Experience preparing reports, meeting minutes, work
                          plans, and activity reports.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Experience communicating with multiple stakeholders
                          including healthcare professionals, donors,
                          volunteers, government agencies, patients, and
                          community organizations.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Experience coordinating both virtual and physical
                          events and managing event logistics.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Demonstrated experience supporting implementation of
                          organizational projects or strategic initiatives.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Basic understanding of monitoring and evaluation
                          principles, including data collection, documentation,
                          and reporting.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          Experience working within a non-governmental
                          organization (NGO), charity, healthcare institution,
                          or community-based organization will be an added
                          advantage.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Personal Characteristics & Behaviours */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Personal Characteristics &amp; Behaviours
                    </h4>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Professional Competencies
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Excellent verbal and written communication skills.",
                          "Strong organizational and planning skills.",
                          "Exceptional attention to detail.",
                          "Ability to multitask and prioritize competing assignments.",
                          "Excellent interpersonal and stakeholder engagement skills.",
                          "Strong report writing and documentation skills.",
                          "Ability to work independently with minimal supervision.",
                          "Good problem-solving and critical thinking skills.",
                          "Strong time management skills with the ability to meet deadlines.",
                          "High level of computer literacy and digital competence.",
                        ].map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Personal Attributes
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          "Passion for improving the lives of children and young people living with arthritis and other rheumatic diseases.",
                          "Commitment to the mission, vision, and values of Hope Arthritis Foundation.",
                          "High ethical standards, honesty, and integrity.",
                          "Professionalism and confidentiality in handling organizational information.",
                          "Positive attitude with a willingness to learn and grow.",
                          "Self-motivated, proactive, and resourceful.",
                          "Flexible and adaptable in a dynamic working environment.",
                          "Ability to work collaboratively within multidisciplinary and multicultural teams.",
                          "Strong sense of accountability and ownership.",
                          "Creativity and innovation in supporting organizational activities.",
                          "Compassion, empathy, and respect for patients, families, volunteers, and partners.",
                          "Commitment to volunteerism, community service, and continuous professional development.",
                        ].map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Location and Application */}
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-6 md:p-8 text-white shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">How to Apply</h3>
                      <div className="space-y-3 text-white/90">
                        <p>
                          <span className="font-semibold">Location:</span> The
                          Volunteer shall be based in Nairobi, Kenya.
                        </p>
                        <p>
                          <span className="font-semibold">
                            Application Deadline:
                          </span>{" "}
                          21st August 2026
                        </p>
                        <p className="mt-2">
                          Interested persons should send the application
                          documents listed below to:
                        </p>
                        <a
                          href="mailto:info@hopearthritisfoundation.com"
                          className="inline-flex font-semibold underline underline-offset-4 text-white hover:text-orange-100 transition-colors"
                        >
                          info@hopearthritisfoundation.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">
                        Required Documents:
                      </h4>
                      <ul className="space-y-1 text-white/90 list-disc list-inside">
                        <li>Cover Letter</li>
                        <li>Curriculum Vitae</li>
                      </ul>
                    </div>

                    <a
                      href="mailto:info@hopearthritisfoundation.com?subject=Application%20-%20Volunteer%20Position"
                      className="inline-block bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-center"
                    >
                      Email Your Application
                    </a>
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
