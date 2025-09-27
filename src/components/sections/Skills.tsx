import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { Smartphone, Satellite, ChevronRight, Server, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'App Development',
    icon: <Smartphone className="text-blue-600" size={24} />,
    skills: ['Flutter', 'Dart', 'Bloc', 'State Management', 'React Native'],
    color: 'from-blue-500',
  },
  {
    category: 'IoT',
    icon: <Satellite className="text-purple-600" size={24} />,
    skills: ['Embedded Software', 'Arduino', 'Esp', 'Pi', 'Protocols'],
    color: 'from-purple-500',
  },
  {
    category: 'Backend Development',
    icon: <Server className="text-cyan-600" size={24} />,
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL'],
    color: 'from-cyan-500',
  },
  {
    category: 'Technical Associate',
    icon: <Settings className="text-blue-600" size={24} />,
    skills: ['QwikLab Developers', 'IEEE GRSS', 'NextTech Labs', 'Team Robocon'],
    color: 'from-blue-500',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing bg-cream-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Skills & Expertise</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            A comprehensive overview of my technical skills and areas of expertise in software development and technology.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <ScrollReveal key={skill.category} delay={index * 0.1}>
              <div className="professional-card h-full shadow-professional hover:shadow-professional-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.skills.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <ChevronRight size={16} className="text-blue-500 mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;