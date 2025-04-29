import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: 'E-Learning Application',
    description: 'A modern, interactive application that facilitates online learning and improves connectivity between students and mentors.',
    image: 'https://img.freepik.com/free-photo/hands-working-digital-device-network-graphic-overlay_53876-138487.jpg?semt=ais_hybrid&w=740',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/VaradSinghal/e_learning_app',
    /*liveDemo: 'https://example.com',*/  
    details: `This app offers a streamlined platform for virtual learning, enabling students to attend live sessions, access recorded lectures, and submit assignments. It features user authentication, real-time chat, mentor dashboards, and course tracking. Built using Flutter for cross-platform deployment and Firebase for backend services like authentication, database, and cloud storage, it ensures scalability and a smooth user experience.`,
  },
  {
    title: 'Budget Tracker',
    description: 'A smart budgeting app that helps users monitor expenses, categorize spending, and stay financially organized in real time.',
    image: 'https://www.shutterstock.com/image-vector/finance-control-hand-drawn-composition-260nw-2382150379.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase'],
    github: 'https://github.com/VaradSinghal/budget-tracker',
    /*liveDemo: 'https://example.com',*/
    details: `The app allows users to add income and expense entries, view categorized transaction history, and analyze spending patterns through visual charts. It supports user authentication, cloud data sync, and responsive UI for a smooth experience across devices. Firebase handles user login and real-time sync, while Supabase is used for secure data storage and structured queries.`,
  },

  {  github: 'https://github.com/VaradSinghal/X-Y-Plotter',
    /*liveDemo: 'https://example.com',*/
    "title": "X-Y Plotter",
    "description": "A two axis plotter that can draw any shape on a surface using stepper motors.",
    "image": "https://5.imimg.com/data5/MJ/CT/KN/SELLER-86432279/2d-cnc-plotter-500x500.jpg",
    "technologies": ["GRBL", "Arduino", "ROS (optional)", "Servomotors"],
    "details": "This project involves designing and building a 2D plotter using mechanical rails and stepper motors that servers as the axis. On the vertical axis, a servo motor is fixed for the movement of pen. The plotter can be controlled using GRBL firmware, which is compatible with G-code commands. The project can be extended to include a Raspberry Pi for advanced features like remote control and image processing.",
  }
];

const ProjectModal = ({ project, isOpen, onClose }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card w-full max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 mb-6">{project.details}</p>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-white/60 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-glassBg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/20 text-white hover:bg-neon-blue/30 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/20 text-white hover:bg-neon-purple/30 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-gradient">Projects</h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
            <GlassCard 
              className="h-full overflow-hidden cursor-pointer"
              glowOnHover={false}
              tiltOnHover={true}
            >
              <div 
                className="h-48 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-glassBg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-neon-cyan hover:text-neon-purple transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <span>View details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;