import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import Scene3D from './components/3D/Scene3D';
import './index.css';

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="cyber-spinner mb-4"></div>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-neon-400 font-mono"
      >
        Initializing...
      </motion.div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-matrix-bg relative overflow-x-hidden">
      {/* Matrix rain background */}
      <MatrixRain />
      
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Cyber grid overlay */}
      <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none z-0"></div>

      {/* Main content */}
      <div className="relative z-10 matrix-bg">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-500 to-transparent opacity-50 pointer-events-none z-20"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export default App;