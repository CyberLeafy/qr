import React from 'react';
import Section from './Section';
import { Code2, Server, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white/50 dark:bg-slate-800/30 rounded-3xl backdrop-blur-sm my-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="inline-block p-3 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-2">
                <Code2 size={32} />
            </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            I'm a passionate web developer with a keen eye for design and a strong foundation in engineering principles. 
            I specialize in building scalable single-page applications and performant static websites.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Whether I'm writing clean React code, optimizing backend logic, or designing intuitive user interfaces, 
            my goal is always to create digital products that feel effortless to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 transition-colors">
                <Globe className="text-blue-500 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Frontend</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Responsive UIs with React, Tailwind, and modern CSS.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 transition-colors">
                <Server className="text-purple-500 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Backend</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Scalable APIs with Node.js, Express, and databases.</p>
            </div>
             <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 transition-colors sm:col-span-2">
                <Code2 className="text-primary-500 mb-3" size={28} />
                <h3 className="font-bold text-lg mb-2">Clean Code</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">I write maintainable, self-documenting code with a focus on type safety and testing.</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;