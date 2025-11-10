import React, { useState, useEffect } from "react";

const GetStarted = () => {
  // NEW: tab state
  const [activeTab, setActiveTab] = useState<"assessment" | "join">(
    "assessment"
  );

  // NEW: normalize + URL helpers
  const normalizeTab = (value: string | null): "assessment" | "join" | null => {
    if (!value) return null;
    const v = value.toLowerCase();
    return v === "join" ? "join" : v === "assessment" ? "assessment" : null;
  };

  const updateTabInUrl = (next: "assessment" | "join") => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", next);
    if (!url.hash) {
      url.hash =
        next === "join"
          ? "#join-community-section"
          : "#self-assessment-section";
    }
    window.history.replaceState({}, "", url.toString());
  };

  // Set initial tab from URL and react to back/forward
  useEffect(() => {
    const applyFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const t = normalizeTab(params.get("tab"));
      if (t) setActiveTab(t);
    };
    applyFromUrl();
    window.addEventListener("popstate", applyFromUrl);
    return () => window.removeEventListener("popstate", applyFromUrl);
  }, []);

  return (
    <section
      id="services"
      className="section bg-gradient-to-br from-gray-50 to-orange-50/30"
    >
      {/* Get Started Today Section - Enhanced with Self-Assessment */}
      <div
        id="intro-forms"
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 gradient-title">
            Get Started Today
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take the first step in your journey with us by completing one of our
            introductory forms or assessment tools
          </p>
        </div>

        {/* Tabs Header */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 border border-gray-200">
            <button
              type="button"
              onClick={() => {
                setActiveTab("assessment");
                updateTabInUrl("assessment");
                document
                  .getElementById("self-assessment-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                activeTab === "assessment"
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-700 hover:text-orange-600"
              }`}
              aria-selected={activeTab === "assessment"}
              role="tab"
            >
              Self-Assessment Tools
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("join");
                updateTabInUrl("join");
                document
                  .getElementById("join-community-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                activeTab === "join"
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-700 hover:text-orange-600"
              }`}
              aria-selected={activeTab === "join"}
              role="tab"
            >
              Join Our Community
            </button>
          </div>
        </div>

        {/* Self-Assessment Section (tab content) */}
        <div
          id="self-assessment-section"
          className={`mb-12 ${activeTab !== "assessment" ? "hidden" : ""}`}
          role="tabpanel"
          aria-hidden={activeTab !== "assessment"}
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-3 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Self-Assessment Tools
            </h4>
            <p className="text-gray-600">
              Evaluate current practices and identify areas for improvement in
              pediatric rheumatology care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="/assesment_forms/health_institution_gap_analysis.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 text-center transition-all duration-300 border border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                Institution Assessment
              </h5>
              <p className="text-gray-600 text-sm">
                For healthcare institutions to evaluate their pediatric
                rheumatology services
              </p>
            </a>

            <a
              href="/assesment_forms/health_worker_gap_analysis.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 rounded-2xl p-6 text-center transition-all duration-300 border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                Healthcare Worker Assessment
              </h5>
              <p className="text-gray-600 text-sm">
                For healthcare professionals to assess their knowledge and
                skills
              </p>
            </a>

            <a
              href="/assesment_forms/patient_gap_analysis.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-brandgreen-50 to-brandgreen-100 hover:from-brandgreen-100 hover:to-brandgreen-200 rounded-2xl p-6 text-center transition-all duration-300 border border-brandgreen-200 hover:border-brandgreen-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-brandgreen-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-brandgreen-600 transition-colors">
                Guardian Assessment
              </h5>
              <p className="text-gray-600 text-sm">
                For parents and guardians to evaluate their support needs
              </p>
            </a>
          </div>
        </div>

        {/* Registration Forms Section (tab content) */}
        <div
          id="join-community-section"
          className={`${activeTab !== "join" ? "hidden" : ""}`}
          role="tabpanel"
          aria-hidden={activeTab !== "join"}
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-3 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Join Our Community
            </h4>
            <p className="text-gray-600">
              Register to access our platform and connect with our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe-xNHL50YF6RvSyICDThRjVYj6_ddgixm8nVp_gL7rl_P9LA/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-2xl p-6 text-center transition-all duration-300 border border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                Health Institution Registration
              </h5>
              <p className="text-gray-600 text-sm">
                For healthcare institutions looking to partner with us
              </p>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnSXTUHPDP2oq-LBb_7Fo2oGRh78udnH3G2sgmTgighijsYQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 rounded-2xl p-6 text-center transition-all duration-300 border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                Health Worker Registration
              </h5>
              <p className="text-gray-600 text-sm">
                For healthcare professionals seeking training and resources
              </p>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCpxbRdXueU2U0x1Rus-zw-_f4zizytAwrjvBCSRgr0x0OjQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-brandgreen-50 to-brandgreen-100 hover:from-brandgreen-100 hover:to-brandgreen-200 rounded-2xl p-6 text-center transition-all duration-300 border border-brandgreen-200 hover:border-brandgreen-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-brandgreen-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h5 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-brandgreen-600 transition-colors">
                Parent/Guardian Registration
              </h5>
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

export default GetStarted;
