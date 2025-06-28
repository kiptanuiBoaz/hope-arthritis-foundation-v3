import React from "react";
import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../data/team";

const TeamDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Team member not found</h2>
        <p className="mb-6">
          The team member you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/team" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <Link
            to="/team"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-4 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Team
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 flex flex-col items-center border border-gray-100">
          <img
            src={`/img/panels/${member.image}`}
            alt={member.name}
            className="w-48 h-auto object-cover rounded-2xl mb-6 shadow-lg"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center gradient-title">
            {member.name}
          </h1>
          <h2 className="text-xl text-orange-600 mb-6 text-center font-medium">{member.title}</h2>
          <div className="w-24 h-1 bg-orange-500 mb-8" />
          <div
            className="prose max-w-none text-gray-700 leading-relaxed text-center"
            style={{ whiteSpace: "pre-line" }}
          >
            {member.bio}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/team"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              View All Team Members
            </Link>
            <Link
              to="/contact"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;