import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 80, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' },
        { name: 'Three.js', level: 75, color: 'from-green-500 to-emerald-500' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 75, color: 'from-green-700 to-green-800' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Git', level: 95, color: 'from-red-500 to-red-600' },
        { name: 'Linux', level: 85, color: 'from-yellow-600 to-orange-600' },
        { name: 'CI/CD', level: 75, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Mobile & Others',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 80, color: 'from-blue-500 to-purple-500' },
        { name: 'Flutter', level: 70, color: 'from-blue-400 to-cyan-400' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-rose-500' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Figma', level: 90, color: 'from-purple-500 to-pink-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

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
            <div className="px-4 py-2 glass-morphism rounded-full border border-cyber-500/30">
              <span className="text-cyber-400 font-mono text-sm">$ ls -la skills/</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-gradient-cyber mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks 
            that I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-morphism rounded-xl p-8 border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300 hover-glow"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-8"
              >
                <div className="text-4xl mr-4">{category.icon}</div>
                <h3 className="text-2xl font-tech font-bold text-gradient-cyber">
                  {category.title}
                </h3>
              </motion.div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-mono font-medium group-hover:text-neon-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse-neon rounded-full"></div>
                      </motion.div>
                      
                      {/* Glow effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 1 
                        }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-tech font-bold text-gradient-cyber mb-8">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Redux', 'Webpack', 'Jest', 'Cypress', 'Storybook', 'Prisma',
              'Supabase', 'Vercel', 'Netlify', 'Stripe', 'Socket.io', 'WebRTC'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 glass-morphism rounded-full border border-matrix-500/30 hover:border-matrix-500/60 transition-all duration-200 cursor-pointer"
              >
                <span className="text-matrix-400 font-mono text-sm hover:text-matrix-300 transition-colors duration-200">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;