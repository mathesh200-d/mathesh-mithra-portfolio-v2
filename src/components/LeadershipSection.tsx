import { Users, Calendar, Shield, Target } from 'lucide-react';

const experiences = [
  {
    title: 'Team Lead – Smart India Hackathon',
    period: 'Sep 2025 – Oct 2025',
    location: 'Dindigul',
    description: 'Led a team of developers in the Smart India Hackathon (SIH). Coordinated team activities, delegated tasks, and guided the project to successful completion. Developed strategic planning and project management skills.',
    icon: Target,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Event Coordinator – Tech Sphaera Club',
    period: 'College Club',
    location: 'PSNA CET',
    description: 'Organized and managed college-level technical events. Developed event planning, logistics coordination, and team management skills while fostering technical community engagement.',
    icon: Calendar,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'Cybersecurity Learning Journey',
    period: 'Ongoing',
    location: 'Self-Learning',
    description: 'Actively learning Kali Linux fundamentals, network scanning, vulnerability assessment, and ethical hacking basics. Committed to understanding security principles and best practices.',
    icon: Shield,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Leadership & Extracurricular</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative md:pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full ${exp.bgColor} border-4 border-background hidden md:flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${exp.color.replace('text-', 'bg-')}`} />
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-glow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      <div className={`w-14 h-14 rounded-2xl ${exp.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className={`w-7 h-7 ${exp.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-primary font-medium mb-3">
                          {exp.location}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
