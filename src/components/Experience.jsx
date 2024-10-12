import React from 'react';
import { LiaConnectdevelop } from "react-icons/lia";
import { TbEggCracked } from "react-icons/tb";
import { PiNetworkDuotone } from "react-icons/pi";

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Xash Solutions',
    duration: 'March 2023 - April 2024 (1 year)',
    description: 'Developed scalable backend solutions using Node.js, Laravel and frontend interfaces with React.',
    icon: <LiaConnectdevelop size={120} />,
    iconColor: 'bg-primary',
  },
  {
    id: 2,
    title: 'Network Engineer (Part-time)',
    company: 'Lexco IT Solutions',
    duration: 'August 2021 - March 2023 (2 years)',
    description: 'Designed and implemented robust network infrastructure solutions.',
    icon: <PiNetworkDuotone size={120} />,
    iconColor: 'bg-tertiary',
  },
  {
    id: 3,
    title: 'Junior Software Developer (Intern)',
    company: 'Svetu Tech',
    duration: 'June 2021 - February 2022 (9 months)',
    description: 'Contributed to the development of web applications using JavaScript and React.',
    icon: <TbEggCracked size={120} />,
    iconColor: 'bg-secondary',
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="bg-light py-24 px-2">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">Professional Experience</h1>
        <div className="flex flex-col gap-16">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className={`w-24 h-24 md:w-40 md:h-40 ${experience.iconColor} rounded-full text-off-white flex items-center justify-center`}>
                {experience.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4">{experience.title}</h2>
                <p className="text-2xl">{experience.company}</p>
                <p className="text-lg text-gray-600 mb-8">{experience.duration}</p>
                <p className="text-lg">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;