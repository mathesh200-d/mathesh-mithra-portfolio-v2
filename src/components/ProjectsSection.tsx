import { Github, ExternalLink, Cpu, Globe, User } from 'lucide-react';

const projects = [
  {
    title: 'Device for Mute Communication',
    description: 'Developed a hardware and software project enabling non-verbal communication using electronic signals. Designed the system, implemented software interface, and integrated hardware components to create a functional working prototype.',
    tags: ['Hardware', 'Software', 'Electronics', 'Python'],
    github: 'https://github.com/mathesh200-d/brain-to-speech-bci',
    icon: Cpu,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart India Hackathon – Waste Management',
    description: 'Developed a web application as part of the Smart India Hackathon (SIH). Designed the frontend and implemented core functionality for a public waste management reporting system.',
    tags: ['Web', 'Government', 'Reporting System'],
    github: 'https://github.com/mathesh200-d/Smart-Public-Issue-Reporting-System',
    icon: Globe,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark/light mode, and deployed on Cloudflare Pages.',
    tags: ['React', 'Vite', 'Cloudflare Pages'],
    github: 'https://github.com/mathesh200-d/mathesh-mithra-portfolio-v2',
    icon: User,
    gradient: 'from-purple-500 to-pink-500',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-10">
                  <project.icon className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
