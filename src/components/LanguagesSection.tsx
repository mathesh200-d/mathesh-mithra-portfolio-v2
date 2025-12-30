import { Globe } from 'lucide-react';

const languages = [
  { name: 'Tamil', level: 'Native', percentage: 100 },
  { name: 'Telugu', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Proficient', percentage: 90 },
  { name: 'Hindi', level: 'Advanced', percentage: 80 },
  { name: 'French', level: 'Intermediate', percentage: 50 },
];

const LanguagesSection = () => {
  return (
    <section className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Speaking Languages</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 card-glow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Multilingual</h3>
                <p className="text-sm text-muted-foreground">5 Languages</p>
              </div>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    />
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

export default LanguagesSection;
