import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Mail',
      url: 'mailto:codewithvxrd@gmail.com',
      icon: <Mail size={28} />,
      color: 'hover:text-gray-900',
      bg: 'hover:bg-gray-100',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/varad-singhal-ba1361326/',
      icon: <Linkedin size={28} />,
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-100',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/varad_singhal/',
      icon: <Instagram size={28} />,
      color: 'hover:text-pink-600',
      bg: 'hover:bg-pink-100',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/VaradSinghal',
      icon: <Github size={28} />,
      color: 'hover:text-gray-900',
      bg: 'hover:bg-gray-100',
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-cream-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="professional-card shadow-professional h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-gray-900 font-medium">codewithvxrd@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Phone className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="text-gray-900 font-medium">+91-7805841826</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <MapPin className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="text-gray-900 font-medium">Kattankulathur, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg transition-all duration-300 text-gray-600 ${link.color} ${link.bg}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="professional-card shadow-professional h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Message</h3>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Feel free to reach out if you'd like to discuss a project, collaboration, or just want to say hello. 
                    I'm always interested in hearing about new opportunities and innovative ideas.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-cream-100 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">What I'm looking for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Internship opportunities</li>
                        <li>• Collaborative projects</li>
                        <li>• Open source contributions</li>
                        <li>• Tech discussions</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Response time:</h4>
                      <p className="text-sm text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                  
                  <a 
                    href="mailto:codewithvxrd@gmail.com"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;