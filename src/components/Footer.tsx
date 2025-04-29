import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 mt-20 relative overflow-hidden">
      <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-b from-transparent via-background/70 to-background z-10"></div>
      
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-neon-blue/5"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-neon-purple/5"
          animate={{
            x: [0, -150, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '40%', right: '20%' }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-neon-cyan/5"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', left: '30%' }}
        />
      </div>
      <br></br><br></br>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/varad-singhal-ba1361326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-glassBg border border-white/10 text-white/70 hover:text-[#0077B5] hover:border-[#0077B5]/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href='https://www.instagram.com/varad_singhal/'
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-glassBg border border-white/10 text-white/70 hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href='https://github.com/VaradSinghal/'
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-glassBg border border-white/10 text-white/70 hover:text-[#40e479] hover:border-[#E4405F]/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Github size={24} />
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center text-white/70"
          >
            <span>Crafted with</span>
            <Heart className="mx-2 text-neon-purple" size={18} fill="currentColor" />
            <span>by Varad Singhal | 2025</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-sm text-center max-w-md"
          >
            App Developer • IoT Expertise • Backend Dev • CSE Student
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;