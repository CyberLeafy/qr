import React from 'react';
import Section from './Section';
import { Project } from '../types';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "CyberGuard Dashboard",
    description: "A comprehensive security analytics dashboard featuring real-time threat monitoring and data visualization.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    github: "https://github.com/CyberLeafy",
    link: "#"
  },
  {
    id: 2,
    title: "EcoTrack Mobile",
    description: "A sustainable habit tracker PWA that gamifies reducing your carbon footprint with daily challenges.",
    tags: ["Vue.js", "Firebase", "PWA", "Chart.js"],
    github: "https://github.com/CyberLeafy",
    link: "#"
  },
  {
    id: 3,
    title: "DevFolio Generator",
    description: "CLI tool aimed at developers to instantly generate high-performance static portfolio sites.",
    tags: ["Node.js", "Inquirer", "EJS", "Chalk"],
    github: "https://github.com/CyberLeafy",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
           <p className="text-slate-600 dark:text-slate-400">Some things I've built recently.</p>
        </div>
        <a 
            href="https://github.com/CyberLeafy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1"
        >
            View all archives <ExternalLink size={16}/>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                <img 
                    src={`https://picsum.photos/seed/${project.id + 10}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href={project.github} className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform" aria-label="View Code">
                        <Github size={20} />
                     </a>
                     <a href={project.link} className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform" aria-label="View Demo">
                        <ExternalLink size={20} />
                     </a>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;