import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { Smartphone,  Satellite, ChevronRight, Server, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'App Development',
    icon: <Smartphone className="text-neon-blue" size={24} />,
    skills: ['Flutter', 'Dart', 'Bloc', 'State Management', 'CRUD'],
    color: 'from-neon-blue',
  },
  {
    category: 'IoT',
    icon: <Satellite className="text-neon-purple" size={24} />,
    skills: ['Embedded Software', 'Arduino', 'Esp', 'Pi', 'Protocols'],
    color: 'from-neon-purple',
  },
  {
    category: 'Backend Development',
    icon: <Server className="text-neon-cyan" size={24} />,
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL'],
    color: 'from-neon-cyan',
  },
  {
    category: 'Technical Associate',
    icon: <Settings className="text-neon-blue" size={24} />,
    skills: ['QwikLab Developers', 'IEEE GRSS', 'NextTech Labs', 'Team Robocon'],
    color: 'from-neon-blue',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-gradient">Skills & Expertise</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <ScrollReveal key={skill.category} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
            <GlassCard className="h-full p-6">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center text-white/80"
                  >
                    <ChevronRight size={16} className={`text-${skill.color.split('-')[1]}`} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;