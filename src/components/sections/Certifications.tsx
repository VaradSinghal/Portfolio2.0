import ScrollReveal from '../ScrollReveal';
import { Code, BadgeCheck, AppWindow } from 'lucide-react';

const certifications = [
  {
    title: 'Fundamentals of Object-Oriented Programming',
    issuer: 'IIT Roorkee',
    date: '2025',
    description: 'Completed a course on the fundamentals of object-oriented programming, focusing on concepts like classes, objects, inheritance, and polymorphism.',
    icon: <Code size={24} className="text-blue-600" />,
  },
  {
    title: 'IBM iOS and Android Mobile App Developer',
    issuer: 'IBM',
    date: '2025',
    description: 'Completed a course on mobile app development for iOS and Android platforms, focusing on cross-platform frameworks and best practices.',
    icon: <AppWindow size={24} className="text-blue-600" />,
  },
  {
    title: 'Certification of Merit(3rd Place) for the MineVerse Hackathon',
    issuer: 'SQAC SRMIST',
    date: '2025',
    description: 'A problem solving hackathon focused on testing DSA skills and Mental Aptitude',
    technologies: ['DSA', 'Mental Aptitude'],
    icon: <BadgeCheck size={24} className="text-purple-600" />,
  },
  { 
    title: 'Python',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Completed the comprehensive Python programming course focusing on scientific computing applications and data analysis.',
    icon: <Code size={24} className="text-blue-600" />,
  },
  {
    title: 'Java',
    issuer: 'HackerRank',
    date: '2025',
    description: 'Completed a comprehensive Java programming course with emphasis on object-oriented design, data structures, and backend development.',
    icon: <Code size={24} className="text-blue-600" />,
  },
  {
    title: 'Certification of appreciation for the InnovateX Hackathon',
    issuer: 'CTech SRMIST',
    date: '2025',
    description: 'An awareness project to spread awareness about clickbaits. Uses gemeni api to generate clickbait headlines and a website to monitor the data.',
    technologies: ['API', 'Web Development', 'UI/UX'],
    icon: <BadgeCheck size={24} className="text-purple-600" />,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-spacing bg-cream-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Certifications & Awards</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            Professional certifications and recognition that validate my technical expertise and commitment to continuous learning.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="professional-card h-full shadow-professional hover:shadow-professional-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  {cert.icon}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    <p className="text-blue-600 text-sm font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                    {cert.technologies && (
                      <div className="flex flex-wrap gap-1">
                        {cert.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;