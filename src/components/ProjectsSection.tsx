import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Device for Mute Communication',
    description: 'A hardware and software project enabling non-verbal communication using electronic signals. Designed the system, implemented the software interface, and integrated hardware components to create a functional prototype.',
    tech: ['Hardware', 'Software', 'Electronics', 'Python'],
    date: 'May 2025 - Jul 2025',
    location: 'Madurai',
    featured: true,
  },
  {
    title: 'Smart India Hackathon - Waste Management',
    description: 'Developed a web application as part of the Smart India Hackathon (SIH) project, designing the front-end, implementing core functionality, and collaborating with team members to complete the project successfully.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    date: 'Sep 2025 - Oct 2025',
    location: 'Dindigul',
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">My Work</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 lg:p-8">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium gradient-bg text-primary-foreground rounded-full mb-4">
                    Featured
                  </span>
                )}
                
                <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
