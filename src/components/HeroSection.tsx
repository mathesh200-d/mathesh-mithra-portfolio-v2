import { Mail, Phone, Linkedin, Github, MapPin, Download, FileText } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const HeroSection = () => {
  const socialLinks = [
    { icon: Phone, href: 'tel:+916374436010', label: 'Phone' },
    { icon: Mail, href: 'mailto:matheshmithra@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mathesh-mithra-m-4644a0300', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mathesh200-d', label: 'GitHub' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-pulse-glow">
              <img 
                src={profileImage} 
                alt="M Mathesh Mithra"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Verification badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-background">
              <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">M Mathesh Mithra</span>
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Web Developer | Cybersecurity Learner | AI Enthusiast
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Madurai, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">
            A dedicated professional focused on achieving results and driving growth. 
            With strong teamwork and communication skills, I thrive in fast-paced environments 
            and am motivated to apply my technical and problem-solving skills to real-world challenges.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-in flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.6s' }}>
          <a
            href="/resume/Mathesh_Mithra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-gradient"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
          <a
            href="/resume/Mathesh_Mithra_Resume.pdf"
            download="Mathesh_Mithra_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border font-semibold rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
