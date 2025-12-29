import { Code2, Database, Shield, Users, Lightbulb, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85 },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 75 },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 70 },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 70 },
    ],
  },
  {
    category: 'Web Development',
    icon: Database,
    items: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90 },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 85 },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 80 },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 75 },
    ],
  },
  {
    category: 'Cybersecurity & Tools',
    icon: Shield,
    items: [
      { name: 'Kali Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 70 },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 80 },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 90 },
    ],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Team Work', icon: Users },
  { name: 'Leadership', icon: Users },
  { name: 'Communication', icon: Users },
  { name: 'Project Coordination', icon: Wrench },
  { name: 'Debugging', icon: Code2 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card group animate-float-slow"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-10 h-10"
                        loading="lazy"
                      />
                    </div>
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                    <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <skill.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
