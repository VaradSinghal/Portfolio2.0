import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import { Briefcase, GraduationCap, MapPin, Satellite, Server } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="about" className="min-h-screen py-20 flex flex-col justify-center">
      <div className="space-y-28">
        <ScrollReveal>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Varad Singhal
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Briefcase className="text-neon-cyan" size={20} />
              <span>App Developer</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <Satellite className="text-neon-purple" size={20} />
              <span>IoT Expertise</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <Server className="text-neon-purple" size={20} />
              <span>Backend Dev</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center gap-2">
              <GraduationCap className="text-neon-blue" size={20} />
              <span>CSE Student</span>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="right">
          <div className="glass-card p-6 md:p-8 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-neon-cyan" />
              <p className="text-lg font-medium">From Korba, At SRMIST Kattankulathur</p>
            </div>
            <p className="text-white/80 leading-relaxed">
            I'm a driven developer passionate about blending software engineering with real-world innovation. 
      With expertise in app development, IoT systems, and backend technologies, I build connected solutions 
      that are both intelligent and impactful. Always curious and hands-on, I thrive at the intersection of code and creativity.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Introduction;