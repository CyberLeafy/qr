import React from 'react';
import Section from './Section';
import { Github, Instagram, Youtube, Mail, Globe, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <Section id="contact-content" className="!py-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Currently open for freelance opportunities and collaborations. <br/>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:contact@cyberleafy.dev" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all hover:-translate-y-1"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a href="https://github.com/CyberLeafy" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:text-primary-500 dark:hover:text-primary-400 transition-all hover:-translate-y-1 group">
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:text-pink-500 transition-all hover:-translate-y-1">
            <Instagram size={32} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:text-red-500 transition-all hover:-translate-y-1">
            <Youtube size={32} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:text-blue-500 transition-all hover:-translate-y-1">
            <Globe size={32} />
            <span className="sr-only">Website</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-8 gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} CyberLeafy. Built with React & Tailwind.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:shadow-md hover:text-primary-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;