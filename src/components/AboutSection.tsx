import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Target, Heart } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BE CSE at PSNA College of Engineering (2024-2028)',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'AI-ML Virtual Intern at AICTE & EduSkills',
  },
  {
    icon: Target,
    title: 'Focus Areas',
    description: 'Web Development, Cybersecurity, AI & ML',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Building solutions that make a difference',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Get to know me</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated professional focused on achieving results and driving growth. 
              With my diverse skill set and commitment to excellence, I thrive in fast-paced environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have a proven track record of accomplishing objectives through collaboration and 
              a strong work ethic. Passionate about continuous learning, I aim to leverage my 
              experience to contribute positively to my team's success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science and Engineering, I'm actively 
              building projects in web development while exploring the fascinating world of 
              cybersecurity and artificial intelligence.
            </p>

            <div className="pt-4">
              <h3 className="font-heading font-semibold text-lg mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Programming', 'Web Development', 'Cybersecurity', 'Ethical Hacking', 'AI & ML'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card card-shadow border border-border hover:card-shadow-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
