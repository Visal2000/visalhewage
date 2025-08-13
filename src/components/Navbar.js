import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Code, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Terminal },
    { name: 'About', href: '#about', icon: Code },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: '#contact', icon: Terminal },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-lg flex items-center justify-center neon-border">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-tech font-bold text-gradient-cyber">
              DEV.PORTFOLIO
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center space-x-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                <span className="font-mono text-sm">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-500 to-cyber-500 transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(217, 70, 239, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-neon-500 to-cyber-500 text-white rounded-lg font-mono text-sm hover-glow transition-all duration-200"
            >
              <span className="flex items-center space-x-2">
                <Zap size={16} />
                <span>Hire Me</span>
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-t border-neon-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={18} />
                  <span className="font-mono">{item.name}</span>
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-neon-500 to-cyber-500 text-white rounded-lg font-mono text-sm hover-glow transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Zap size={16} />
                  <span>Hire Me</span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;