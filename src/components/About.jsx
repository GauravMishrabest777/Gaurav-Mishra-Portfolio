import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="aspect-square w-full max-w-[280px] md:max-w-md relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace the src with your actual image path (e.g., /profile.jpg) */}
              <img 
                src="/profile.jpg" 
                alt="Gaurav Mishra" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-100 dark:bg-teal-900/30 rounded-3xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center md:text-left">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I am an aspiring final-year undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering at the United Institute of Technology, Prayagraj.
              </p>
              <p>
                I possess a strong analytical mindset and an eagerness to learn and adapt to new technologies. I take pride in contributing effectively through dedication, teamwork, and a positive work ethic. My academic background and hands-on projects have allowed me to build expertise in full-stack development and machine learning.
              </p>
              <p>
                During my Summer Internship at Aditya Birla Group, I developed predictive ML models using real-world healthcare datasets. I'm keen on continuing to create impactful and robust software solutions as I begin my professional journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
