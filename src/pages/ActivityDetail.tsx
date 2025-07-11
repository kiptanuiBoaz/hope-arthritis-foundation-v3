import React from "react";
import { useParams, Link } from "react-router-dom";

// Activities data with all the information needed
const activitiesData = [
  {
    id: "haf-april-twitter-space",
    title: "WHEN THE JOINTS AND THE KIDNEYS COLLIDE",
    subtitle:
      "Understanding the Link Between Childhood Arthritis and Kidney Health",
    description:
      "Join Dr. Francis Furia, a Pediatric Nephrologist from Tanzania, in conversation with Angela Migowa, CEO of Hope Arthritis Foundation - Kenya, as they explore the crucial connection between childhood arthritis and kidney health.",
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
    image: "/activities/haf_twitter_april.webp",
    date: "16th April, 2025",
    location: "Twitter/X Space",
    time: "6:30 PM - 7:30 PM EAT",
    speakers: [
      { name: "Dr. Angela Migowa", title: "CEO & Founder - HAF, Kenya" },
      { name: "Dr. Francis Furia", title: "Pediatric Nephrologist, Tanzania" },
    ],
    recordingLink: "https://x.com/i/spaces/1zqKVjpwMQPKB",
    tag: "Recording Available",
    ctaLabel: "Access Recording",
  },
  {
    id: "hope-athritis-twitter-space",
    title: "UNRAVELING THE MYSTERIES OF CHILDHOOD ARTHRITIS",
    subtitle: "Beyond the Joints: Unveiling Diseases Linked to Arthritis",
    description:
      "This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Faleye Ayodele, Nigeria's first Pediatric Rheumatologist.",
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
    image: "/twitterSpace.webp",
    date: "29th January, 2025",
    location: "Twitter/X Space",
    time: "6:30 PM - 7:30 PM EAT",
    speakers: [
      { name: "Dr. Angela Migowa", title: "CEO/Founder - HAF" },
      {
        name: "Dr. Faleye Ayodele",
        title: "Pediatric Rheumatologist, Nigeria",
      },
    ],
    recordingLink: "https://x.com/i/spaces/1DXxydddrRRJM",
    tag: "Recording Available",
    ctaLabel: "Access Recording",
  },
  {
    id: "heart-felt-twitter-space",
    title: "HEARTFELT TALK",
    subtitle: "The Link Between Rheumatology & Your Heart",
    description:
      "This Twitter Space has concluded, but you can access the recording to gain valuable insights from Dr. Esther Kimani.",
    fullDescription: `
      <p>The Twitter Space held on February 26th from 6:30 to 7:30 PM EAT is now available as a recording. Don't miss this opportunity to learn how YOU can support the pan-African agenda for better pediatric care.</p>

      <p>The heart and immune system have complex interactions that can significantly impact children with rheumatic diseases. This important X Space conversation brings together rheumatology and cardiology expertise to explore these connections.</p>

      <ul>
        <li>Cardiovascular complications in children with rheumatic diseases</li>
        <li>Screening recommendations and monitoring protocols</li>
        <li>How medications for arthritis can affect heart health</li>
        <li>Warning signs parents and healthcare providers should watch for</li>
        <li>Preventive strategies and lifestyle modifications</li>
      </ul>

      <p>This conversation is crucial for healthcare providers, parents, and stakeholders involved in pediatric rheumatology care.</p>
    `,
    image: "/heartfelt_talk.webp",
    date: "26th February, 2025",
    location: "Twitter/X Space",
    time: "6:30 PM - 7:30 PM EAT",
    speakers: [
      { name: "Dr. Angela Migowa", title: "CEO/Founder - HAF, Kenya" },
      { name: "Dr. Esther Kimani", title: "Consultant Pediatric Cardiologist" },
    ],
    recordingLink: "https://x.com/i/spaces/1RDGlzVrpmzxL",
    tag: "Recording Available",
    ctaLabel: "Access Recording",
  },
  {
    id: "hope-healing",
    title: "HOPE AND HEALING",
    subtitle:
      "A Master Class to empower guardians in the fight against childhood arthritis",
    description:
      "A Master Class to empower guardians in the fight against childhood arthritis",
    fullDescription: `
      <p>Dear Guardians, We are proud to unveil the Hope and Healing Master Class, a pioneering educational initiative designed to empower parents/caregivers/guardians in the fight against childhood arthritis. This two-part series aims to provide comprehensive insights and practical strategies for those caring for children with Juvenile Idiopathic Arthritis (JIA).</p>

      <p>This master class was specially created for parents, guardians, and caregivers of children with JIA to provide practical knowledge and strategies.</p>

      <p>The session covered:</p>
      <ul>
        <li>Understanding Juvenile Idiopathic Arthritis and its impact</li>
        <li>Daily care routines and management techniques</li>
        <li>Navigating healthcare systems and communicating with providers</li>
        <li>Supporting your child's emotional wellbeing</li>
        <li>Building a support network with other caregivers</li>
      </ul>

      <p>The recording of this session is now available for educational purposes.</p>
    `,
    image: "/activities/jia/JIA_Masterclass_14th_Sept.webp",
    date: "14th September, 2024",
    location: "Online Webinar",
    time: "11:00 AM - 12:30 PM EAT",
    speakers: [
      { name: "Dr. Angela Migowa", title: "Pediatric Rheumatologist, Kenya" },
      {
        name: "Dr. Raffaela Carlomagno",
        title: "Pediatric Rheumatologist, Switzerland",
      },
      {
        name: "Charlene Hopper",
        title: "Pediatric Rheumatology Nurse, Canada",
      },
    ],
    recordingLink: "/news-activities/hope-healing.html",
    tag: "Past",
    ctaLabel: "Access Recording",
  },
  {
    id: "jia-diagnosis",
    title: "JIA DIAGNOSIS UNLOCKED",
    subtitle: "A Healthcare Worker's Guide to Early Diagnosis and Management",
    description:
      "This comprehensive online course provides healthcare workers with the tools and knowledge needed for early diagnosis and effective management of Juvenile Idiopathic Arthritis.",
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
    image: "/activities/October_Masterclass.webp",
    date: "October 15th, 2024",
    location: "Online Course",
    time: "6:30 PM - 7:30 PM EAT (Daily Sessions)",
    speakers: [
      { name: "Multiple Faculty", title: "Pediatric Rheumatology Specialists" },
    ],
    materialsLink: "/news-activities/jia-diagnosis.html",
    tag: "Past",
    ctaLabel: "Access Materials",
  },
  {
    id: "academy-signup",
    title: "HOPE PLATFORM ACADEMY SIGN UP",
    subtitle: "Tutorial Guide for Accessing the Hope Academy Platform",
    description:
      "A Master Class to empower guardians in the fight against childhood arthritis",
    fullDescription: `
      <p>This comprehensive tutorial guide walks you through the process of accessing and navigating the Hope Academy Platform, your gateway to valuable resources in the fight against childhood arthritis.</p>

      <p>The Hope Academy Platform provides:</p>
      <ul>
        <li>Educational materials and resources about juvenile arthritis</li>
        <li>Interactive learning modules for parents and caregivers</li>
        <li>Access to webinars and expert-led sessions</li>
        <li>Community forums to connect with other families</li>
        <li>Tools to track your child's progress and symptoms</li>
      </ul>

      <p>Follow this step-by-step tutorial to create your account, set up your profile, and begin accessing the wealth of information available to support your child's journey.</p>
    `,
    image: "/activities/academy_screen2.webp",
    date: "1st December, 2024",
    location: "Online Platform",
    time: "Available 24/7",
    speakers: [
      { name: "Hope Foundation Team", title: "Platform Support Specialists" },
    ],
    materialsLink: "/news-activities/jia_sept_activity_details.html",
    tag: "Tutorial Video",
    ctaLabel: "Sign Up",
  },
  {
    id: "ignite-wellness",
    title: "IGNITE WELLNESS",
    subtitle: "Virtual Academy Launch For Global Bone Health and Innovation",
    description: "Virtual Academy Launch For Global Bone Health and Innovation",
    fullDescription: `
      <p>Dear Guardians, Your child's well-being is our top priority. Join us at the launch of the Virtual Academy to gain valuable knowledge on promoting bone health. Empower yourself with the latest insights and resources.</p>

      <p>The Virtual Academy launch event offered:</p>
      <ul>
        <li>Expert presentations on pediatric bone health and development</li>
        <li>Interactive Q&A sessions with specialists</li>
        <li>Access to educational resources and support materials</li>
        <li>Community networking opportunities with other parents and caregivers</li>
        <li>Practical tips for implementing bone-healthy habits at home</li>
      </ul>

      <p>The event was free of charge and designed to empower parents and caregivers with knowledge and tools to support their children's bone health and overall wellness.</p>
    `,
    image: "/activities/academy_launch.webp",
    date: "9th September, 2024",
    location: "Online Event",
    time: "10:00 AM - 12:00 PM EAT",
    speakers: [
      { name: "Dr. Angela Migowa", title: "Pediatric Rheumatologist, Kenya" },
      { name: "Academy Faculty", title: "Bone Health Specialists" },
    ],
    materialsLink: "/news-activities/ignite-wellness.html",
    tag: "Past",
    ctaLabel: "Access Materials",
  },
];

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find activity from our combined dataset
  let activity = activitiesData.find((activity) => activity.id === id);

  if (!activity) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Activity not found</h2>
        <p className="mb-6">
          The activity you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/activities" className="btn-primary">
          Back to Activities
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 max-w-5xl mx-auto bg-gray-50 mt-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 mt-10">
          <Link
            to="/activities"
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News & Activities
          </Link>
        </div>

        <div className="bg-gradient-to-br from-orange-100/80 to-cyan-500/10 rounded-3xl py-16 shadow-md overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-title">{activity.title}</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {activity.subtitle}
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full md:w-4/5 lg:w-3/4">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-100 h-72 md:h-96 object-cover rounded-lg mx-auto"
              />
              {activity.tag && (
                <div className="absolute top-6 right-1 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  {activity.tag}
                </div>
              )}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mt-0.5"
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
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Date</h3>
                  <p>{activity.date}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500  mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Location</h3>
                  <p>{activity.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500  mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Time</h3>
                  <p>{activity.time}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                About This Event
              </h3>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: activity.fullDescription }}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-center opacity-80 p-4 bg-gray-50 rounded-3xl"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
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
              {(activity.recordingLink || activity.materialsLink) && (
                <a
                  href={activity.recordingLink || activity.materialsLink}
                  className="btn-primary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {activity.ctaLabel || "Access Resource"}
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
