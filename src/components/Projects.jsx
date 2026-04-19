import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8c.15-.38.65-1.8-.15-3.8c0 0-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5c-.8 2-.3 3.42-.15 3.8a5.5 5.5 0 0 0-1.5 3.8c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "Chat Flow",
    description: "A real-time full-stack chat application with low-latency messaging via WebSockets and a highly responsive UI.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=800&q=80",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://chat-flow-red.vercel.app/",
    githubUrl: "https://github.com/GauravMishrabest777"
  },
  {
    id: 2,
    title: "Food Ordering Web Application",
    description: "A full-stack food ordering platform featuring menu browsing, add-to-cart functionality, and comprehensive order management.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?fit=crop&w=800&q=80",
    tech: ["Django", "Python", "JavaScript", "HTML/CSS"],
    liveUrl: "https://food-order-django.onrender.com",
    githubUrl: "https://github.com/GauravMishrabest777"
  },
  {
    id: 3,
    title: "Type 2 Diabetes Prediction System",
    description: "An ML-based web application that predicts Type 2 Diabetes using real-world patient data and trained classification models.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?fit=crop&w=800&q=80",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/GauravMishrabest777/type2diabetesprediction.git"
  },
  {
    id: 4,
    title: "React Chess Game",
    description: "A fundamental chess game developed with modern web technologies, showcasing chess logic and rules with a clean UI.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?fit=crop&w=800&q=80",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://chess-kappa-coral.vercel.app/",
    githubUrl: "https://github.com/GauravMishrabest777"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center md:text-left"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 max-w-xl text-lg text-center md:text-left"
            >
              Some of the latest work I've done. From robust internal tools to highly scalable consumer applications.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/GauravMishrabest777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors mx-auto md:mx-0"
          >
            View all on GitHub <ExternalLink className="ml-2 w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Replace src with your project image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 dark:bg-teal-500 text-white dark:text-white rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-teal-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${project.liveUrl === "#" ? "w-full" : ""}`}
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
