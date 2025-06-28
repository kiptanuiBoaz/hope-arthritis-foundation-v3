import React from "react";
import { teamMembers } from "../data/team";
import { TeamMemberCard } from "../components/TeamMember";

const TeamAll: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 gradient-title">Meet Our Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated panel of experts working together to improve the lives of children 
            with arthritis and other rheumatic diseases across Africa and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 opacity-90">
              Interested in contributing to our cause? We welcome passionate professionals 
              who want to make a difference in pediatric rheumatology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="https://app.hopearthritisfoundation.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Visit Our Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAll;