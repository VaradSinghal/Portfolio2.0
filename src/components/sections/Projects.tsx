import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: 'E-Learning Application',
    description: 'A modern, interactive application that facilitates online learning and improves connectivity between students and mentors.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/VaradSinghal/e_learning_app',
    details: `This app offers a streamlined platform for virtual learning, enabling students to attend live sessions, access recorded lectures, and submit assignments. It features user authentication, real-time chat, mentor dashboards, and course tracking. Built using Flutter for cross-platform deployment and Firebase for backend services like authentication, database, and cloud storage, it ensures scalability and a smooth user experience.`,
  },
  {
    title: 'Budget Tracker',
    description: 'A smart budgeting app that helps users monitor expenses, categorize spending, and stay financially organized in real time.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase'],
    github: 'https://github.com/VaradSinghal/budget-tracker',
    details: `The app allows users to add income and expense entries, view categorized transaction history, and analyze spending patterns through visual charts. It supports user authentication, cloud data sync, and responsive UI for a smooth experience across devices. Firebase handles user login and real-time sync, while Supabase is used for secure data storage and structured queries.`,
  },
  {
    title: "X-Y Plotter",
    description: "A two axis plotter that can draw any shape on a surface using stepper motors.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
    technologies: ["GRBL", "Arduino", "ROS (optional)", "Servomotors"],
    github: 'https://github.com/VaradSinghal/X-Y-Plotter',
    details: "This project involves designing and building a 2D plotter using mechanical rails and stepper motors that servers as the axis. On the vertical axis, a servo motor is fixed for the movement of pen. The plotter can be controlled using GRBL firmware, which is compatible with G-code commands. The project can be extended to include a Raspberry Pi for advanced features like remote control and image processing.",
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
            className="professional-card max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-professional-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
              <p className="text-gray-600 leading-relaxed">{project.details}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-spacing bg-cream-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Featured Projects</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            A showcase of my recent projects that demonstrate my skills in app development, IoT, and full-stack solutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="professional-card h-full shadow-professional hover:shadow-professional-lg transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 flex-1 justify-center"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-outline flex-1"
                  >
                    Details
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
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