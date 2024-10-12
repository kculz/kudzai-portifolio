import React from 'react';
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
  SiExpress
} from "react-icons/si";

const skills = [
  {
    name: 'React',
    percentage: 90,
    icon: <SiReact size={40} color="#61DAFB" />,
    progressColor: "#61DAFB",
  },
  {
    name: 'Node.js',
    percentage: 90,
    icon: <SiNodedotjs size={40} color="#339933" />,
    progressColor: "#339933",
  },
  {
    name: 'Express.js',
    percentage: 90,
    icon: <SiExpress size={40} color="#000000" />,
    progressColor: "#000000",
  },
  {
    name: 'Python',
    percentage: 70,
    icon: <SiPython size={40} color="#3776AB" />,
    progressColor: "#3776AB",
  },
  {
    name: 'Flask',
    percentage: 70,
    icon: <SiFlask size={40} color="#000000" />,
    progressColor: "#000000",
  },
  {
    name: 'Laravel',
    percentage: 80,
    icon: <SiLaravel size={40} color="#FF2D20" />,
    progressColor: "#FF2D20",
  },
  {
    name: 'Next.js',
    percentage: 70,
    icon: <SiNextdotjs size={40} color="#000000" />,
    progressColor: "#000000",
  },
  {
    name: 'TypeScript',
    percentage: 60,
    icon: <SiTypescript size={40} color="#3178C6" />,
    progressColor: "#3178C6",
  },
  {
    name: 'MySQL',
    percentage: 96,
    icon: <SiMysql size={40} color="#4479A1" />,
    progressColor: "#4479A1",
  },
  {
    name: 'MongoDB',
    percentage: 80,
    icon: <SiMongodb size={40} color="#47A248" />,
    progressColor: "#47A248",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-24">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">Skills</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              {skill.icon}
              <h2 className="text-2xl font-bold mb-2">{skill.name}</h2>
              <progress
                value={skill.percentage}
                max="100"
                className={`progress progress-accent h-2 rounded-full ${skill.progressColor}`}
                style={{ backgroundColor: `${skill.progressColor}20` }}
              />
              <p className="text-lg">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;