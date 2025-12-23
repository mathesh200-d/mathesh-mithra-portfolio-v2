import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Code } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'First Prize - Coding & Debugging Test',
    description: 'Awarded First Prize in a coding and debugging test covering C, C++, Python, and Java, conducted by Apollo Computer Education.',
    highlight: 'Winner',
  },
  {
    icon: Award,
    title: 'Diploma in Computer Applications',
    description: 'Completed DCA with A+ grade covering C, C++, Python, and Java, developing multiple programs and projects with practical experience.',
    highlight: 'A+ Grade',
  },
  {
    icon: Code,
    title: 'Web Development Experience',
    description: 'Built multiple web applications, gaining hands-on experience in frontend development and modern web technologies.',
    highlight: 'Technical',
  },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Recognition</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="relative group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Highlight badge */}
              <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {achievement.highlight}
              </span>

              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <achievement.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-3 pr-16">
                {achievement.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
