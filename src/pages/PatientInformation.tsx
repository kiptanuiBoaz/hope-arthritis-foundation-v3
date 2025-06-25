import React, { useState } from 'react';

interface Document {
  name: string;
  date: string;
  link: string;
  image: string;
  description: string;
  fileType: string;
}

const documents: Document[] = [
  {
    name: 'Benign Hypermobility Syndrome',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Benign-Hypermobility-Syndrome.pdf',
    image: '/img/benign.png',
    description:
      'Learn about joint hypermobility syndrome, its symptoms, and management strategies for patients with unusually flexible joints.',
    fileType: 'PDF'
  },
  {
    name: 'Juvenile Dermatomyositis (JDM)',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Juvenile-Dermatomyositis-(JDM).pdf',
    image: '/img/juvenile_dermatoyositis.png',
    description:
      'Comprehensive guide about JDM, an inflammatory disease affecting skin and muscles in children.',
    fileType: 'PDF'
  },
  {
    name: 'Juvenile Idiopathic Arthritis(JIA)',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Juvenile-Idiopathic-Arthritis(JIA).pdf',
    image: '/img/juvenile_idiophatic.png',
    description:
      'Important information about JIA, including symptoms, diagnosis, and treatment options for this common childhood arthritis.',
    fileType: 'PDF'
  },
  {
    name: 'Juvenile Systemic Lupus Erythematosus',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Juvenile-Systemic-Lupus-Erythematosus.pdf',
    image: '/img/juvenile_systemic.png',
    description:
      'Detailed overview of juvenile lupus, its impact on various body systems, and current treatment approaches.',
    fileType: 'PDF'
  },
  {
    name: 'Periodic Fever Syndromes',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Periodic-Fever-Syndromes.pdf',
    image: '/img/periodic_fever.png',
    description:
      'Understanding periodic fever syndromes, their patterns, and management strategies for affected children.',
    fileType: 'PDF'
  },
  {
    name: 'Vasculitis',
    date: '25/04/2025, 12:15 PM',
    link: '/documents/Vasculitis.pdf',
    image: '/img/vasculitis.png',
    description:
      'Essential information about different types of vasculitis, their symptoms, and treatment options.',
    fileType: 'PDF'
  }
];

const PatientInformation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Arthritis', 'Lupus', 'Dermatomyositis', 'Vasculitis', 'Syndromes'];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           doc.name.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Patient Information Resources
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of educational materials designed to help patients and families 
            better understand and manage childhood arthritis and other rheumatic conditions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-orange-600">{filteredDocuments.length}</span> resources
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredDocuments.map((document, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Document Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50">
                <img
                  src={document.image}
                  alt={document.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {document.fileType}
                  </span>
                </div>
              </div>

              {/* Document Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {document.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {document.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {document.date}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={document.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  <svg className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="h-24 w-24 text-gray-300 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Additional Support?</h3>
            <p className="text-lg mb-6 opacity-90">
              Can't find what you're looking for? Our team is here to help you access the information and resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Our Team
              </a>
              <a 
                href="https://app.hopearthritisfoundation.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Visit Our Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInformation;