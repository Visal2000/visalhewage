import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // PLACEHOLDER: Replace with your actual EmailJS configuration
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setIsSuccess(true);
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com', // PLACEHOLDER: Replace with your actual email
      href: 'mailto:your.email@example.com',
      color: 'from-neon-500 to-neon-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567', // PLACEHOLDER: Replace with your actual phone
      href: 'tel:+15551234567',
      color: 'from-cyber-500 to-cyber-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country', // PLACEHOLDER: Replace with your actual location
      href: '#',
      color: 'from-matrix-500 to-matrix-600'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' }, // PLACEHOLDER
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' }, // PLACEHOLDER
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' }, // PLACEHOLDER
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
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
              <span className="text-neon-400 font-mono text-sm">$ ping contact.server</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-gradient-cyber mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create 
            something extraordinary together. Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-tech font-semibold text-gradient-cyber mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 font-mono mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just chat about technology. Whether you have a project in mind 
                or want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group"
                >
                  <a
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass-morphism rounded-lg border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300 hover-glow"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}
                    >
                      <info.icon size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-tech font-medium group-hover:text-neon-400 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 font-mono text-sm group-hover:text-gray-300 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8"
            >
              <h4 className="text-lg font-tech font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
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
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 bg-gradient-to-r from-neon-500/10 to-cyber-500/10 rounded-full blur-xl mx-auto mt-8"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-morphism rounded-xl p-8 border border-neon-500/20 space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-tech font-semibold text-gradient-cyber mb-2">
                  Send Message
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full mx-auto"></div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 font-mono text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 text-sm font-mono font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-morphism border border-neon-500/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-500 focus:outline-none transition-colors font-mono"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 text-sm font-mono font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-morphism border border-neon-500/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-500 focus:outline-none transition-colors font-mono"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-gray-300 text-sm font-mono font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-morphism border border-neon-500/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-500 focus:outline-none transition-colors font-mono"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-gray-300 text-sm font-mono font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-morphism border border-neon-500/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-500 focus:outline-none transition-colors resize-none font-mono"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(217, 70, 239, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-neon-500 to-cyber-500 text-white py-4 px-6 rounded-lg font-mono font-semibold flex items-center justify-center space-x-2 hover-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="cyber-spinner"></div>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-matrix-400 font-mono text-sm"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;