import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Zap, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Zap },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'backend', name: 'Backend', icon: Database },
  ];

  // MOCK DATA - Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, shopping cart, payment processing with Stripe, order management, and a complete admin dashboard for inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React Native mobile app for task management with real-time synchronization and offline support.',
      longDescription: 'A powerful task management application built with React Native. Features include real-time synchronization, offline support, push notifications, and collaborative workspaces.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-task-app-demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Chat Bot API',
      description: 'RESTful API for AI-powered chatbot with natural language processing and machine learning capabilities.',
      longDescription: 'A sophisticated AI chatbot API built with Python and FastAPI. Integrates with OpenAI GPT models and includes natural language processing, sentiment analysis, and conversation memory.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'backend',
      tags: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/yourusername/ai-chatbot-api',
      demo: 'https://your-chatbot-demo.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with 3D animations, built with React and Three.js.',
      longDescription: 'A cutting-edge portfolio website featuring 3D animations, interactive elements, and modern design. Built with React, Three.js, and Framer Motion for smooth animations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'web',
      tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with data visualization and location-based forecasts.',
      longDescription: 'A comprehensive weather dashboard that provides real-time weather data, forecasts, and interactive maps. Features include location-based weather, historical data visualization, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      category: 'web',
      tags: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://your-weather-demo.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile fitness tracking app with workout plans, progress tracking, and social features.',
      longDescription: 'A comprehensive fitness tracking application with personalized workout plans, progress tracking, social features, and integration with wearable devices.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      category: 'mobile',
      tags: ['React Native', 'HealthKit', 'Firebase', 'Charts'],
      github: 'https://github.com/yourusername/fitness-tracker',
      demo: 'https://your-fitness-demo.com',
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 glass-morphism rounded-full border border-matrix-500/30">
              <span className="text-matrix-400 font-mono text-sm">$ git log --oneline</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-gradient-cyber mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed">
            A showcase of my latest work, featuring cutting-edge technologies 
            and innovative solutions to real-world problems.
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
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-mono font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-neon-500 to-cyber-500 text-white shadow-lg hover-glow'
                  : 'glass-morphism text-gray-300 hover:text-white border border-neon-500/20 hover:border-neon-500/50'
              }`}
            >
              <category.icon size={18} />
              <span>{category.name}</span>
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
                className="group glass-morphism rounded-xl overflow-hidden border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300 hover-glow cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass-morphism rounded-full hover:bg-neon-500/20 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass-morphism rounded-full hover:bg-cyber-500/20 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full text-white text-xs font-mono font-bold">
                        FEATURED
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-tech font-semibold text-white mb-3 group-hover:text-gradient-cyber transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 font-mono text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-neon-500/20 text-neon-300 rounded text-xs font-mono border border-neon-500/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
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
                className="glass-morphism rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neon-500/30"
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
                    className="absolute top-4 right-4 p-2 glass-morphism rounded-full hover:bg-red-500/20 transition-colors"
                  >
                    <span className="text-white text-xl">×</span>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-tech font-bold text-gradient-cyber">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full text-white text-xs font-mono font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 font-mono leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neon-500/20 text-neon-300 rounded-full text-sm font-mono border border-neon-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 glass-morphism border border-gray-600 text-white rounded-lg hover:bg-gray-700/50 transition-all duration-200 font-mono"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217, 70, 239, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-500 to-cyber-500 text-white rounded-lg hover-glow transition-all duration-200 font-mono"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
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