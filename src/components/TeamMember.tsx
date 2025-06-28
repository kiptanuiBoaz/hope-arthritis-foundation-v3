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
  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group transform hover:-translate-y-1">
    <div className="h-74 overflow-hidden">
      <img
        src={`/img/panels/${image}`}
        alt={name}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">{name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{title}</p>
      <Link
        to={`/team/${id}`}
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center w-full"
      >
        View Profile
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
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