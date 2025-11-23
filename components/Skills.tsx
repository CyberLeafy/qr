import React from 'react';
import Section from './Section';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "Python", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Vue.js"]
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS"]
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "UI/UX Principles", "Responsive Design", "Accessibility"]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A toolkit honed through years of building and shipping web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center before:content-[''] before:w-1.5 before:h-6 before:bg-primary-500 before:mr-3 before:rounded-full">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;