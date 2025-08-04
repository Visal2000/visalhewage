import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Users, Calendar } from 'lucide-react';
import { projects } from '../data/constants';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'web app', 'android app', 'machine learning'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I have worked on a wide range of projects. From web apps to android apps. 
            Here are some of my projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white border border-primary-500/20 hover:border-primary-500/50'
              }`}
            >
              {category === 'all' ? 'All' : category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <div className="flex space-x-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors"
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                        {project.webapp && (
                          <motion.a
                            href={project.webapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs border border-primary-500/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {project.member && (
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-gray-400" />
                      <div className="flex -space-x-2">
                        {project.member.slice(0, 3).map((member, memberIndex) => (
                          <motion.img
                            key={memberIndex}
                            src={member.img}
                            alt={member.name}
                            className="w-6 h-6 rounded-full border-2 border-dark-800"
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                          />
                        ))}
                        {project.member.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-primary-500 border-2 border-dark-800 flex items-center justify-center text-xs text-white">
                            +{project.member.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <span className="text-gray-400">{selectedProject.date}</span>
                  </div>

                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {selectedProject.member && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Team Members</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.member.map((member, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <img
                              src={member.img}
                              alt={member.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="text-white font-medium">{member.name}</p>
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:text-primary-300 text-sm"
                              >
                                GitHub
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-dark-700 text-white px-6 py-3 rounded-lg hover:bg-dark-600 transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {selectedProject.webapp && (
                      <motion.a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;