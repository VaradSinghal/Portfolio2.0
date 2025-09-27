import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Interests', href: '#interests' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Clubs', href: '#clubs' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-4 left-4 right-4 z-50">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`glass-card backdrop-blur-xl bg-white/20 border border-white/30 shadow-professional transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          <div className="flex justify-center">
            <ul className="flex space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 text-xs md:text-sm font-medium transition-all duration-300 relative group px-2 md:px-3 py-2 rounded-lg hover:bg-white/30"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass-card backdrop-blur-xl bg-white/20 border border-white/30 p-3 shadow-professional hover:bg-white/30 transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-gray-700 group-hover:text-gray-900" /> : <Menu size={24} className="text-gray-700 group-hover:text-gray-900" />}
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 glass-card backdrop-blur-xl bg-white/20 border border-white/30 p-6 w-64 shadow-professional-lg"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-lg hover:bg-white/30 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;