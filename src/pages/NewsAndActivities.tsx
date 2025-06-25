import React from 'react';
import { Link } from 'react-router-dom';

// ActivityCard Component
interface ActivityCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  date: string;
  tag?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
  date,
  tag
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        {tag && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <h4 className="text-lg font-medium mb-3 text-gray-700">{subtitle}</h4>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Link
            to={`/activities/${id}`}
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Mock data for activities
const activitiesData: ActivityCardProps[] = [
  {
    id: 'health-workers-bootcamp',
    title: 'HEALTH WORKERS BOOTCAMP',
    subtitle: 'A Comprehensive Approach to JIA Diagnosis',
    description: 'This program equips healthcare workers with tools to accurately diagnose and manage conditions like Juvenile Idiopathic Arthritis, SLE, JDM, and other pediatric rheumatic diseases.',
    image: '/images/activities/bootcamp.jpg',
    date: '28-29 March 2025',
    tag: 'Up Coming'
  },
  {
    id: 'joints-kidneys-collide',
    title: 'WHEN THE JOINTS AND THE KIDNEYS COLLIDE',
    subtitle: 'Understanding the Link Between Childhood Arthritis and Kidney Health',
    description: 'Join Dr. Francis Furia, a Pediatric Nephrologist from Tanzania, in conversation with Angela Migowa, CEO of Hope Arthritis Foundation - Kenya, as they explore the crucial relationship between childhood arthritis and kidney health.',
    image: '/images/activities/kidneys.jpg',
    date: '16th April, 2025',
    tag: 'Recording Available'
  },
  {
    id: 'mysteries-childhood-arthritis',
    title: 'UNRAVELING THE MYSTERIES OF CHILDHOOD ARTHRITIS',
    subtitle: 'Beyond the Joints: Unveiling Diseases Linked to Arthritis',
    description: 'This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Faleye Ayodele, Nigeria\'s first Pediatric Rheumatologist on how to detect and manage childhood arthritis.',
    image: '/images/activities/mysteries.jpg',
    date: '29th January 2025',
    tag: 'Recording Available'
  },
  {
    id: 'heartfelt-talk',
    title: 'HEARTFELT TALK',
    subtitle: 'The Link Between Rheumatology & Your Heart',
    description: 'Join our X Space Conversation with Dr. Angela Migowa and Dr. Esther Kimani as they discuss the important connection between rheumatic diseases and cardiovascular health in children.',
    image: '/images/activities/heartfelt.jpg',
    date: '26th February 2025',
    tag: 'Recording Available'
  },
  {
    id: 'hope-and-healing',
    title: 'HOPE AND HEALING',
    subtitle: 'Signs and Symptoms of JIA: Treatment and Nursing Care',
    description: 'A special webinar featuring Dr. Angela Migowa, Dr. Raffaela Carlomagno, and Charlene Hopper discussing the signs, symptoms, treatment options, and nursing care for Juvenile Idiopathic Arthritis.',
    image: '/images/activities/healing.jpg',
    date: '14th September, 2024',
    tag: 'Past'
  },
  {
    id: 'jia-diagnosis',
    title: 'JIA DIAGNOSIS UNLOCKED',
    subtitle: 'An Online Healthcare Worker\'s Guide to Early Diagnosis and Management',
    description: 'This comprehensive online course provides healthcare workers with the tools and knowledge needed for early diagnosis and effective management of Juvenile Idiopathic Arthritis.',
    image: '/images/activities/diagnosis.jpg',
    date: 'October 15th - 24th, 2024',
    tag: 'Past'
  }
];

const NewsAndActivities: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">News & Activities...</h1>
        <div className="w-24 h-1 bg-orange-500 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              title={activity.title}
              subtitle={activity.subtitle}
              description={activity.description}
              image={activity.image}
              date={activity.date}
              tag={activity.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndActivities;
