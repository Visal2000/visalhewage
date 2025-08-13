import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Brain, Rocket, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable applications with modern frameworks and architectures.',
      color: 'from-neon-500 to-neon-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces that blend aesthetics with functionality.',
      color: 'from-cyber-500 to-cyber-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analyzing complex challenges and delivering innovative solutions.',
      color: 'from-matrix-500 to-matrix-600',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and scalability.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and methodologies.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Implementing robust security measures and best practices.',
      color: 'from-red-500 to-red-600',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '3+', label: 'Years Experience', icon: Zap },
    { number: '20+', label: 'Technologies', icon: Brain },
    { number: '100%', label: 'Client Satisfaction', icon: Rocket },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
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
            <div className="px-4 py-2 glass-morphism rounded-full border border-neon-500/30">
              <span className="text-neon-400 font-mono text-sm">$ cat about.txt</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-gradient-cyber mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed">
            {/* PLACEHOLDER: Replace with your actual about description */}
            Passionate software engineer with a love for creating digital experiences 
            that push the boundaries of what's possible. I thrive on turning complex 
            problems into elegant, efficient solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 glass-morphism rounded-xl border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300 hover-glow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full mb-4"
              >
                <stat.icon size={24} className="text-white" />
              </motion.div>
              <div className="text-3xl font-tech font-bold text-gradient-cyber mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass-morphism rounded-xl p-8 border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300 hover-glow card-3d"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 shadow-lg`}
              >
                <feature.icon size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-tech font-semibold text-white mb-4 group-hover:text-gradient-cyber transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-mono leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 to-cyber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 border border-neon-500/20 holographic">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <Code size={48} className="text-neon-400 mx-auto mb-4" />
            </motion.div>
            
            <blockquote className="text-xl md:text-2xl font-mono text-gray-300 italic leading-relaxed">
              {/* PLACEHOLDER: Replace with your personal statement */}
              "Code is poetry written in logic. Every line tells a story, 
              every function solves a problem, and every project brings 
              ideas to life in the digital realm."
            </blockquote>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-neon-400 font-tech font-semibold"
            >
              - Your Name Here {/* PLACEHOLDER: Replace with your actual name */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;