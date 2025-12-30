import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 card-glow">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a dedicated and results-driven professional with a strong focus on growth and continuous learning. 
              Currently pursuing my Bachelor of Engineering in Computer Science at PSNA College of Engineering and Technology, 
              I have developed a solid foundation in programming, web development, and cybersecurity fundamentals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              My experience includes working as an AI-ML Virtual Intern with AICTE & EduSkills, where I gained hands-on 
              experience with artificial intelligence and machine learning concepts. I thrive in collaborative environments 
              and am passionate about leveraging technology to solve real-world problems.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                    <p className="text-sm text-muted-foreground">B.E. Computer Science</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  PSNA College of Engineering and Technology
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2024 – 2028</span>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Experience</h3>
                    <p className="text-sm text-muted-foreground">AI-ML Virtual Intern</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  AICTE & EduSkills
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Jul 2024 – Sep 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
