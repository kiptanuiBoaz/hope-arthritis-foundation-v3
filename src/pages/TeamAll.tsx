import React from "react";
import { teamMembers } from "../data/team";
import { TeamMemberCard } from "../components/TeamMember";

const TeamAll: React.FC = () => {
  return (
    <section className="section bg-white min-h-screen">
      <div className="container mx-auto py-12">
        <h2 className="section-title text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default TeamAll;
