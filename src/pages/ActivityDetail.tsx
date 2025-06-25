import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for activities (should match the data in NewsAndActivities.tsx)
const activitiesData = [
  {
    id: 'health-workers-bootcamp',
    title: 'HEALTH WORKERS BOOTCAMP',
    subtitle: 'A Comprehensive Approach to JIA Diagnosis',
    description: 'This program equips healthcare workers with tools to accurately diagnose and manage conditions like Juvenile Idiopathic Arthritis, SLE, JDM, and other pediatric rheumatic diseases.',
    fullDescription: `
      <p>The Health Workers Bootcamp is an intensive training program designed to empower healthcare professionals with the knowledge and skills needed to accurately diagnose and effectively manage pediatric rheumatic diseases.</p>

      <p>Through practical case studies, participants will master diagnosis, streamline treatment plans, and improve patient outcomes. The course includes valuable resources like diagnostic sheets, management algorithms, and lifetime access to a virtual support group.</p>

      <p>Take this opportunity to enhance your expertise and transform children's lives. Register now to secure your spot!</p>

      <h3>What You Will Learn:</h3>
      <ul>
        <li>Early detection signs of Juvenile Idiopathic Arthritis (JIA)</li>
        <li>Differential diagnosis between JIA and other conditions</li>
        <li>Treatment protocols and medication management</li>
        <li>Long-term care strategies and patient monitoring</li>
        <li>Interdisciplinary approaches to pediatric rheumatology</li>
      </ul>

      <h3>Who Should Attend:</h3>
      <ul>
        <li>Pediatricians</li>
        <li>General Practitioners</li>
        <li>Nurses</li>
        <li>Physical Therapists</li>
        <li>Healthcare Students</li>
      </ul>
    `,
    image: '/images/activities/bootcamp.jpg',
    date: '28-29 March 2025',
    location: 'Online - Zoom Webinar',
    time: '9:00 AM - 4:00 PM EAT',
    speakers: [
      { name: 'Dr. Angela Migowa', title: 'Pediatric Rheumatologist, CEO & Founder - HAF, Kenya' },
      { name: 'Dr. Francis Furia', title: 'Pediatric Nephrologist, Tanzania' }
    ],
    registrationLink: '#',
    tag: 'Up Coming'
  },
  {
    id: 'joints-kidneys-collide',
    title: 'WHEN THE JOINTS AND THE KIDNEYS COLLIDE',
    subtitle: 'Understanding the Link Between Childhood Arthritis and Kidney Health',
    description: 'Join Dr. Francis Furia, a Pediatric Nephrologist from Tanzania, in conversation with Angela Migowa, CEO of Hope Arthritis Foundation - Kenya, as they explore the crucial relationship between childhood arthritis and kidney health.',
    fullDescription: `
      <p>The Twitter Space held on April 16th, 2025 from 6:30 to 7:30 PM EAT brings together experts to discuss the important relationship between childhood arthritis and kidney health.</p>

      <p>Many children with rheumatic diseases can develop kidney complications that require special attention and care. Understanding this relationship is crucial for both healthcare providers and parents to ensure comprehensive treatment approaches.</p>

      <p>During this interactive session, our experts will discuss:</p>
      <ul>
        <li>How arthritis treatments can affect kidney function</li>
        <li>Warning signs of kidney involvement in children with arthritis</li>
        <li>Preventive measures and monitoring protocols</li>
        <li>Latest research findings on this important comorbidity</li>
      </ul>

      <p>A recording will be made available after the live session for those unable to attend.</p>
    `,
    image: '/images/activities/kidneys.jpg',
    date: '16th April, 2025',
    location: 'Twitter/X Space',
    time: '6:30 PM - 7:30 PM EAT',
    speakers: [
      { name: 'Dr. Angela Migowa', title: 'CEO & Founder - HAF, Kenya' },
      { name: 'Dr. Francis Furia', title: 'Pediatric Nephrologist, Tanzania' }
    ],
    registrationLink: '#',
    tag: 'Recording Available'
  },
  {
    id: 'mysteries-childhood-arthritis',
    title: 'UNRAVELING THE MYSTERIES OF CHILDHOOD ARTHRITIS',
    subtitle: 'Beyond the Joints: Unveiling Diseases Linked to Arthritis',
    description: 'This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Faleye Ayodele, Nigeria\'s first Pediatric Rheumatologist on how to detect and manage childhood arthritis.',
    fullDescription: `
      <p>The Twitter Space held on January 29th from 6:30 to 7:30 PM EAT is now available as a recording. Don't miss this opportunity to learn how YOU can support the pan-African agenda for better pediatric care.</p>

      <p>Childhood arthritis remains misunderstood and often misdiagnosed across many regions in Africa. This session provides valuable insights into:</p>

      <ul>
        <li>Common misconceptions about childhood arthritis</li>
        <li>Early detection signs that parents and healthcare workers should know</li>
        <li>The systemic nature of many pediatric rheumatic diseases</li>
        <li>Current treatment approaches and accessibility challenges</li>
        <li>How stakeholders can support advocacy efforts</li>
      </ul>

      <p>Dr. Faleye Ayodele shares his pioneering experience as Nigeria's first Pediatric Rheumatologist and provides practical knowledge for healthcare workers across Africa.</p>

      <p>Access the recording now!</p>
    `,
    image: '/images/activities/mysteries.jpg',
    date: '29th January 2025',
    location: 'Twitter/X Space',
    time: '6:30 PM - 7:30 PM EAT',
    speakers: [
      { name: 'Dr. Angela Migowa', title: 'CEO/Founder - HAF' },
      { name: 'Dr. Faleye Ayodele', title: 'Pediatric Rheumatologist, Nigeria' }
    ],
    recordingLink: '#',
    tag: 'Recording Available'
  },
  {
    id: 'heartfelt-talk',
    title: 'HEARTFELT TALK',
    subtitle: 'The Link Between Rheumatology & Your Heart',
    description: 'Join our X Space Conversation with Dr. Angela Migowa and Dr. Esther Kimani as they discuss the important connection between rheumatic diseases and cardiovascular health in children.',
    fullDescription: `
      <p>The heart and immune system have complex interactions that can significantly impact children with rheumatic diseases. This important X Space conversation brings together rheumatology and cardiology expertise to explore these connections.</p>

      <p>Dr. Angela Migowa, a leading Pediatric Rheumatologist, and Dr. Esther Kimani, Consultant Pediatric Cardiologist, will discuss:</p>

      <ul>
        <li>Cardiovascular complications in children with rheumatic diseases</li>
        <li>Screening recommendations and monitoring protocols</li>
        <li>How medications for arthritis can affect heart health</li>
        <li>Warning signs parents and healthcare providers should watch for</li>
        <li>Preventive strategies and lifestyle modifications</li>
      </ul>

      <p>This conversation is crucial for healthcare providers, parents, and stakeholders involved in pediatric rheumatology care. A recording will be available after the live session.</p>
    `,
    image: '/images/activities/heartfelt.jpg',
    date: '26th February 2025',
    location: 'Twitter/X Space',
    time: '6:30 PM - 7:30 PM EAT',
    speakers: [
      { name: 'Dr. Angela Migowa', title: 'CEO/Founder - HAF, Kenya' },
      { name: 'Dr. Esther Kimani', title: 'Consultant Pediatric Cardiologist' }
    ],
    registrationLink: '#',
    tag: 'Recording Available'
  },
  {
    id: 'hope-and-healing',
    title: 'HOPE AND HEALING',
    subtitle: 'Signs and Symptoms of JIA: Treatment and Nursing Care',
    description: 'A special webinar featuring Dr. Angela Migowa, Dr. Raffaela Carlomagno, and Charlene Hopper discussing the signs, symptoms, treatment options, and nursing care for Juvenile Idiopathic Arthritis.',
    fullDescription: `
      <p>This past webinar brought together three leading experts in pediatric rheumatology to discuss comprehensive approaches to Juvenile Idiopathic Arthritis (JIA) care.</p>

      <p>The session covered:</p>

      <ul>
        <li>Key signs and symptoms of different JIA subtypes</li>
        <li>Current treatment protocols and medication management</li>
        <li>The critical role of nursing care in JIA management</li>
        <li>Patient monitoring and follow-up recommendations</li>
        <li>Case presentations and practical management scenarios</li>
      </ul>

      <p>This educational session was designed for healthcare professionals including physicians, nurses, and allied health professionals working with children who have or may have JIA.</p>

      <p>The recording of this session is now available for educational purposes.</p>
    `,
    image: '/images/activities/healing.jpg',
    date: '14th September, 2024',
    location: 'Online Webinar',
    time: '11:00 AM - 12:30 PM EAT',
    speakers: [
      { name: 'Dr. Angela Migowa', title: 'Pediatric Rheumatologist, Kenya' },
      { name: 'Dr. Raffaela Carlomagno', title: 'Pediatric Rheumatologist, Switzerland' },
      { name: 'Charlene Hopper', title: 'Pediatric Rheumatology Nurse, Canada' }
    ],
    recordingLink: '#',
    tag: 'Past'
  },
  {
    id: 'jia-diagnosis',
    title: 'JIA DIAGNOSIS UNLOCKED',
    subtitle: 'An Online Healthcare Worker\'s Guide to Early Diagnosis and Management',
    description: 'This comprehensive online course provides healthcare workers with the tools and knowledge needed for early diagnosis and effective management of Juvenile Idiopathic Arthritis.',
    fullDescription: `
      <p>This comprehensive online educational program was designed to equip healthcare workers with the knowledge and tools needed for early diagnosis and effective management of Juvenile Idiopathic Arthritis (JIA).</p>

      <p>The program covered:</p>

      <ul>
        <li>Classification and pathophysiology of JIA</li>
        <li>Clinical presentation and diagnostic approaches</li>
        <li>Laboratory and imaging considerations</li>
        <li>Treatment strategies and monitoring protocols</li>
        <li>Multidisciplinary management approaches</li>
        <li>Case-based learning and interactive discussions</li>
      </ul>

      <p>This program was specially crafted for physicians, nurses, medical officers, and healthcare students who want to improve their knowledge and skills in pediatric rheumatology.</p>

      <p>The course materials and recordings are now available as educational resources.</p>
    `,
    image: '/images/activities/diagnosis.jpg',
    date: 'October 15th - 24th, 2024',
    location: 'Online Course',
    time: '6:30 PM - 7:30 PM EAT (Daily Sessions)',
    speakers: [
      { name: 'Multiple Faculty', title: 'Pediatric Rheumatology Specialists' }
    ],
    materialsLink: '#',
    tag: 'Past'
  }
];

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const activity = activitiesData.find(activity => activity.id === id);

  if (!activity) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Activity not found</h2>
        <p className="mb-6">The activity you're looking for doesn't exist or has been removed.</p>
        <Link to="/activities" className="btn-primary">
          Back to Activities
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/activities" className="flex items-center text-orange-500 hover:text-orange-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News & Activities
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-72 md:h-96 object-cover"
            />
            {activity.tag && (
              <div className="absolute top-6 right-6 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {activity.tag}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{activity.title}</h1>
              <h2 className="text-xl md:text-2xl text-gray-700 mb-4">{activity.subtitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-700">Date</h3>
                  <p>{activity.date}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-700">Location</h3>
                  <p>{activity.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-700">Time</h3>
                  <p>{activity.time}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">About This Event</h3>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: activity.fullDescription }}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">{speaker.name}</h4>
                      <p className="text-sm text-gray-600">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {activity.registrationLink && (
                <a
                  href={activity.registrationLink}
                  className="btn-primary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              )}

              {activity.recordingLink && (
                <a
                  href={activity.recordingLink}
                  className="btn-secondary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Recording
                </a>
              )}

              {activity.materialsLink && (
                <a
                  href={activity.materialsLink}
                  className="btn-secondary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Materials
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetail;
