import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left mb-12">
          
          <div>
            <a href="#home" className="flex items-center justify-center md:justify-start space-x-2 text-slate-900 dark:text-white mb-4">
              <Code2 size={24} className="text-teal-500" />
              <span className="font-bold text-xl tracking-tight">Gaurav Mishra</span>
            </a>
            <p className="text-slate-400 max-w-sm">
              Building beautiful, functional, and user-friendly digital experiences. Let's create something amazing together.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gaurav Mishra. All rights reserved.</p>
          <p>Designed taking inspiration from minimal SaaS principles.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
