import React from "react";

// Team Member Card Component
const TeamMember = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{role}</p>
      <button className="text-orange-500 border border-orange-500 px-4 py-1 rounded-md text-sm hover:bg-orange-50 transition-colors">
        View
      </button>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr Angela Migowa",
      role: "Paediatric Rheumatologist",
      image: "https://ext.same-assets.com/1778183887/1499519112.jpeg",
    },
    {
      id: 2,
      name: "Ms Christine Mutena",
      role: "Parent Representative, Co-Founder of Rare Disorders Kenya",
      image: "https://ext.same-assets.com/1778183887/689297721.jpeg",
    },
    {
      id: 3,
      name: "Dr Jeanette Dawa",
      role: "Public Health Expert",
      image: "https://ext.same-assets.com/1778183887/297103549.jpeg",
    },
    {
      id: 4,
      name: "Mr Martin Ongwen",
      role: "Physiotherapist",
      image: "https://ext.same-assets.com/1778183887/3784568976.jpeg",
    },
    {
      id: 5,
      name: "Mr Albert Yara",
      role: "Counsellor Psychologist",
      image: "https://ext.same-assets.com/1778183887/3850379101.jpeg",
    },
    {
      id: 6,
      name: "Ms Joan Chebii",
      role: "Nutritionist",
      image: "https://ext.same-assets.com/1778183887/3270737236.jpeg",
    },
  ];

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-title">The Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
          <p className="text-gray-600">Panel of Experts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
