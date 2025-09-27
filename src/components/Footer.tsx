import { motion } from 'framer-motion';
import { Heart, Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 mt-20 relative overflow-hidden bg-cream-100">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-blue-100"
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
          className="absolute w-40 h-40 rounded-full bg-purple-100"
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
          className="absolute w-24 h-24 rounded-full bg-cyan-100"
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
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:varad.singhal@example.com"
              className="p-3 rounded-xl bg-cream-200 border border-cream-300 text-gray-600 hover:text-gray-900 hover:bg-cream-300 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/varad-singhal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-cream-200 border border-cream-300 text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/varad_singhal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-cream-200 border border-cream-300 text-gray-600 hover:text-pink-600 hover:bg-pink-100 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://github.com/varad-singhal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-cream-200 border border-cream-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center text-gray-600"
          >
            <span>Crafted with</span>
            <Heart className="mx-2 text-purple-600" size={18} fill="currentColor" />
            <span>by Varad Singhal | 2025</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-sm text-center max-w-md"
          >
            App Developer • IoT Expertise • Backend Dev • CSE Student
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;