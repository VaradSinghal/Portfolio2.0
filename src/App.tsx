import React from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Introduction from './components/sections/Introduction';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Interests from './components/sections/Interests';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Clubs from './components/sections/Clubs';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8 max-w-7xl"
      >
        <Introduction />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Interests />
        <Achievements />
        <Clubs />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;