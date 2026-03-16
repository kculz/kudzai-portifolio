import React, { useState } from 'react';
import { FaGlobe, FaGithub, FaExternalLinkAlt, FaCogs, FaNode, FaMobile } from "react-icons/fa";
import { SiRedis, SiTypescript, SiDocker, SiKubernetes, SiReact, SiGraphql, SiApollographql, SiExpo } from "react-icons/si";

import PCCSZIM from "../assets/pccszim.png";
import PACKAGES from "../assets/packages.png";
import MODULERIZE from "../assets/modulerize.png";
import XASH from "../assets/xash.png";
import GREYCODEJS from "../assets/greycodejs.png"; // You'll need to add this image
import HELPDESK from "../assets/helpdesk.png"; // You'll need to add this image
import ATTAPP from "../assets/attapp1.png"; // You'll need to add this image

const projects = [
  {
    id: 1,
    title: 'Payfac.co.zw',
    description: 'A comprehensive payments facilitator system featuring Value Added Services (airtime & electricity), school fees payments, and wallet system (funding, withdrawals, transfers). Includes a POS and online backoffice.',
    link: 'https://payfac.co.zw',
    icon: <FaGlobe size={24} />,
    techStack: ['Node.js', 'Express', 'React', 'Fintech', 'POS'],
    category: 'web'
  },
  {
    id: 2,
    title: 'Xash Network Rebranding',
    description: 'Developed and rebranded the official websites for Xash Network ecosystem, creating cohesive UI/UX across multiple domains (xash.co.zw, xashpay.com, xash.network, equal.co.zw).',
    link: 'https://xash.co.zw',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Tailwind', 'UI/UX', 'Web Design'],
    category: 'web'
  },
  {
    id: 3,
    title: 'Brace Engineering Website',
    description: 'A crisp, professional corporate website developed for a client in the construction and engineering sector.',
    link: 'https://brace-eng.org',
    icon: <FaGlobe size={24} />,
    techStack: ['React', 'Tailwind', 'Web Development'],
    category: 'web'
  },
  {
    id: 4,
    title: 'Xash Network API Portal',
    description: 'Designed and implemented the frontend portal for managing and interacting with Xash Network APIs.',
    link: 'https://portal.xash.co.zw',
    icon: <FaGlobe size={24} />,
    techStack: ['React', 'Tailwind', 'API Integration', 'Dashboard'],
    category: 'web'
  },
  {
    id: 5,
    title: 'Logistics Platform',
    description: 'Currently spearheading the design and development of an advanced logistics management platform. (Seeking investment).',
    icon: <FaCogs size={24} />,
    techStack: ['Node.js', 'React', 'Logistics', 'Product Development'],
    category: 'backend'
  },
  {
    id: 6,
    title: 'Open Source Packages',
    description: 'A collection of reusable packages for Node.js applications.',
    packages: [
      { name: 'country-utils', link: 'https://www.npmjs.com/package/@greycode/country_utils' },
      { name: 'env-init', link: 'https://www.npmjs.com/package/@greycode/env_init' },
      { name: 'gitignore-init', link: 'https://www.npmjs.com/package/@greycode/gitignore_init' },
      { name: 'ts-microservice-boilerplate', link: 'https://www.npmjs.com/package/@greycode/ts-microservice-boilerplate' },
    ],
    screenshot: PACKAGES, 
    category: 'packages'
  },
  {
    id: 7,
    title: 'GreyCodeJS Framework',
    description: 'A lightweight, flexible Node.js framework built on Express that simplifies web application development with a clean MVC architecture and powerful CLI tools.',
    github: 'https://github.com/kculz/greycodejs',
    icon: <FaNode size={24} />,
    techStack: ['Node.js', 'Express', 'Sequelize', 'CLI Tools', 'MVC Pattern'],
    screenshot: GREYCODEJS,
    category: 'frameworks'
  },
  {
    id: 8,
    title: 'AI-Powered Helpdesk System',
    description: 'Intelligent ticketing system that uses AI to respond to tickets and enables calling for urgent issues, built with modern web technologies.',
    github: 'https://github.com/kculz/helpdesk-ticket-system.git',
    icon: <SiGraphql size={24} />,
    techStack: ['React', 'Apollo', 'GraphQL', 'Express', 'Redis', 'BullMQ', 'AI Integration'],
    screenshot: HELPDESK,
    category: 'backend'
  },
  {
    id: 9,
    title: 'Mobile App with Express Backend',
    description: 'Full-stack mobile application with React Native frontend and Express API backend, featuring asynchronous task processing.',
    github: 'https://github.com/kculz/att-app-mobile.git',
    secondaryGithub: 'https://github.com/kculz/att-app-server.git',
    icon: <FaMobile size={24} />,
    techStack: ['React Native', 'TypeScript', 'Expo', 'Express', 'Redis', 'Bull'],
    screenshot: ATTAPP,
    category: 'mobile'
  },
  {
    id: 10,
    title: 'PCCSZim Website',
    description: 'A responsive website for PCCSZim, built with React and Tailwind CSS.',
    link: 'https://www.pccszim.org',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Blade', 'Tailwind', 'React', 'Firebase', 'Express'],
    screenshot: PCCSZIM, 
    category: 'web'
  },
  {
    id: 11,
    title: 'Xash Network Official Website',
    description: 'The official website for Xash Network, designed with modern UI/UX.',
    link: 'https://xash.network/',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Bootstrap v4.5', 'Blade'],
    screenshot: XASH, 
    category: 'web'
  },
  {
    id: 12,
    title: 'Modulerize',
    description: 'AI-powered system design and solutions with microservices architecture.',
    link: 'https://modulerize.com',
    icon: <FaGlobe size={24} />,
    techStack: ['Node.js', 'React.js', 'Django', 'Python', 'Docker', 'Kubernetes'],
    screenshot: MODULERIZE, 
    category: 'web'
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'backend', name: 'Backend Systems' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'frameworks', name: 'Frameworks' },
  { id: 'devops', name: 'DevOps' },
  { id: 'packages', name: 'Open Source' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-dark text-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-light">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my work across web development, framework design, mobile apps, backend systems, and DevOps automation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-card text-gray-400 border border-white/5 hover:bg-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-card border border-white/5 rounded-xl overflow-hidden shadow-xl hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                {/* Project image or icon placeholder */}
                {project.screenshot ? (
                  <img 
                    src={project.screenshot} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-4xl text-white opacity-50">{project.icon}</div>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.secondaryGithub && (
                      <a
                        href={project.secondaryGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                        title="Backend Repository"
                      >
                        <FaCogs size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-light group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2 py-1 bg-slate-800 text-gray-300 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.packages && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Packages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.packages.map((pkg, index) => (
                        <a
                          key={index}
                          href={pkg.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                        >
                          {pkg.name}
                        </a>
                      ))}
                    </div>
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