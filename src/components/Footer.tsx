import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <svg className="fill-current h-12 w-32 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.28 151.87">
                <defs>
                  <style>
                    {`.cls-1{fill:#70a553;}
                    .cls-2{fill:#fff;}
                    .cls-3{fill:#f68521;}
                    .cls-4{fill:#1e9eb0;}`}
                  </style>
                </defs>
                <title>hope_logo</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1" d="M23.67,88.88a91.72,91.72,0,0,0-3.86,13.33q.11,3.35.26,6.52a95.43,95.43,0,0,0,13.34-.38l.33-1.5q.82-4.77,1.61-9.45s.25-1.83.8-4.76c.56-3.33,1.12-6.63,1.68-9.86,0,0,4.54-17.91,10.81-23.79-15.53,4.85-22.42,23.14-25,29.89" />
                    <path className="cls-1" d="M32,115.22a81.14,81.14,0,0,1-11.65-1.53c.18,3.55.36,6.94.47,10.13l-3.93.15A10.15,10.15,0,0,1,6.32,113.7c0-1.35,0-2.74.09-4.16-2.51-1-4.66-2-6.41-2.84v45.17H22.51c4.29-12.16,7.06-25.28,9.45-36.65" />
                    <path className="cls-2" d="M68.11,27.26a8.91,8.91,0,0,0,2.1-1.82C74.33,20.54,73,14.17,72.49,13,71.4,10.43,69,9.73,66.58,11.08,62.37,13.45,60,21,62,25.37c1.22,2.61,3.65,3.39,6.11,1.89" />
                    <path className="cls-3" d="M41.56,0A275.43,275.43,0,0,0,24,51.84A162.07,162.07,0,0,0,21,69.1c5.69-8.17,13.55-15.76,23.91-18.31,8.33-2.06,23.62-2.08,30.36,8.61,4.11,6.52,3.19,14.1,1.7,19.31a.38.38,0,0,1-.74-.16c.73-5.81-.74-11.41-4.3-15.38A16.65,16.65,0,0,0,62.38,58a21,21,0,0,0-2.67,2.73A28.18,28.18,0,0,0,57,64.61c-.27.47-.53,1-.79,1.46A44.19,44.19,0,0,0,53,74.48c-.34,1.24-.65,2.52-.92,3.84-.12.41-.24.84-.36,1.28-.23.87-.47,1.77-.71,2.7l-.36,1.4c-.24,1-.48,1.93-.72,2.92-.12.5-.23,1-.35,1.51-.36,1.52-.71,3.07-1.06,4.65-.7,3.15-1.38,6.4-2,9.61-.26,1.31-.52,2.62-.78,3.91,2.3-.54,4.63-1.18,7-1.94A94.39,94.39,0,0,0,82.81,88.23V0ZM70.21,25.44a8.91,8.91,0,0,1-2.1,1.82c-2.46,1.5-4.89.72-6.11-1.89-2-4.38.37-11.92,4.57-14.29C69,9.73,71.4,10.43,72.49,13c.53,1.22,1.84,7.59-2.28,12.49" />
                    <path className="cls-4" d="M52,113.74A75.75,75.75,0,0,1,44.11,115c-.69,3.81-1.3,7.26-1.78,10.1q-.63,3.86-1.27,7.47c-.22,1.21-.44,2.41-.67,3.58a117,117,0,0,1-4,15.77H82.81V99.76a78.58,78.58,0,0,1-30.82,14" />
                    <path className="cls-4" d="M6.5,107.22a229.8,229.8,0,0,1,14.6-72A227.35,227.35,0,0,1,38,0H0V105.8c1.86.47,4,1,6.5,1.42" />
                  </g>
                </g>
              </svg>
            </div>
            
            <p className="text-gray-300 italic text-sm mb-6 leading-relaxed">
              A Holistic Intervention to Paediatric Rheumatology
            </p>

            <div className="text-sm text-gray-300 space-y-2">
              <p>Hurlingham Park Building, Office Suite B6, 3rd Floor</p>
              <p>Off Argwings Kodhek Road, Hurlingham</p>
              <p className="text-gray-400">Registration Number: OP.218/051/21-382/12509</p>
            </div>
          </div>

          {/* Foundation Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Foundation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Our Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Bootcamps</span>
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Masterclass</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://app.hopearthritisfoundation.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Platform Access</span>
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources and Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a 
                  href="https://hopearthritisfoundation.com/blog/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Educational Materials</span>
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <Link to="/patient-information" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Patient Information</span>
                </Link>
              </li>
              <li>
                <a href="tel:+254722841719" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Support</span>
                </a>
              </li>
              <li>
                <a href="/privacy_policy.html" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Terms & Privacy</span>
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold text-white mb-3">Contact Info</h4>
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p>0769-488751</p>
                  <p>0780-228446</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Info@hopearthritisfoundation.com
              </div>
              <div className="flex items-start text-gray-300">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                P.O. Box 76123-00508, Nairobi, KE
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex gap-4" aria-label="Social Media Links">
              <a 
                href="https://twitter.com/HopeArthritis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61554689381673&mibextid=JRoKGi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/hopearthritisfoundation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/hope-arthritis-foundation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@HopeArthritisFoundation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://chat.whatsapp.com/JQJ3EN7XF7uJeVVoyI1QWH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
            </div>

            {/* Copyright and Credits */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Hope Arthritis Foundation</p>
              <div className="flex items-center gap-2">
                <span>Powered By:</span>
                <a 
                  href="https://devligence.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  <img 
                    src="/img/devligence 1.png" 
                    alt="Devligence" 
                    className="h-4 opacity-70 hover:opacity-100 transition-opacity duration-300" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;