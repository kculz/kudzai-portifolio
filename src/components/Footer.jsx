import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import useScroll from './hooks/useScroll';

const Footer = () => {
  const { scrollTo } = useScroll();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-6">Kudzai Munyama</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A passionate software engineer specializing in full-stack development, distributed systems, and DevOps practices, dedicated to creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/kculz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/kudzaimunyama" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com/greycode095" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="mailto:munyamakudzi@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  onClick={() => scrollTo('experiences')} 
                  className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollTo('projects')} 
                  className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollTo('skills')} 
                  className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollTo('contact')} 
                  className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:hello@kudzaimunyama.dev" className="hover:text-primary transition-colors">
                  hello@kudzaimunyama.dev
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+263775123456" className="hover:text-primary transition-colors">
                  +263 775 123 456
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-4 h-4 mr-3 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Kudzai Munyama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;