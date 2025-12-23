import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Shield, Globe, Terminal, Users, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'Frontend Development', level: 85 },
      { name: 'Responsive Design', level: 80 },
      { name: 'Web Applications', level: 75 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Kali Linux', level: 70 },
      { name: 'Network Security', level: 65 },
      { name: 'Vulnerability Assessment', level: 60 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Terminal,
    skills: [
      { name: 'MS Office', level: 90 },
      { name: 'Linux', level: 75 },
      { name: 'Git & GitHub', level: 70 },
    ],
  },
];

const softSkills = [
  { name: 'Leadership', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Team Work', icon: Users },
  { name: 'Communication', icon: Users },
  { name: 'Project Coordination', icon: Users },
  { name: 'Event Management', icon: Users },
];

const programmingLanguages = ['Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'JavaScript'];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Skills & Languages</h2>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="font-heading font-semibold text-xl mb-6 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-xl bg-card card-shadow border border-border font-medium hover:border-primary/50 transition-all cursor-default"
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card card-shadow border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.6 + skillIndex * 0.1 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-heading font-semibold text-xl mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
