import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import GlassCard from '../GlassCard';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Mail',
      url: 'mailto:codewithvxrd@gmail.com',
      icon: <Mail size={28} />,
      color: 'hover:text-[#333]',
      bg: 'hover:bg-[#333]/10',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/varad-singhal-ba1361326/',
      icon: <Linkedin size={28} />,
      color: 'hover:text-[#0077B5]',
      bg: 'hover:bg-[#0077B5]/10',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/varad_singhal/',
      icon: <Instagram size={28} />,
      color: 'hover:text-[#E4405F]',
      bg: 'hover:bg-[#E4405F]/10',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/VaradSinghal/',
      icon: <Github size={28} />,
      color: 'hover:text-[#40e479]',
      bg: 'hover:bg-[#40e479]/10',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full filter blur-3xl opacity-30 animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 max-w-lg">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-lg text-white/70">
            Find me online!
          </p>
        </div>

        {/* Social Links Card */}
        <GlassCard className="p-8 relative overflow-hidden border border-white/10 backdrop-blur-lg mx-auto">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-pink/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl opacity-30"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                <Send size={28} className="text-neon-pink" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Find me online
              </h3>
            </div>

            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              I'm always open to new opportunities and interesting conversations.
              Connect with me on these platforms!
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-glassBg border border-white/10 ${link.color} ${link.bg} transition-all duration-300 hover:border-white/20 hover:-translate-y-1 group`}
                >
                  <div className={`p-3 rounded-lg bg-glassBg border border-white/10 group-hover:bg-white/5 transition-all duration-300 ${link.color}`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-white/60">Connect with me on {link.name}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;