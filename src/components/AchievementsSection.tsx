import { Trophy, Medal, Star, Award } from 'lucide-react';

const achievements = [
  {
    title: 'First Prize – Coding & Debugging Test',
    organization: 'Apollo Computer Education',
    description: 'Awarded first prize in a competitive coding and debugging challenge.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Diploma in Computer Applications',
    organization: 'Certified Professional',
    description: 'Completed comprehensive DCA program with practical project experience.',
    icon: Medal,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development Experience',
    organization: 'Hands-on Projects',
    description: 'Built multiple web applications gaining valuable frontend experience.',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Achievements & Awards</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 card-glow animate-fade-in flex gap-6 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
