import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { GraduationCap, Link } from 'lucide-react';

const educationItems = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech in Computer Science and Engineering - 1st Year',
    period: '2024 - 2025',
    details: 'Completed 1st year with excellent academic performance. CGPA: 9.88',
    icon: <GraduationCap size={24} className="text-cyan-600" />,
  },
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2024 - 2028',
    details: 'Currently pursuing my bachelor\'s degree with a focus on cross platform full stack application development.',
    icon: <GraduationCap size={24} className="text-cyan-600" />,
  },
  {
    institution: 'Delhi Public School, Korba',
    degree: 'KG-12 Education',
    period: 'Graduated',
    details: 'Received comprehensive education with excellent academic performance and participation in extracurricular activities.',
    icon: <GraduationCap size={24} className="text-blue-600" />,
    linkedInBadge: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-spacing bg-cream-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Education</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            My academic journey and educational achievements that have shaped my technical foundation.
          </p>
        </ScrollReveal>

        <div className="relative pl-8 ml-4 space-y-12">
          <div className="timeline-line"></div>
          
          {educationItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="relative">
                <div className="timeline-dot" style={{ top: '24px' }}></div>
                <div className="professional-card p-6 ml-8 shadow-professional">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <h3 className="text-xl font-semibold text-gray-900">{item.institution}</h3>
                    </div>
                    <span className="text-cyan-600 text-sm px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium mb-2 text-gray-900">{item.degree}</p>
                  <p className="text-gray-600 mb-4">{item.details}</p>
                  
                  {item.linkedInBadge && (
                    <div className="flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                      <Link size={16} className="mr-2" />
                      <span className="text-sm">LinkedIn Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;