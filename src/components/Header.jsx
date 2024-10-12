// Header.js
import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import useScroll from './hooks/useScroll';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { scrollTo } = useScroll();

  const handleNav = () => {
    setOpenNav(false);
  };

  return (
    <header className="z-50 top-0  w-screen h-24 text-lt-red bg-white fixed">
      <div className="flex justify-between items-center px-10 md:px-32 h-full w-full">
        <h1 className="text-lg lg:text-xl font-semibold cursor-pointer">
          <a onClick={() => { handleNav(); scrollTo('hero'); }}>
            kudzaimunyama.dev
          </a>
        </h1>
        <div className="flex gap-5 justify-center items-center">
          <ul className="hidden md:flex gap-5 text-xs lg:text-sm text-black">
            <li className="hover:text-tertiary cursor-pointer">
              <a onClick={() => { handleNav(); scrollTo('experiences'); }}>
                Experiences
              </a>
            </li>
            <li className="hover:text-tertiary cursor-pointer">
              <a onClick={() => { handleNav(); scrollTo('projects'); }}>
                Projects
              </a>
            </li>
            <li className="hover:text-tertiary cursor-pointer">
              <a onClick={() => { handleNav(); scrollTo('skills'); }}>
                Skills
              </a>
            </li>
          </ul>
          <div className="block">
            <a
             
              className="bg-red flex gap-1 cursor-pointer text-off-white lg:text-sm md:text-sm text-xs py-3 px-5 rounded"
              onClick={() => { handleNav(); scrollTo('contact'); }}
            >
              <p>Contact</p>
              <p>me</p>
            </a>
          </div>
          <a
            onClick={() => setOpenNav(!openNav)}
            className="md:hidden block"
          >
            {!openNav ? (
              <BiMenuAltRight size={30} className="text-lt-red" />
            ) : (
              <MdOutlineClose size={30} className="text-lt-red" />
            )}
          </a>
        </div>
      </div>
      {openNav && (
        <ul className="bg-black/50 text-white backdrop-blur md:hidden flex flex-col px-10 gap-4 top-24 ">
          <li className="hover:text-tertiary cursor-pointer">
            <a onClick={() => { handleNav(); scrollTo('about'); }}>
              About
            </a>
          </li>
          <li className="hover:text-tertiary cursor-pointer">
            <a onClick={() => { handleNav(); scrollTo('experiences'); }}>
              Experiences
            </a>
          </li>
          <li className="hover:text-tertiary cursor-pointer">
            <a onClick={() => { handleNav(); scrollTo('projects'); }}>
              Projects
            </a>
          </li>
          <li className="hover:text-tertiary cursor-pointer">
            <a onClick={() => { handleNav(); scrollTo('skills'); }}>
              Skills
            </a>
          </li>
          <hr className="text-lt-red" />
        </ul>
      )}
      <hr className="text-primary" />
    </header>
  );
};

export default Header;