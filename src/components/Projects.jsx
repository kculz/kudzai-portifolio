import React from 'react';
import { FaGlobe } from "react-icons/fa";
import PCCSZIM from "../assets/pccszim.png";
import PACKAGES from "../assets/packages.png";
import VOTING from "../assets/voting.png";
import XASH from "../assets/xash.png";

const projects = [
  {
    id: 1,
    title: 'PCCSZim Website',
    description: 'A responsive website for PCCSZim, built with React and Tailwind CSS.',
    link: 'https://www.pccszim.org',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Blade', 'Tailwind', 'React', 'Firebase', 'Express'],
    screenshot: PCCSZIM,
  },
  {
    id: 2,
    title: 'Xash Network Official Website',
    description: 'The official website for Xash Network, designed with modern UI/UX.',
    link: 'https://xash.network/',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Bootstrap v4.5', 'Blade'],
    screenshot: XASH,
  },
  {
    id: 3,
    title: 'SRS Voting System',
    description: 'A secure and reliable voting system built with Node.js, Express, and MongoDB.',
    github: 'https://github.com/kculz/voting-system.git',
    icon: <FaGlobe size={24} />,
    techStack: ['Node.js', 'Express', 'MySQL', 'Tailwind'],
    screenshot: VOTING,
  },
  {
    id: 4,
    title: 'Open Source Packages for Node.js',
    description: 'A collection of reusable packages for Node.js applications.',
    packages: [
      { name: 'country-utils', link: 'https://www.npmjs.com/package/@greycode/country_utils' },
      { name: 'env-init', link: 'https://www.npmjs.com/package/@greycode/env_init' },
      { name: 'gitignore-init', link: 'https://www.npmjs.com/package/@greycode/gitignore_init' },
    ],
    screenshot: PACKAGES,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-24 px-2">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <img src={project.screenshot} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-lg">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary py-2 px-4 rounded-lg text-off-white hover:bg-tertiary"
                    >
                      Visit Website
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary py-2 px-4 rounded-lg text-off-white hover:bg-tertiary"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
                {project.techStack && (
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold mb-2">Tech Stack:</h3>
                    <ul className="flex gap-4 flex-wrap">
                      {project.techStack.map((tech, index) => (
                        <li key={index} className="bg-tertiary py-2 px-4 rounded-lg text-off-white">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.packages && (
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold mb-2">Packages:</h3>
                    <ul className="flex gap-4 flex-wrap">
                      {project.packages.map((pkg, index) => (
                        <li key={index}>
                          <a
                            href={pkg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-tertiary py-2 px-4 rounded-lg text-off-white hover:bg-secondary"
                          >
                            {pkg.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;