import React from "react";
import { teamMembers } from "../data/team";
import { TeamMemberCard } from "../components/TeamMember";

export const TeamSction: React.FC = () => {
  // Show only the first three team members for preview
  const previewMembers = teamMembers.slice(0, 3);

  return (
    <section id="team" className="section bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 gradient-title">Our Team</h1>
        <div className="w-24 h-1 bg-orange-500 mb-8" />
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Meet our dedicated panel of experts working together to improve the
          lives of children with arthritis and other rheumatic diseases across
          Africa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/team"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
          >
            View All Team Members
          </a>
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 gradient-title">Join Our Team</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We're always looking for passionate professionals who want to
                make a difference in the lives of children with rheumatic
                diseases. If you're interested in joining our team or
                volunteering, please get in touch.
              </p>
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://ext.same-assets.com/1778183887/2683089617.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};