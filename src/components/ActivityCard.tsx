import { Link } from "react-router-dom";

interface ActivityCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  badgeColor: string;
  link: string;
  date: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  title,
  description,
  image,
  status,
  badgeColor,
  link,
  date,
}) => {
  const isExternal = link.startsWith("http");
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`${badgeColor} text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg`}
          >
            {status}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formattedDate}
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center">
          {isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center group/link"
            >
              View More
              <svg
                className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/activities/${id}`}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center group/link"
            >
              View More
              <svg
                className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
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
          )}
        </div>
      </div>
    </div>
  );
};
