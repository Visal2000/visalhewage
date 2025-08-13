import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'UI/UX Designer',
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-cyber-400' },
    { icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-neon-400' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-matrix-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-mono text-matrix-400"
            >
              <span className="text-neon-400">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-tech font-bold mb-6"
            >
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="text-gradient-cyber glitch" data-text="JOHN DOE">
                {/* PLACEHOLDER: Replace "JOHN DOE" with your actual name */}
                JOHN DOE
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-8 h-16"
            >
              <span className="text-gray-300">I'm a </span>
              <span className="text-gradient-cyber font-bold">
                {text}
                <span className="terminal-cursor"></span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl font-mono leading-relaxed"
            >
              {/* PLACEHOLDER: Replace with your actual description */}
              Passionate software engineer crafting digital experiences with cutting-edge 
              technologies. I transform complex problems into elegant solutions through 
              clean code and innovative thinking.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex justify-center lg:justify-start space-x-6 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 glass-morphism rounded-full border border-neon-500/20 hover:border-neon-500/50 transition-all duration-200 text-gray-400 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217, 70, 239, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-500 to-cyber-500 text-white rounded-lg font-mono font-semibold hover-glow transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-morphism border-2 border-neon-500/50 text-neon-400 rounded-lg font-mono font-semibold hover:bg-neon-500/10 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Terminal size={20} />
                <span>View Projects</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Profile Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Holographic frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-neon-500/30 w-80 h-80"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyber-500/40 w-72 h-72"
              />

              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500/20 to-cyber-500/20 rounded-full blur-xl"></div>
                
                {/* PLACEHOLDER: Add your profile image here */}
                <div className="relative w-full h-full glass-morphism rounded-full border-2 border-neon-500/30 overflow-hidden flex items-center justify-center">
                  <div className="text-6xl text-neon-400">
                    <Code />
                  </div>
                  {/* Uncomment and replace with your actual image */}
                  {/* <img
                    src="/path-to-your-profile-image.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Floating tech icons */}
                {[
                  { icon: Code, position: 'top-0 right-8', delay: 0 },
                  { icon: Terminal, position: 'bottom-8 left-0', delay: 1 },
                  { icon: Cpu, position: 'top-8 left-8', delay: 2 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} p-3 glass-morphism rounded-full border border-matrix-500/30`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay,
                    }}
                  >
                    <item.icon size={20} className="text-matrix-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 scan-line rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 font-mono">Scroll Down</span>
            <ChevronDown size={20} className="animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;