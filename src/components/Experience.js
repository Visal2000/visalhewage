import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm currently building my skills through hands-on projects and learning opportunities. 
            While I may not have professional experience yet, I'm actively working towards becoming 
            a confident and capable developer.
          </p>
        </motion.div>

        {experiences.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-12 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              I'm actively seeking internships and entry-level positions where I can apply my skills, 
              learn from experienced professionals, and contribute to meaningful projects.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              <span>Let's Connect</span>
            </motion.div>
          </motion.div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-effect rounded-xl p-6 card-hover"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                          <p className="text-primary-400 font-medium">{experience.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{experience.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{experience.desc}</p>
                      
                      {experience.skills && (
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-dark-900 z-10"
                  />
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;