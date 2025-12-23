import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Star, Shield } from 'lucide-react';

const leadershipItems = [
  {
    icon: Users,
    title: 'Team Lead - Smart India Hackathon',
    description: 'Led team during SIH inter-college round, coordinated activities, delegated tasks, and guided the project to successful completion.',
    category: 'Leadership',
  },
  {
    icon: Star,
    title: 'Event Coordinator - Tech Sphaera Club',
    description: 'Organized and managed college-level technical events, coordinating with team members and participants effectively.',
    category: 'Management',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Learning Journey',
    description: 'Actively learning Kali Linux fundamentals, network scanning, vulnerability assessment, and ethical hacking basics.',
    category: 'Learning',
  },
];

export const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Experience</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Leadership & Extracurricular</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="relative group p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Category badge */}
              <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                {item.category}
              </span>

              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-3 pr-16">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
