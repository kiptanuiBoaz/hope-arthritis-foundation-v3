import React from "react";
import { teamMembers } from "../data/team";
import { TeamMemberCard } from "../components/TeamMember";

export const TeamSction: React.FC = () => {
  // Show only the first three team members for preview
  const previewMembers = teamMembers.slice(0, 3);

  return (
    <section id="team" className="section bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Team</h1>
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

        <div className="flex justify-center mt-10">
          <a
            href="/team"
            className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold"
          >
            View All Team Members
          </a>
        </div>

        <div className="mt-16 bg-orange-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-4">
                We're always looking for passionate professionals who want to
                make a difference in the lives of children with rheumatic
                diseases. If you're interested in joining our team or
                volunteering, please get in touch.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Contact Us
              </a>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://ext.same-assets.com/1778183887/2683089617.jpeg"
                alt="Team collaboration"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};