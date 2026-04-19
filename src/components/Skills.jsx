import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "C"]
  },
  {
    category: "Frameworks & Libs",
    items: ["React.js", "Django", "FastAPI", "Node.js", "Scikit-learn"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Technical Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg"
          >
            Technologies and tools I use to build robust and scalable applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-teal-500 rounded-full mr-3"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
