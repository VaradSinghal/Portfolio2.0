import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import { Briefcase, GraduationCap, MapPin, Satellite, Server, Download, Mail, Linkedin, Github } from 'lucide-react';

const Introduction = () => {
  const handleDownloadResume = () => {
    // Create a link element to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Varad_Singhal_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen py-20 flex flex-col justify-center hero-gradient hero-pattern relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-100/20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-100/20"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '30%', right: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-cyan-100/20"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for opportunities
                </div>
                
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-gray-900">Hi, I'm</span>
                    <br />
                    <span className="text-gradient name-highlight">
                      Varad Singhal
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-medium text-gray-700">
                    App Developer • IoT Expert • Backend Developer
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  I'm a driven developer passionate about blending software engineering with real-world innovation. 
                  With expertise in app development, IoT systems, and backend technologies, I build connected solutions 
                  that are both intelligent and impactful.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Skills Tags */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Briefcase className="text-blue-600" size={18} />, text: 'App Developer' },
                  { icon: <Satellite className="text-purple-600" size={18} />, text: 'IoT Expert' },
                  { icon: <Server className="text-cyan-600" size={18} />, text: 'Backend Dev' },
                  { icon: <GraduationCap className="text-blue-600" size={18} />, text: 'CSE Student' }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-cream-100 rounded-full text-sm font-medium text-gray-700 hover:bg-cream-200 transition-colors duration-300"
                  >
                    {skill.icon}
                    <span>{skill.text}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Location and Actions */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-lg">From Korba, At SRMIST Kattankulathur</span>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleDownloadResume}
                    className="btn-primary flex items-center justify-center gap-2 text-sm px-6 py-3"
                  >
                    <Download size={18} />
                    Download Resume
                  </button>
                  
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="mailto:codewithvxrd@gmail.com" 
                      className="btn-secondary flex items-center justify-center gap-2"
                    >
                      <Mail size={20} />
                      Contact
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/varad-singhal-ba1361326/"  
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center justify-center gap-2"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/VaradSinghal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center justify-center gap-2"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Professional image */}
          <ScrollReveal delay={0.6} direction="right">
            <div className="relative">
              <div className="professional-card p-0 overflow-hidden shadow-professional-lg">
                <img 
                  src="/Hero.jpg" 
                  alt="Varad Singhal - Professional Photo"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-professional rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-professional rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Introduction;