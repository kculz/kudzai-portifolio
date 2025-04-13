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
  SiBullmq,
  SiTerraform,
  SiAmazonaws,
  SiGithubactions
} from "react-icons/si";

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      {
        name: 'React',
        percentage: 90,
        icon: <SiReact size={32} />,
        color: "#61DAFB",
      },
      {
        name: 'Next.js',
        percentage: 70,
        icon: <SiNextdotjs size={32} />,
        color: "#000000",
      },
      {
        name: 'TypeScript',
        percentage: 80,
        icon: <SiTypescript size={32} />,
        color: "#3178C6",
      },
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
        name: 'Laravel',
        percentage: 80,
        icon: <SiLaravel size={32} />,
        color: "#FF2D20",
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
        name: 'Kubernetes',
        percentage: 65,
        icon: <SiKubernetes size={32} />,
        color: "#326CE5",
      },
      {
        name: 'Bull MQ',
        percentage: 80,
        icon: <SiBullmq size={32} />,
        color: "#FF6B6B",
      },
      {
        name: 'Terraform',
        percentage: 60,
        icon: <SiTerraform size={32} />,
        color: "#7B42BC",
      },
      {
        name: 'AWS',
        percentage: 70,
        icon: <SiAmazonaws size={32} />,
        color: "#FF9900",
      },
      {
        name: 'GitHub Actions',
        percentage: 75,
        icon: <SiGithubactions size={32} />,
        color: "#2088FF",
      },
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
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
          <h3 className="font-bold text-gray-800">{skill.name}</h3>
          <p className="text-sm text-gray-500">{skill.percentage}% Proficiency</p>
        </div>
      </div>
      
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
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
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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