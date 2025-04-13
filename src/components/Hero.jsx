import React, { useEffect, useRef } from 'react';
import useScroll from './hooks/useScroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const { scrollTo } = useScroll();
  const titleRef = useRef(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.classList.add('animate-in');
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-secondary/95 to-tertiary">
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col items-start max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              Software Engineer & DevOps Specialist
            </span>
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 transition-all duration-1000 ease-out transform translate-y-8"
              style={{ animationDelay: '0.2s' }}
            >
              Hello, I'm <span className="text-primary">Kudzai Munyama</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              A passionate software developer with a drive to create innovative solutions. Specializing in full-stack development, distributed systems, and DevOps practices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/kculz" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/munyamakudzai" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/greycode095" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;