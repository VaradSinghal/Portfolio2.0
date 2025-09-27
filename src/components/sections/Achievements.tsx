import React from 'react';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { Trophy, Award, Target, Star, Medal, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'Academic Excellence',
    description: 'Recieved Top Acheiver Award in 1st year of B.Tech CSE',
    icon: <Trophy size={24} className="text-yellow-600" />,
    category: 'Academic',
    year: '2024-2025',
    highlight: true,
  },
  {
    title: 'Hackathon Winner',
    description: '3rd place in MineVerse 2025',
    icon: <Award size={24} className="text-blue-600" />,
    category: 'Competition',
    year: '2025',
    highlight: true,
  },

  {
    title: 'SIH 2025 Nationlist',
    description: 'Nationalist at SIH 2025, TOP 50 among SRMIST',
    icon: <Target size={24} className="text-purple-600" />,
    category: 'Community',
    year: '2025',
    highlight: false,
  },
];
const stats = [
  { label: 'Projects Completed', value: '25+' },
  { label: 'Lines of Code', value: '50K+' },
  { label: 'Technologies Mastered', value: '15+' },
  { label: 'Certifications', value: '8+' },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-spacing bg-cream-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Achievements & Recognition</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            A showcase of my academic excellence, technical achievements, and contributions to the developer community.
          </p>
        </ScrollReveal>

        {/* Key Achievements */}
        <ScrollReveal className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`professional-card h-full shadow-professional hover:shadow-professional-lg transition-all duration-300 ${
                  achievement.highlight ? 'ring-2 ring-blue-200' : ''
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    {achievement.icon}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                        <span className="text-sm text-gray-500">{achievement.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Statistics */}
        <ScrollReveal className="mb-16">
          <div className="professional-card shadow-professional">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Impact Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Achievements;