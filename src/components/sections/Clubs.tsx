import ScrollReveal from '../ScrollReveal';
import { Users, Calendar, Award } from 'lucide-react';

const currentClubs = [
  {
    name: 'QwikLabs Developer Club',
    position: 'Technical Associate Lead',
    period: 'February 2025 - Present',
    description: 'At QwikLab Developers, I engage with cloud-based labs that simulate real-world development environments. My focus is on hands-on training with Google Cloud and AWS, sharpening skills in containerization, APIs, and scalable infrastructure.',
    details: 'Working in this team-oriented, challenge-driven setting has enhanced my ability to solve complex problems under pressure while also preparing me for future DevOps and cloud engineering roles.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQGAAZLezumzNQ/feedshare-shrink_800/feedshare-shrink_800/0/1683917250236?e=2147483647&v=beta&t=8j0nd_8OvlIqjgKeErWDXMoyH6xqLwu9dKNdPzNTRew',
    icon: <Users size={24} className="text-cyan-600" />,
  },
  {
    name: 'Google Developer Group',
    position: 'App Developer',
    period: 'April 2025 - Present',
    description: 'As an active member of the Google Developer Group, I engage with a vibrant community of developers and tech enthusiasts. We organize meetups, tech talks, and hands-on workshops focused on Google technologies such as Android, Firebase, Flutter, and more.',
    details: 'Being part of GDG has empowered me to learn from industry experts, contribute to open-source, and collaborate on impactful community projects that inspire innovation and continuous growth.',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/gdsc-social-share.png',
    icon: <Users size={24} className="text-blue-600" />,
  },
  {
    name: 'IEEE GRSSS',
    position: 'Technical Member',
    period: 'February 2025 - Present',
    description: 'As an active member of IEEE GRSSS, I work on interdisciplinary projects combining IoT systems and AI/ML models to solve real-world problems. We prototype solutions ranging from smart environmental monitors to intelligent automation systems.',
    details: 'My involvement has deepened my understanding of embedded systems, cloud integration, and model deployment. The hands-on, team-driven nature of the club has also strengthened my ability to collaborate, research, and innovate at scale.',
    image: 'https://www.grss-ieee.org/wp-content/uploads/2020/12/grss.png',
    icon: <Users size={24} className="text-purple-600" />,
  },
  {
    name: 'GeeksforGeeks',
    position: 'Technical Member',
    period: 'September 2025 - Present',
    description: 'Contributing as a Technical Member at GeeksforGeeks, where I actively engage in solving complex technical challenges and developing innovative solutions across multiple domains.',
    details: 'My role involves working on projects that integrate problem-solving, software development, and applied research. Through this, I have enhanced my skills in algorithms, data structures, system design, and real-world application building, while collaborating with like-minded peers in a team-driven environment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png',
    icon: <Users size={24} className="text-green-600" />,
  }
  
];

const pastClubs = [
  {
    name: 'NextTech Labs',
    position: 'Tesla Lab Associate',
    period: 'March 2025 - July 2025',
    description: 'At NextTech Labs, I collaborate on cutting-edge research in AI, blockchain, and human-computer interaction. We brainstorm, prototype, and build tech-driven solutions that challenge conventional thinking.',
    details: 'This experience fuels my creativity and has taught me to lead with experimentation, embrace failure, and contribute to projects that blend imagination with emerging tech.',
    image: 'https://media.licdn.com/dms/image/v2/C510BAQGikFtlBr3v3A/company-logo_200_200/company-logo_200_200/0/1631390746545?e=2147483647&v=beta&t=ztcbxIymeoiGRp5DC8cJqhHkwSV-9JDM6ecIJlutddM',
    icon: <Users size={24} className="text-green-600" />,
  },
  {
    name: 'Team Robocon SRM',
    position: 'SPACED Member',
    period: 'August 2024 - December 2024',
    description: 'As a SPACED member with Team Robocon SRM, I contributed to the design, development, and testing of innovative robotic systems for the ABU Robocon competition.',
    details: 'My role involved working on embedded systems, control algorithms, and mechanical integration, while collaborating with a multidisciplinary team of engineers. This experience sharpened my technical expertise, teamwork, and problem-solving abilities in building competition-ready robots under strict timelines.',
    image: 'https://media.licdn.com/dms/image/v2/D560BAQHA1dfDb4UbHg/company-logo_200_200/company-logo_200_200/0/1667468626808/srmteamrobocon_logo?e=2147483647&v=beta&t=CE8vik8yPvLqHjSvinf_9iQDYpvyffSacgXFF72_eO8',
    icon: <Users size={24} className="text-red-600" />,
  }
];

const Clubs = () => {
  return (
    <section id="clubs" className="section-spacing bg-cream-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Clubs & Organizations</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
            My active involvement in technical clubs and organizations that have shaped my professional development.
          </p>
        </ScrollReveal>

        {/* Current Clubs */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={24} className="text-cyan-600" />
            <h3 className="text-2xl font-semibold text-gray-900">Current Memberships</h3>
          </div>

          <div className="space-y-8">
            {currentClubs.map((club, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="professional-card shadow-professional hover:shadow-professional-lg transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        {club.icon}
                        <h4 className="text-xl font-semibold text-gray-900">{club.name}</h4>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                        <span className="text-cyan-600 text-sm px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50">
                          {club.position}
                        </span>
                        <span className="text-gray-500 text-sm">{club.period}</span>
                      </div>

                      <p className="text-gray-600 mb-4">{club.description}</p>
                      <p className="text-gray-500">{club.details}</p>
                    </div>

                    <div className="professional-card overflow-hidden h-48 md:h-auto">
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Past Clubs */}
        {pastClubs.length > 0 && (
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Award size={24} className="text-purple-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Past Memberships</h3>
            </div>

            <div className="space-y-8">
              {pastClubs.map((club, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <div className="professional-card shadow-professional hover:shadow-professional-lg transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          {club.icon}
                          <h4 className="text-xl font-semibold text-gray-900">{club.name}</h4>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                          <span className="text-green-600 text-sm px-3 py-1 rounded-full border border-green-200 bg-green-50">
                            {club.position}
                          </span>
                          <span className="text-gray-500 text-sm">{club.period}</span>
                        </div>

                        <p className="text-gray-600 mb-4">{club.description}</p>
                        <p className="text-gray-500">{club.details}</p>
                      </div>

                      <div className="professional-card overflow-hidden h-48 md:h-auto">
                        <img
                          src={club.image}
                          alt={club.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Clubs;