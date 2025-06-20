import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import GlassCard from '../GlassCard';
import { Book, Gamepad2, Users } from 'lucide-react';

const Interests = () => {
  const books = [
    { title: 'Six of Crows', image: 'https://imgs.search.brave.com/DCfzNO9bG7gN3RFcqfmjtP2Qu0xiS1OYeXP5gAoW0_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xMC9TaXhfb2Zf/Q3Jvd3NfYnlfTGVp/Z2hfQmFyZHVnb19i/b29rX2NvdmVyLmpw/ZWcvNTEycHgtU2l4/X29mX0Nyb3dzX2J5/X0xlaWdoX0JhcmR1/Z29fYm9va19jb3Zl/ci5qcGVn' },
    { title: 'Crooked Kingdom', image: 'https://imgs.search.brave.com/4N8j2PdlGX4eZnM0P9Lgepv3dC9gJsBkXiy9EudaIGI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wYi9D/cm9va2VkX2tpbmdk/b21fY292ZXIuanBn' },
    { title: 'The Ballad of Never After', image: 'https://imgs.search.brave.com/l49Zc6szVLCLatEmqbblTW6KtnRBB8OD6Hr_HeVdz6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYxMTM0NS9maWxl/cy81OTczMTc5MS9m/bGF0aXJvbi1ib29r/cy10aGUtYmFsbGFk/LW9mLW5ldmVyLWFm/dGVyLmpwZw' },
    { title: 'Ignite Me', image: 'https://imgs.search.brave.com/y5vGrvSlqTFt2-sfiKKAkDcCbFZjS31CfaaqqFx3QN8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxUUlFeENXblRM/LmpwZw' },
    { title: 'Unbelievers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvFIbNmhjP5LQmUHV3GfBsCRs6gxnJt6bNaaoR2Bx1hQ08X7hxZWqtr3opg&s' },
    { title: 'A Good Girl\'s Guide to Murder', image: 'data:image/jpeg;base64,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' },
    { title: 'The Inheritance Games', image: 'https://www.hachettebookgroup.com/wp-content/uploads/2023/02/9781368052405-1.jpg?resize=396,600' },
    { title: 'The Song of Achilles', image: 'https://imgs.search.brave.com/kYtgtvdYMoc6shdv_sJjn1Bfc1V0ZHsU0mZ0o3M6SX8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xZS9UaGVTb25n/b2ZBY2hpbGxlcy5w/bmcvNTEycHgtVGhl/U29uZ29mQWNoaWxs/ZXMucG5n' }
  ];

  return (
    <section id="interests" className="py-20">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-gradient">Interests & Passions</h2>
      </ScrollReveal>

      {/* Books I Love */}
      <ScrollReveal className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <Book size={24} className="text-neon-blue" />
          <h3 className="text-2xl font-semibold">Books I Love</h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 py-4 overflow-x-auto scrollbar-hide">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-48 h-64"
              >
                <GlassCard className="w-full h-full p-4 flex flex-col justify-end items-center">
                  <img src={book.image} alt={book.title} className="max-h-32 object-contain mb-2" />
                  <p className="font-medium text-center">{book.title}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mb-20" direction="right">
  <div className="flex items-center gap-3 mb-6">
    <Gamepad2 size={24} className="text-neon-purple" />
    <h3 className="text-2xl font-semibold">Esports Fanatic</h3>
  </div>

  <div className="relative h-64 md:h-96 overflow-hidden glass-card">
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
    <img
      src="https://www.google.com/url ?sa=i&url=https%3A%2F%2Fthebridge.in%2Fesports%2Fesports-national-sports-day-india-technology-24744&psig=AOvVaw3B5qYHGhCQ933rFcdRShpe&ust=1748413004262000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCqoJaAw40DFQAAAAAdAAAAABAE"
      alt="Esports Arena"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
      <h4 className="text-3xl font-bold mb-4 text-white">Tactics & Reflexes</h4>
      <p className="text-white/90 max-w-lg">
        I'm deeply immersed in the world of esports — where lightning-fast reflexes, strategic depth,
        and teamwork converge. From competitive shooters to MOBAs, I admire how data, precision,
        and mental agility shape each match, influencing how I build, think, and collaborate.
      </p>
    </div>
  </div>
</ScrollReveal>


<ScrollReveal>
  <div className="flex items-center gap-3 mb-6">
    <Users size={24} className="text-neon-blue" />
    <h3 className="text-2xl font-semibold">QwikLab Developers</h3>
  </div>

  <GlassCard className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2">
        <h4 className="text-xl font-medium mb-4">Cloud-First, Code-Forward</h4>
        <p className="text-white/80 mb-4">
          At QwikLab Developers, I engage with cloud-based labs that simulate real-world development
          environments. My focus is on hands-on training with Google Cloud and AWS, sharpening skills
          in containerization, APIs, and scalable infrastructure.
        </p>
        <p className="text-white/70">
          Working in this team-oriented, challenge-driven setting has enhanced my ability to solve
          complex problems under pressure while also preparing me for future DevOps and cloud engineering roles.
        </p>
      </div>
      <div className="glass-card overflow-hidden h-48 md:h-auto">
        <img
          src="https://tudip.com/wp-content/uploads/2018/12/blog-images-Qwiklabs.jpg"
          alt="QwikLabs"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </GlassCard>
</ScrollReveal>
<ScrollReveal>
  <div className="flex items-center gap-3 mb-6">
    <Users size={24} className="text-neon-blue" />
    <h3 className="text-2xl font-semibold">Google Developer Group</h3>
  </div>

  <GlassCard className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2">
        <h4 className="text-xl font-medium mb-4">Connect. Learn. Grow.</h4>
        <p className="text-white/80 mb-4">
          As an active member of the Google Developer Group, I engage with a vibrant community of
          developers and tech enthusiasts. We organize meetups, tech talks, and hands-on workshops
          focused on Google technologies such as Android, Firebase, Flutter, and more.
        </p>
        <p className="text-white/70">
          Being part of GDG has empowered me to learn from industry experts, contribute to
          open-source, and collaborate on impactful community projects that inspire innovation and
          continuous growth.
        </p>
      </div>
      <div className="glass-card overflow-hidden h-48 md:h-auto">
        <img
          src="data:image/png;base64,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"
          alt="Google Developer Group"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </GlassCard>
</ScrollReveal>


<ScrollReveal>
  <div className="flex items-center gap-3 mb-6">
    <Users size={24} className="text-neon-blue" />
    <h3 className="text-2xl font-semibold">IEEE GRSSS</h3>
  </div>

  <GlassCard className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2">
        <h4 className="text-xl font-medium mb-4">IoT, AI/ML & Real-World Impact</h4>
        <p className="text-white/80 mb-4">
          As an active member of IEEE GRSSS, I work on interdisciplinary projects combining IoT systems
          and AI/ML models to solve real-world problems. We prototype solutions ranging from smart
          environmental monitors to intelligent automation systems.
        </p>
        <p className="text-white/70">
          My involvement has deepened my understanding of embedded systems, cloud integration, and
          model deployment. The hands-on, team-driven nature of the club has also strengthened my ability
          to collaborate, research, and innovate at scale.
        </p>
      </div>
      <div className="glass-card overflow-hidden h-48 md:h-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCIBoxSSbJhX-mGlgnmGJKTGv8kTIOw70Tw&s"
          alt="IEEE GRSSS"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </GlassCard>
</ScrollReveal>


<ScrollReveal>
  <div className="flex items-center gap-3 mb-6">
    <Users size={24} className="text-neon-blue" />
    <h3 className="text-2xl font-semibold">NextTech Labs</h3>
  </div>

  <GlassCard className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2">
        <h4 className="text-xl font-medium mb-4">Innovate. Prototype. Disrupt.</h4>
        <p className="text-white/80 mb-4">
          At NextTech Labs, I collaborate on cutting-edge research in AI, blockchain, and
          human-computer interaction. We brainstorm, prototype, and build tech-driven solutions that
          challenge conventional thinking.
        </p>
        <p className="text-white/70">
          This experience fuels my creativity and has taught me to lead with experimentation,
          embrace failure, and contribute to projects that blend imagination with emerging tech.
        </p>
      </div>
      <div className="glass-card overflow-hidden flex items-center justify-center rounded-lg max-h-60">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxVHMDWDXxwzQh7DSC274ZD64VRPpUPuGGA&s"
          alt="NextTech Labs"
          className="w-full h-full"
        />
      </div>
    </div>
  </GlassCard>
</ScrollReveal>

    </section>
  );
};

export default Interests;