import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { Award, Code, BadgeCheck,AppWindow } from 'lucide-react';

const certifications = [
  {
    title:  'Fundamentals of Object-Oriented Programming',
    issuer: 'IIT Roorkee',
    date: '2025',
    description: 'Completed a course on the fundamentals of object-oriented programming, focusing on concepts like classes, objects, inheritance, and polymorphism.',
    icon: <Code size={24} className="text-neon-blue" />,
  },
  {
    title:  'IBM iOS and Android Mobile App Developer',
    issuer: 'IBM',
    date: '2025',
    description: 'Completed a course on mobile app development for iOS and Android platforms, focusing on cross-platform frameworks and best practices.',
    icon: <AppWindow size={24} className="text-neon-blue" />,
  },
  { 
    title:  'Python',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Completed the comprehensive Python programming course focusing on scientific computing applications and data analysis.',
    icon: <Code size={24} className="text-neon-blue" />,
  },
  {
    title:  'Java',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Completed a comprehensive Java programming course with emphasis on object-oriented design, data structures, and backend development.',
    icon: <Code size={24} className="text-neon-blue" />,
  },
  {
    title: 'Certification of appreciation for the INN.ING 2.0 Hackathon',
    category: 'Hackathon Project',
    date: '2025',
    description: 'a smart plant health monitoring system using sensors. It uses a python model to predict the health of the plant and a webiste to monitor the data.',
    technologies: ['ESP32', 'Web Development', 'Firebase'],
    icon: < BadgeCheck size={24} className="text-neon-purple" />,
  },
  {
    title: 'Certification of appreciation for the InnovateX Hackathon',
    category: 'Hackathon Project',
    date: '2025',
    description: 'An awareness project to spread awareness about clickbaits. Uses gemeni api to generate clickbait headlines and a website to monitor the data.',
    technologies: ['API', 'Web Development', 'UI/UX'],
    icon: <BadgeCheck size={24} className="text-neon-purple" />,
  },
  

];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-gradient">Certifications</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
            <GlassCard className="p-6 h-full transform transition-all duration-300 hover:translate-y-[-10px]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {cert.icon}
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>
                <span className="text-neon-cyan text-sm px-3 py-1 rounded-full border border-neon-cyan/50">
                  {cert.date}
                </span>
              </div>
              
              <p className="text-white/70 mb-4">{cert.description}</p>
              
              {cert.issuer && (
                <div className="flex items-center mt-auto">
                  <Award size={16} className="text-neon-purple mr-2" />
                  <span className="text-sm font-medium">Issued by {cert.issuer}</span>
                </div>
              )}
              
              {cert.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-glassBg px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;