import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { GraduationCap,  Link } from 'lucide-react';

const educationItems = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2024 - 2028',
    details: 'Currently pursuing my bachelor\'s degree with a focus on cross platform full stack application development.',
    icon: <GraduationCap size={24} className="text-neon-cyan" />,
  },
  {
    institution: 'Delhi Public School, Korba',
    degree: 'KG-12 Education',
    period: 'Graduated',
    details: 'Received comprehensive education with excellent academic performance and participation in extracurricular activities.',
    icon: <GraduationCap size={24} className="text-neon-blue" />,
    linkedInBadge: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-gradient">Education</h2>
      </ScrollReveal>

      <div className="relative pl-8 ml-4 space-y-12">
        <div className="timeline-line"></div>
        
        {educationItems.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.2}>
            <div className="relative">
              <div className="timeline-dot" style={{ top: '24px' }}></div>
              <GlassCard className="p-6 ml-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-xl font-semibold">{item.institution}</h3>
                  </div>
                  <span className="text-neon-cyan text-sm px-3 py-1 rounded-full border border-neon-cyan/50">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-lg font-medium mb-2">{item.degree}</p>
                <p className="text-white/80 mb-4">{item.details}</p>
                
                {item.linkedInBadge && (
                  <div className="flex items-center text-neon-blue hover:text-neon-purple transition-colors">
                    <Link size={16} className="mr-2" />
                    <span className="text-sm">LinkedIn Verified</span>
                  </div>
                )}
              </GlassCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
