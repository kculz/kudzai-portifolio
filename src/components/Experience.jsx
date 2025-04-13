import React, { useState, useRef } from 'react';
import { LiaConnectdevelop } from "react-icons/lia";
import { TbEggCracked } from "react-icons/tb";
import { PiNetworkDuotone } from "react-icons/pi";

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Xash Solutions',
    location: 'Remote',
    duration: 'March 2023 - April 2024',
    description: 'Developed scalable backend solutions using Node.js, Laravel and frontend interfaces with React.',
    achievements: [
      'Led the development of 3 major client projects with 100% on-time delivery',
      'Reduced API response time by 40% through caching and optimization',
      'Implemented CI/CD pipelines that decreased deployment time by 65%',
      'Mentored 2 junior developers, improving team productivity'
    ],
    icon: <LiaConnectdevelop size={40} />,
    color: '#4F46E5',
  },
  {
    id: 2,
    title: 'Network Engineer',
    company: 'Lexco IT Solutions',
    location: 'Mutare, Zimbabwe',
    duration: 'August 2021 - March 2023',
    description: 'Designed and implemented robust network infrastructure solutions.',
    achievements: [
      'Configured and maintained networks serving over 500 concurrent users',
      'Reduced network downtime by 75% through implementing redundant systems',
      'Deployed and managed firewall solutions for 15+ client organizations',
      'Created documentation that improved troubleshooting efficiency by 30%'
    ],
    icon: <PiNetworkDuotone size={40} />,
    color: '#0EA5E9',
  },
  {
    id: 3,
    title: 'Junior Software Developer',
    company: 'Svetu Tech',
    location: 'Harare, Zimbabwe',
    duration: 'June 2021 - February 2022',
    description: 'Contributed to the development of web applications using JavaScript and React.',
    achievements: [
      'Developed responsive UI components used across 5 client websites',
      'Fixed over 50 bugs in the codebase, improving application stability',
      'Collaborated with UX designers to implement intuitive user interfaces',
      'Participated in daily stand-ups and agile development processes'
    ],
    icon: <TbEggCracked size={40} />,
    color: '#F97316',
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(1);
  const timelineRef = useRef(null);

  return (
    <section id="experiences" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey and key roles that have shaped my expertise.
          </p>
        </div>

        {/* Timeline navigation */}
        <div ref={timelineRef} className="flex justify-center mb-12">
          <div className="relative flex items-center">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                {/* Timeline connector */}
                {index > 0 && (
                  <div className="h-0.5 w-12 md:w-24 bg-gray-200"></div>
                )}
                
                {/* Timeline node */}
                <button
                  onClick={() => setActiveExperience(exp.id)}
                  className={`relative rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 ${
                    activeExperience === exp.id
                      ? 'bg-white shadow-md scale-110 z-10'
                      : 'bg-gray-100'
                  }`}
                  style={{
                    color: activeExperience === exp.id ? exp.color : '#94a3b8'
                  }}
                >
                  {exp.icon}
                  <span className={`absolute -bottom-8 text-xs font-medium whitespace-nowrap ${
                    activeExperience === exp.id ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    {exp.duration.split(' - ')[0]}
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Experience details */}
        <div className="mt-16">
          {experiences.map(exp => (
            <div
              key={exp.id}
              className={`transition-all duration-500 ${
                activeExperience === exp.id
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 absolute'
              }`}
              style={{ display: activeExperience === exp.id ? 'block' : 'none' }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span 
                      className="py-1.5 px-4 rounded-full text-sm font-medium"
                      style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{exp.description}</p>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div 
                          className="mt-1 mr-3 w-4 h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        ></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;