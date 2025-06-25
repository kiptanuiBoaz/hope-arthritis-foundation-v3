import React from 'react';

// PDF Resource Card component
interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  category: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  pdfUrl,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={thumbnail}
          alt={`Preview of ${title}`}
          className="w-full h-64 object-cover object-top"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF Document
          </div>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
          >
            View PDF
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Mock data for patient resources
const resourcesData: ResourceCardProps[] = [
  {
    id: 'jia-patient-guide',
    title: 'Understanding Juvenile Idiopathic Arthritis (JIA)',
    description: 'A comprehensive guide for patients and families about JIA symptoms, diagnosis, treatment options, and daily management strategies.',
    thumbnail: '/images/resources/jia-guide.jpg',
    pdfUrl: '/pdfs/understanding-jia.pdf',
    category: 'Patient Guide'
  },
  {
    id: 'exercise-guide',
    title: 'Exercise Guide for Children with Arthritis',
    description: 'Detailed exercise routines specifically designed for children with different types of arthritis, including instructions and illustrations.',
    thumbnail: '/images/resources/exercise-guide.jpg',
    pdfUrl: '/pdfs/exercise-guide.pdf',
    category: 'Exercise Program'
  },
  {
    id: 'nutrition-handbook',
    title: 'Nutrition and Diet Guidelines for Inflammatory Conditions',
    description: 'Evidence-based nutritional advice for children with inflammatory arthritis, including anti-inflammatory diets and recipes using locally available foods.',
    thumbnail: '/images/resources/nutrition-handbook.jpg',
    pdfUrl: '/pdfs/nutrition-handbook.pdf',
    category: 'Nutrition'
  },
  {
    id: 'school-advocacy',
    title: 'School Advocacy Toolkit',
    description: 'Resources for parents and caregivers to advocate for appropriate accommodations and support for children with arthritis in school settings.',
    thumbnail: '/images/resources/school-toolkit.jpg',
    pdfUrl: '/pdfs/school-advocacy-toolkit.pdf',
    category: 'Education'
  },
  {
    id: 'medication-guide',
    title: 'Pediatric Rheumatology Medication Guide',
    description: 'Information about common medications used in pediatric rheumatology, including administration guidelines, side effects, and monitoring requirements.',
    thumbnail: '/images/resources/medication-guide.jpg',
    pdfUrl: '/pdfs/medication-guide.pdf',
    category: 'Medications'
  },
  {
    id: 'pain-management',
    title: 'Pain Management Strategies for Children',
    description: 'Non-pharmacological and pharmacological approaches to managing pain in children with rheumatic diseases, including relaxation techniques and cognitive strategies.',
    thumbnail: '/images/resources/pain-management.jpg',
    pdfUrl: '/pdfs/pain-management.pdf',
    category: 'Pain Management'
  }
];

const PatientResources: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Patient Information Sheets</h1>
        <div className="w-24 h-1 bg-orange-500 mb-8" />
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Access our comprehensive collection of resources designed to help patients and families better understand and manage childhood arthritis and other rheumatic conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((resource) => (
            <ResourceCard
              key={resource.id}
              id={resource.id}
              title={resource.title}
              description={resource.description}
              thumbnail={resource.thumbnail}
              pdfUrl={resource.pdfUrl}
              category={resource.category}
            />
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
              <p className="text-gray-700 mb-4">
                If you can't find what you're looking for, our team is here to help. Contact us for additional resources or to request specific information about childhood rheumatic diseases.
              </p>
              <a href="/contact" className="btn-primary inline-block">Contact Us</a>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientResources;
