import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import useScroll from './hooks/useScroll';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollTo } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setOpenNav(false);
  };

  return (
    <header 
      className={`z-50 top-0 w-full h-20 fixed transition-all duration-300 ${
        scrolled 
          ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 h-full">
        <h1 className="text-xl font-bold cursor-pointer">
          <a onClick={() => { handleNav(); scrollTo('hero'); }} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            kudzaimunyama.dev
          </a>
        </h1>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className={`flex gap-8 text-sm font-medium ${scrolled ? 'text-gray-300' : 'text-white/80'}`}>
              <li className="relative group">
                <a 
                  onClick={() => { handleNav(); scrollTo('experiences'); }}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <a 
                  onClick={() => { handleNav(); scrollTo('projects'); }}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <a 
                  onClick={() => { handleNav(); scrollTo('skills'); }}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </nav>
          
          <button
            onClick={() => { handleNav(); scrollTo('contact'); }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>
          
          <button
            onClick={() => setOpenNav(!openNav)}
            className="md:hidden block"
            aria-label="Toggle menu"
          >
            {!openNav ? (
              <BiMenuAltRight size={30} className={scrolled ? 'text-light' : 'text-white'} />
            ) : (
              <MdOutlineClose size={30} className={scrolled ? 'text-light' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {openNav && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-dark-card shadow-xl rounded-b-xl border-t border-white/5 overflow-hidden">
          <nav className="max-w-7xl mx-auto">
            <ul className="py-4 px-6 flex flex-col gap-4">
              <li>
                <a 
                  onClick={() => { handleNav(); scrollTo('experiences'); }}
                  className="block py-2 text-gray-300 hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  onClick={() => { handleNav(); scrollTo('projects'); }}
                  className="block py-2 text-gray-300 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  onClick={() => { handleNav(); scrollTo('skills'); }}
                  className="block py-2 text-gray-300 hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;