import React from 'react';
import useScroll from './hooks/useScroll';

const Hero = () => {
    const { scrollTo } = useScroll();
  return (
    <section className="bg-secondary text-off-white py-24 px-2 mt-24 min-h-[80vh]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Kudzai Munyama</h1>
        <p className="text-lg lg:text-2xl mb-8">A passionate software developer with a drive to create innovative solutions.</p>
        <p className="text-md lg:text-lg mb-12 text-gray-300">
          With a strong foundation in programming languages and frameworks, I craft exceptional digital experiences that exceed expectations.
        </p>
        <a onClick={() => scrollTo('projects')} className="bg-primary cursor-pointer text-off-white py-3 px-6 rounded-lg hover:bg-tertiary">
          Explore My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;