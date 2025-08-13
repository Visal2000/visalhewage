import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Terminal, Code, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' }, // PLACEHOLDER
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' }, // PLACEHOLDER
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' }, // PLACEHOLDER
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }, // PLACEHOLDER
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Three.js', 'Tailwind CSS'
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neon-500/20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-lg flex items-center justify-center neon-border">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-tech font-bold text-gradient-cyber">
                DEV.PORTFOLIO
              </span>
            </motion.div>
            
            <p className="text-gray-400 font-mono leading-relaxed mb-6 max-w-md">
              {/* PLACEHOLDER: Replace with your actual description */}
              Crafting digital experiences with passion and precision. 
              Transforming ideas into reality through code, one project at a time.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
              <Code size={16} />
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} className="text-neon-500 fill-current" />
              </motion.div>
              <span>and cutting-edge tech</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-tech font-semibold text-gradient-cyber mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="block text-gray-400 hover:text-neon-400 transition-colors duration-200 font-mono text-sm"
                >
                  <span className="text-neon-500">$</span> {link.name.toLowerCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-tech font-semibold text-gradient-cyber mb-4">
              Tech Stack
            </h3>
            <div className="space-y-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyber-400 transition-colors duration-200 font-mono text-sm cursor-pointer"
                >
                  <Zap size={12} className="text-matrix-500" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-morphism rounded-full border border-neon-500/20 hover:border-neon-500/50 hover:bg-neon-500/10 transition-all duration-200 text-gray-400 hover:text-neon-400"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-neon-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-mono text-sm">
              <span className="text-neon-400">©</span> 2025 Your Name. {/* PLACEHOLDER: Replace with your actual name */}
              <span className="text-cyber-400 ml-2">All rights reserved.</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-400 font-mono text-sm"
            >
              <Terminal size={16} className="text-matrix-500" />
              <span>Status:</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-matrix-400"
              >
                Available for hire
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;