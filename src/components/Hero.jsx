import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium text-sm mb-8 border border-teal-100 dark:border-teal-800"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
        >
          Building Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">Experiences That Matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed"
        >
          Hi, I'm Gaurav Mishra. An aspiring Software Engineer passionate about building sophisticated web applications and Machine Learning solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-medium rounded-full flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:shadow-xl hover:shadow-slate-900/20"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1wTMYhb4uOPhcGk_6N2FMNLyKtsBWO3qL/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-teal-500 text-white font-medium rounded-full flex items-center justify-center hover:bg-teal-600 transition-all shadow-lg shadow-teal-200/50"
          >
            <Mail className="ml-0 mr-2 w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
