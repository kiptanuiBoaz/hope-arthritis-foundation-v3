import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'health-workers-bootcamp',
    title: 'Health Workers Bootcamp',
    statusColor: 'bg-green-500',
    description:
      'This program equips healthcare workers with tools to accurately diagnose and manage conditions like Juvenile Idiopathic Arthritis, SLE, JDM, and Vasculitides.',
    details: `Through practical case studies, participants will master diagnosis, streamline treatment plans, and improve patient outcomes. The course includes valuable resources like diagnostic sheets, management algorithms, and lifetime access to a virtual support group. Take this opportunity to enhance your expertise and transform children's lives. Register now to secure your spot!`,
    image: '/activities/health-workers-bootcamp.webp',
    status: 'Up Coming',
    link: '/news-activities/jia_sept_activity_details.html',
    altText: 'Hope and Healing',
    badgeColor: 'bg-green-500',
    date: '2025-03-28'
  },
  {
    id: 'haf-april-twitter-space',
    title: 'When the Joints and the Kidneys Collide',
    statusColor: 'bg-orange-500',
    description:
      'Join Dr. Francis Furia, a Pediatric Nephrologist from Tanzania, in conversation with Angela Migowa, CEO of Hope Arthritis Foundation - Kenya, as they explore the crucial connection between childhood arthritis and kidney health.',
    details: `The Twitter Space held on April 16th, 2025 from 6:30 to 7:30 PM EAT brings together experts to discuss the important relationship between childhood arthritis and kidney health.`,
    image: '/activities/haf_twitter_april.webp',
    status: 'Recording Available',
    link: 'https://x.com/i/spaces/1zqKVjpwMQPKB',
    altText: 'Twitter space',
    badgeColor: 'bg-blue-500',
    date: '2025-04-16'
  },
  {
    id: 'hope-athritis-twitter-space',
    title: 'Unraveling the Mysteries of Childhood Arthritis',
    statusColor: 'bg-orange-500',
    description:
      'This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Faleye Ayodele, Nigeria\'s first Pediatric Rheumatologist.',
    details: `The Twitter Space held on January 29th from 6:30 to 7:30 PM EAT is now available as a recording. Don't miss this opportunity to learn how YOU can support the pan-African agenda for better pediatric care. Access the recording now!`,
    image: '/twitterSpace.webp',
    status: 'Recording Available',
    link: 'https://x.com/i/spaces/1DXxydddrRRJM',
    altText: 'Twitter space',
    badgeColor: 'bg-blue-500',
    date: '2025-01-29'
  },
  {
    id: 'heart-felt-twitter-space',
    title: 'HEART FELT TALK - The Link between Rheumatology and your Heart',
    statusColor: 'bg-orange-500',
    description:
      'This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Esther Kimani',
    details: `The Twitter Space held on February 26th from 6:30 to 7:30 PM EAT is now available as a recording. Don't miss this opportunity to learn how YOU can support the pan-African agenda for better pediatric care. Access the recording now!`,
    image: '/heartfelt_talk.webp',
    status: 'Recording Available',
    link: 'https://x.com/i/spaces/1RDGlzVrpmzxL',
    altText: 'Twitter space',
    badgeColor: 'bg-blue-500',
    date: '2025-02-26'
  },
  {
    id: 'hope-healing',
    title: 'Hope and Healing',
    statusColor: 'bg-orange-500',
    description:
      'A Master Class to empower guardians in the fight against childhood arthritis',
    details: `Dear Guardians, We are proud to unveil the Hope and Healing Master Class, a pioneering educational initiative designed to empower parents/caregivers/guardians in the fight against childhood arthritis. This two-part series aims to provide comprehensive insights and practical strategies for those caring for children with Juvenile Idiopathic Arthritis (JIA).`,
    image: '/activities/jia/JIA_Masterclass_14th_Sept.webp',
    status: 'Past',
    link: '/news-activities/hope-healing',
    altText: 'Hope and Healing',
    badgeColor: 'bg-orange-500',
    date: '2024-09-14'
  },
  {
    id: 'jia-diagnosis',
    title: 'JIA Diagnosis Unlocked',
    statusColor: 'bg-orange-500',
    description:
      'A Healthcare Worker\'s Guide to Early Diagnosis and Management',
    details:
      'Dear Healthcare Worker, A practical implementation through case studies on the signs, symptoms and management strategies of Juvenile Idiopathic Arthritis. Participants will participate in our step-by-step strategy that will help them effectively care for Juvenile Idiopathic Arthritis patients.',
    image: '/activities/October_Masterclass.webp',
    status: 'Past',
    link: '/news-activities/jia-diagnosis',
    altText: 'JIA Diagnosis Unlocked',
    badgeColor: 'bg-orange-500',
    date: '2024-10-15'
  },
  {
    id: 'academy-signup',
    title: 'Hope Platform Academy Sign Up',
    statusColor: 'bg-green-500',
    description:
      'A Master Class to empower guardians in the fight against childhood arthritis',
    details: `This is a guide to how you would go about accessing the Hope Academy Platform`,
    image: '/activities/academy_screen2.webp',
    status: 'Tutorial Video',
    link: '/news-activities/jia_sept_activity_details.html',
    altText: 'Hope Platform Academy Sign Up',
    badgeColor: 'bg-green-500',
    date: '2024-12-01'
  },
  {
    id: 'ignite-wellness',
    title: 'Ignite Wellness',
    statusColor: 'bg-orange-500',
    description: 'Virtual Academy Launch For Global Bone Health and Innovation',
    details: `Dear Guardians, Your child's well-being is our top priority. Join us at the launch of the Virtual Academy to gain valuable knowledge on promoting bone health. Empower yourself with the latest insights and resources. The event is free of charge! See you there!`,
    image: '/activities/academy_launch.webp',
    status: 'Past',
    link: '/news-activities/ignite-wellness',
    altText: 'Ignite Wellness',
    badgeColor: 'bg-orange-500',
    date: '2024-09-09'
  }
];

// Activity Card Component with improved design
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

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  title,
  description,
  image,
  status,
  badgeColor,
  link,
  date
}) => {
  const isExternal = link.startsWith('http');
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
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
          <span className={`${badgeColor} text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg`}>
            {status}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
              <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <Link
              to={`/activities/${id}`}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center group/link"
            >
              View More
              <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const NewsAndActivities: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Up Coming', 'Recording Available', 'Past', 'Tutorial Video'];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'All' || article.status === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            News & Activities
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest events, workshops, and educational activities designed to advance 
            pediatric rheumatology care across Africa and beyond.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filters.map(filterOption => (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      filter === filterOption
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    {filterOption}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-orange-600">{filteredArticles.length}</span> activities
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredArticles.map((article) => (
            <ActivityCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              status={article.status}
              badgeColor={article.badgeColor}
              link={article.link}
              date={article.date}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="h-24 w-24 text-gray-300 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No activities found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filter options.</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-lg mb-6 opacity-90">
              Don't miss out on our upcoming events and educational opportunities. Join our community today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.hopearthritisfoundation.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join Our Platform
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndActivities;