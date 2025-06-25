export interface ActivitySpeaker {
  name: string;
  title: string;
}

export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  location: string;
  time: string;
  speakers: ActivitySpeaker[];
  registrationLink?: string;
  recordingLink?: string;
  materialsLink?: string;
  tag?: string;
}

export const activitiesData: Activity[] = [
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
