import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import { Bio } from '../data/constants';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: Bio.github, label: 'GitHub' },
    { icon: Linkedin, href: Bio.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: Bio.insta, label: 'Instagram' },
    { icon: Facebook, href: Bio.facebook, label: 'Facebook' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VH</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Visal Hewage</span>
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating amazing digital experiences 
              and solving complex problems through code.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-dark-800/50 rounded-full border border-primary-500/20 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
                >
                  <social.icon size={20} className="text-primary-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-primary-500/20 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Visal Hewage. All rights reserved.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and React</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute bottom-10 left-10 w-2 h-2 bg-primary-500 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-1 h-1 bg-purple-500 rounded-full"
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;