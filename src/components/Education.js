import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/constants';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My education has been a journey of self-discovery and growth. 
            My educational details are as follows.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <motion.img
                        src={edu.img}
                        alt={edu.school}
                        className="w-16 h-16 rounded-lg object-cover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{edu.school}</h3>
                        <p className="text-primary-400 font-medium mb-2">{edu.degree}</p>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{edu.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award size={16} />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{edu.desc}</p>
                  </motion.div>
                </div>
                
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-6 h-6 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-dark-900 z-10 hidden md:block"
                />
                
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <GraduationCap size={24} className="text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-2">Current Student</h3>
            <p className="text-gray-400 text-sm">Pursuing Software Engineering</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Award size={24} className="text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-2">Academic Excellence</h3>
            <p className="text-gray-400 text-sm">Strong academic performance</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-white text-xl">🎯</span>
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-2">Focused Learning</h3>
            <p className="text-gray-400 text-sm">Continuous skill development</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;