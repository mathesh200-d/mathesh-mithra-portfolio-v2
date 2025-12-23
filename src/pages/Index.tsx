import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <AchievementsSection />
      <LeadershipSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
