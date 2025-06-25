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
        <Link to="/team" className="btn-primary">
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className=" mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <Link
            to="/team"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
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
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center">
          <img
            src={`/img/panels/${member.image}`}
            alt={member.name}
            className="w-40 h-auto object-cover rounded-full mb-6"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {member.name}
          </h1>
          <h2 className="text-xl text-gray-700 mb-4">{member.title}</h2>
          <div
            className="prose max-w-none text-gray-700"
            style={{ whiteSpace: "pre-line" }}
          >
            {member.bio}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;
