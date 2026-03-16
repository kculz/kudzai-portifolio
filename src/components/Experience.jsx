import React, { useState, useRef } from 'react';
import { LiaConnectdevelop } from "react-icons/lia";
import { TbEggCracked } from "react-icons/tb";
import { PiNetworkDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Xash Contract',
    location: 'Remote',
    duration: 'March 2024 - Present',
    description: 'Worked on fintech software solutions, API integrations, and scaling payment systems.',
    achievements: [
      'Developed and optimized secure fintech platforms for seamless financial operations',
      'Integrated Value Added Services (VAS) such as airtime bundle and electricity bill payments',
      'Designed and implemented backoffice functionalities and portals with clean UI/UX',
      'Collaborated on system scaling and performance optimization for high-traffic environments'
    ],
    icon: <LiaConnectdevelop size={40} />,
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Computer Science Teacher',
    company: 'Miami Academy',
    location: 'Zimbabwe',
    duration: 'March 2024 - Present',
    description: 'Empowering students with Computer Science knowledge and practical skills.',
    achievements: [
      'Maintained a 100% pass rate for Computer Science students',
      'Developed and executed theoretical and practical lesson plans for high school curriculum',
      'Mentored students in software projects and coding fundamentals',
      'Fostered a positive learning environment driving student engagement and success'
    ],
    icon: <FaChalkboardTeacher size={40} />,
    color: '#F59E0B',
  },
  {
    id: 3,
    title: 'Lead Developer',
    company: 'LoadFix',
    location: 'Remote',
    duration: '2024 - Present',
    description: 'Lead the complete development lifecycle of a comprehensive logistics application, overseeing frontend, backend, and DevOps operations.',
    achievements: [
      'Designed scalable system architecture to handle complex logistics workflows and real-time data processing',
      'Built responsive frontend interfaces and robust backend APIs using modern JavaScript frameworks and Node.js',
      'Implemented CI/CD pipelines, managed deployments, and optimized application performance for production environments',
      'Coordinated with cross-functional teams to define requirements, design solutions, and deliver features on schedule'
    ],
    icon: <LiaConnectdevelop size={40} />,
    color: '#4F46E5',
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'Curlben Solutions',
    location: 'Remote',
    duration: '2023 - Present',
    description: 'Systems architecture and full-stack development for enterprise-level applications.',
    achievements: [
      'Designed and implemented scalable software architectures for enterprise-level applications',
      'Developed robust server-side applications using Node.js, Express.js, and Python',
      'Optimized database performance and implemented efficient data storage solutions using MongoDB',
      'Streamlined development workflows and automated deployment processes through DevOps integration'
    ],
    icon: <LiaConnectdevelop size={40} />,
    color: '#10B981',
  },
  {
    id: 5,
    title: 'Software Developer',
    company: 'Xashpay',
    location: 'Remote',
    duration: 'March 2023 - March 2024',
    description: 'Contract role focusing on fintech web application development with emphasis on security and payment integrations.',
    achievements: [
      'Designed, coded, tested, and debugged scalable web applications using React.js, Node.js, and PHP Laravel',
      'Implemented robust security measures to protect sensitive financial data and user information',
      'Successfully integrated multiple payment gateways and financial service APIs',
      'Created intuitive and responsive interfaces using HTML5, CSS3, JavaScript, and Tailwind CSS'
    ],
    icon: <TbEggCracked size={40} />,
    color: '#8B5CF6',
  },
  {
    id: 6,
    title: 'Computer Network Engineer',
    company: 'Lexco IT Solutions',
    location: 'Mutare, Zimbabwe',
    duration: 'April 2021 - March 2023',
    description: 'Part-time role designing and implementing network solutions for educational institutions and government facilities.',
    achievements: [
      'Successfully installed and configured networks for over 20 schools in Mutare Urban and Rural areas',
      'Worked on network installation projects for Police Stations in partnership with PORTRAZ',
      'Designed and implemented network solutions for educational institutions and government facilities',
      'Specialized in WAN, LAN, and VSAT configurations for various organizational requirements'
    ],
    icon: <PiNetworkDuotone size={40} />,
    color: '#0EA5E9',
  },
  {
    id: 7,
    title: 'Web Developer',
    company: 'Svetu PVT Ltd',
    location: 'Zimbabwe',
    duration: 'April 2021 - March 2022',
    description: 'Internship focused on gaining foundational experience in modern web development technologies.',
    achievements: [
      'Developed proficiency in JavaScript, Node.js, Express.js, React.js, React-Redux, and MongoDB',
      'Contributed to multiple client projects gaining hands-on experience in professional software development',
      'Gained foundational experience in modern full-stack web development technologies',
      'Worked collaboratively on client projects under senior developer supervision'
    ],
    icon: <TbEggCracked size={40} />,
    color: '#F97316',
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(1);
  const timelineRef = useRef(null);

  return (
    <section id="experiences" className="py-24 px-6 bg-dark text-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-light">Professional Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional journey and key roles that have shaped my expertise.
          </p>
        </div>

        {/* Timeline navigation */}
        <div ref={timelineRef} className="flex justify-center mb-12 overflow-x-auto">
          <div className="relative flex items-center min-w-max">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                {/* Timeline connector */}
                {index > 0 && (
                  <div className="h-0.5 w-12 md:w-24 bg-slate-800"></div>
                )}
                
                {/* Timeline node */}
                <button
                  onClick={() => setActiveExperience(exp.id)}
                  className={`relative rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 ${
                    activeExperience === exp.id
                      ? 'bg-dark-card border border-white/10 shadow-lg scale-110 z-10'
                      : 'bg-slate-800 border border-transparent'
                  }`}
                  style={{
                    color: activeExperience === exp.id ? exp.color : '#94a3b8'
                  }}
                >
                  {exp.icon}
                  <span className={`absolute -bottom-8 text-xs font-medium whitespace-nowrap ${
                    activeExperience === exp.id ? 'text-light font-bold' : 'text-gray-500'
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
              <div className="bg-dark-card border border-white/5 rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-light">{exp.title}</h3>
                    <div className="flex items-center text-gray-400">
                      <span className="font-medium text-gray-300">{exp.company}</span>
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

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div 
                          className="mt-1.5 mr-3 w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
                        ></div>
                        <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
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