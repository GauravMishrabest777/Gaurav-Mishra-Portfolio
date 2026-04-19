import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.5 5.5 0 0 0-1.5-3.8c.15-.38.65-1.8-.15-3.8c0 0-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5c-.8 2-.3 3.42-.15 3.8a5.5 5.5 0 0 0-1.5 3.8c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center lg:text-left"
            >
              Let's Connect
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 mb-10 text-lg text-center lg:text-left"
            >
              I'm always open to discussing product design work or partnership opportunities.
            </motion.p>

            <div className="space-y-6 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="font-semibold text-slate-900 dark:text-white overflow-hidden text-ellipsis">gauramishrabest777@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 text-slate-600 dark:text-slate-400"
              >
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="font-semibold text-slate-900 dark:text-white">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: <GithubIcon className="w-5 h-5" />, href: "https://github.com/GauravMishrabest777" },
                { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://www.linkedin.com/in/gaurav-mishra-42a462280" },
                { icon: <TwitterIcon className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  href={social.href}
                  className="w-10 h-10 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-200 dark:shadow-none"
              >
                Send Message
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
