import React, { useState } from 'react';
import { FaGlobe, FaGithub, FaExternalLinkAlt, FaCogs } from "react-icons/fa";
import { SiRedis, SiTypescript, SiDocker, SiKubernetes } from "react-icons/si";

// In a real implementation, you would import your images
// For this example, I'm assuming these imports exist
// import PCCSZIM from "../assets/pccszim.png";
// import PACKAGES from "../assets/packages.png";
// import MODULERIZE from "../assets/modulerize.png";
// import XASH from "../assets/xash.png";

const projects = [
  {
    id: 1,
    title: 'PCCSZim Website',
    description: 'A responsive website for PCCSZim, built with React and Tailwind CSS.',
    link: 'https://www.pccszim.org',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Blade', 'Tailwind', 'React', 'Firebase', 'Express'],
    screenshot: 'PCCSZIM', // Replace with actual import when implementing
    category: 'web'
  },
  {
    id: 2,
    title: 'Xash Network Official Website',
    description: 'The official website for Xash Network, designed with modern UI/UX.',
    link: 'https://xash.network/',
    icon: <FaGlobe size={24} />,
    techStack: ['Laravel', 'Bootstrap v4.5', 'Blade'],
    screenshot: 'XASH', // Replace with actual import when implementing
    category: 'web'
  },
  {
    id: 3,
    title: 'Modulerize',
    description: 'AI-powered system design and solutions with microservices architecture.',
    link: 'https://modulerize.com',
    icon: <FaGlobe size={24} />,
    techStack: ['Node.js', 'React.js', 'Django', 'Python', 'Docker', 'Kubernetes'],
    screenshot: 'MODULERIZE', // Replace with actual import when implementing
    category: 'web'
  },
  {
    id: 4,
    title: 'Distributed Task Processing System',
    description: 'Built a scalable task processing system using Redis and Bull MQ with TypeScript.',
    github: 'https://github.com/yourusername/distributed-task-processor',
    // icon: <SiBullmq size={24} />,
    techStack: ['TypeScript', 'Node.js', 'Redis', 'Bull MQ', 'Docker'],
    screenshot: 'DISTRIBUTED_SYSTEM', // Replace with actual import when implementing
    category: 'backend'
  },
  {
    id: 5,
    title: 'Open Source Packages',
    description: 'A collection of reusable packages for Node.js applications.',
    packages: [
      { name: 'country-utils', link: 'https://www.npmjs.com/package/@greycode/country_utils' },
      { name: 'env-init', link: 'https://www.npmjs.com/package/@greycode/env_init' },
      { name: 'gitignore-init', link: 'https://www.npmjs.com/package/@greycode/gitignore_init' },
      { name: 'ts-microservice-boilerplate', link: 'https://www.npmjs.com/package/@greycode/ts-microservice-boilerplate' },
    ],
    screenshot: 'PACKAGES', // Replace with actual import when implementing
    category: 'packages'
  },
  {
    id: 6,
    title: 'DevOps Automation Tools',
    description: 'Collection of CI/CD pipelines and infrastructure as code templates for quick deployment.',
    github: 'https://github.com/yourusername/devops-tools',
    icon: <SiDocker size={24} />,
    techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS', 'Jenkins'],
    screenshot: 'DEVOPS_TOOLS', // Replace with actual import when implementing
    category: 'devops'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'backend', name: 'Backend Systems' },
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
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work across web development, backend systems, and DevOps automation.
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
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
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
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                {/* Replace with actual image components when implementing */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-4xl text-white opacity-50">{project.icon}</div>
                </div>
                
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
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded"
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