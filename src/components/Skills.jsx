import React, { useState } from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiLaravel,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiTerraform,
  SiGithubactions,
  SiDjango,
  SiPostgresql,
  SiOpenai
} from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      {
        name: 'React',
        percentage: 95,
        icon: <SiReact size={32} />,
        color: "#61DAFB",
      },
      {
        name: 'React Native',
        percentage: 80,
        icon: <SiReact size={32} />,
        color: "#000000",
      },
      {
        name: 'Next.js',
        percentage: 80,
        icon: <SiNextdotjs size={32} />,
        color: "#000000",
      },
      {
        name: 'Tailwind CSS',
        percentage: 100,
        icon: <RiTailwindCssFill size={32} />,
        color: "#38BDF8",
      }
      
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        percentage: 90,
        icon: <SiNodedotjs size={32} />,
        color: "#339933",
      },
      {
        name: 'Express.js',
        percentage: 90,
        icon: <SiExpress size={32} />,
        color: "#000000",
      },
      {
        name: 'Python',
        percentage: 70,
        icon: <SiPython size={32} />,
        color: "#3776AB",
      },
      {
        name: 'Flask',
        percentage: 70,
        icon: <SiFlask size={32} />,
        color: "#000000",
      },
      {
        name: 'TypeScript',
        percentage: 80,
        icon: <SiTypescript size={32} />,
        color: "#3178C6",
      },
      {
        name: 'Laravel',
        percentage: 80,
        icon: <SiLaravel size={32} />,
        color: "#FF2D20",
      },
      {
        name: 'Django',
        percentage: 75,
        icon: <SiDjango size={32} />,
        color: "#092E20",
      },
    ]
  },
  {
    id: 'database',
    title: 'Database Technologies',
    skills: [
      {
        name: 'MySQL',
        percentage: 96,
        icon: <SiMysql size={32} />,
        color: "#4479A1",
      },
      {
        name: 'MongoDB',
        percentage: 80,
        icon: <SiMongodb size={32} />,
        color: "#47A248",
      },
      {
        name: 'Redis',
        percentage: 85,
        icon: <SiRedis size={32} />,
        color: "#DC382D",
      },
      {
        name: 'PostgreSQL',
        percentage: 85,
        icon: <SiPostgresql size={32} />,
        color: "#336791",
      },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    skills: [
      {
        name: 'Docker',
        percentage: 75,
        icon: <SiDocker size={32} />,
        color: "#2496ED",
      },
      {
        name: 'DigitalOcean',
        percentage: 90,
        icon: <FaDigitalOcean size={32} />,
        color: "#0080FF", 
      },
      {
        name: 'Bull MQ',
        percentage: 80,
        color: "#FF6B6B",
      },
      {
        name: 'GitHub Actions',
        percentage: 95,
        icon: <SiGithubactions size={32} />,
        color: "#2088FF",
      },
    ]
  },
  {
    id: 'ai',
    title: 'AI & Data Science',
    skills: [
      {
        name: 'Artificial Intelligence',
        percentage: 80,
        icon: <SiOpenai size={32} />,
        color: "#412991",
      },
      {
        name: 'Machine Learning',
        percentage: 75,
        icon: <SiPython size={32} />,
        color: "#3776AB",
      }
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <div className="group p-6 bg-dark-card border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="p-3 rounded-lg transition-all duration-300"
          style={{ 
            backgroundColor: `${skill.color}10`,
            color: skill.color
          }}
        >
          {skill.icon}
        </div>
        <div>
          <h3 className="font-bold text-light">{skill.name}</h3>
          <p className="text-sm text-gray-400">{skill.percentage}% Proficiency</p>
        </div>
      </div>
      
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-700 ease-out"
          style={{ 
            width: `${skill.percentage}%`, 
            backgroundColor: skill.color,
            transition: 'width 1.5s ease-out'
          }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-24 px-6 bg-dark text-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-light">Technical Skills</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiency levels across various technologies.
          </p>
        </div>
        
        {/* Skills Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Active Category Display */}
        {skillCategories.map(category => (
          <div 
            key={category.id}
            className={`transition-all duration-500 ${
              activeTab === category.id ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;