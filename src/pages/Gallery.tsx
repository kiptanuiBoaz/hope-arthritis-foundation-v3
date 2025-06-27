import React, { useState } from 'react';

interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  images: string[];
  driveLink: string;
}

const galleryEvents: GalleryEvent[] = [
  {
    id: 'medical-camp-march-2025',
    title: 'March 22, 2025 Medical Camp',
    date: 'March 22, 2025',
    images: [
      '/img/gallery/medical-camp/campOne.jpg',
      '/img/gallery/medical-camp/campTwo.jpg',
      '/img/gallery/medical-camp/campThree.jpg',
      '/img/gallery/medical-camp/campFour.jpg',
      '/img/gallery/medical-camp/campFive.jpeg',
      '/img/gallery/medical-camp/campSix.jpg'
    ],
    driveLink: 'https://drive.google.com/drive/folders/example1'
  },
  {
    id: 'rhpc-conference',
    title: 'RHPC Conference 2024',
    date: 'November 15, 2024',
    images: [
      '/img/gallery/rhpc/rhpc1.jpg',
      '/img/gallery/rhpc/rhpc2.jpg',
      '/img/gallery/rhpc/rhpc3.jpg',
      '/img/gallery/rhpc/rhpc4.jpeg',
      '/img/gallery/rhpc/rhpc5.jpg',
      '/img/gallery/rhpc/rhpc6.jpg'
    ],
    driveLink: 'https://drive.google.com/drive/folders/example2'
  },
  {
    id: 'plan-launch',
    title: 'Strategic Plan Launch',
    date: 'October 10, 2024',
    images: [
      '/img/gallery/plan-launch/launch1.jpg',
      '/img/gallery/plan-launch/launch2.jpg',
      '/img/gallery/plan-launch/launch3.jpg',
      '/img/gallery/plan-launch/launch4.jpg',
      '/img/gallery/plan-launch/launch5.jpg',
      '/img/gallery/plan-launch/launch6.jpg'
    ],
    driveLink: 'https://drive.google.com/drive/folders/example3'
  },
  {
    id: 'amsum-workshop',
    title: 'AMSUM Workshop 2024',
    date: 'September 5, 2024',
    images: [
      '/img/gallery/amsum/amsum1.jpg',
      '/img/gallery/amsum/amsum2.jpg',
      '/img/gallery/amsum/amsum3.jpg',
      '/img/gallery/amsum/amsum4.jpg',
      '/img/gallery/amsum/amsum5.jpg',
      '/img/gallery/amsum/amsum6.jpg'
    ],
    driveLink: 'https://drive.google.com/drive/folders/example4'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of memorable moments from events, workshops, and activities 
            that showcase our commitment to advancing pediatric rheumatology care.
          </p>
        </div>

        {/* Gallery Events */}
        <div className="space-y-16">
          {galleryEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Event Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </p>
                </div>
                <a
                  href={event.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                >
                  View More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => openModal(image)}
                  >
                    <img
                      src={image}
                      alt={`${event.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Next Event</h3>
            <p className="text-lg mb-6 opacity-90">
              Stay connected with our community and be part of our mission to advance pediatric rheumatology care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/activities" 
                className="bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Upcoming Events
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;