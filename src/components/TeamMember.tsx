import { Link } from "react-router-dom";

// Team Member Card Component
interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  image: string;
}

export const TeamMemberCard: React.FC<TeamMemberProps> = ({
  id,
  name,
  title,
  image,
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-74 overflow-hidden">
      <img
        src={`/img/panels/${image}`}
        alt={name}
        className="w-full h-auto object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <Link
        to={`/team/${id}`}
        className="text-orange-500 border border-orange-500 px-4 py-1 rounded-md text-sm hover:bg-orange-50 transition-colors inline-flex items-center mt-2"
      >
        View
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  </div>
);
