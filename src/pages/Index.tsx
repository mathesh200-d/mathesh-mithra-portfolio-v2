import { Helmet } from 'react-helmet-async';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AchievementsSection from '@/components/AchievementsSection';
import LeadershipSection from '@/components/LeadershipSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>M Mathesh Mithra | Web Developer & Cybersecurity Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of M Mathesh Mithra - A results-driven professional focused on Web Development, Cybersecurity, and AI. Based in Madurai, Tamil Nadu, India."
        />
        <meta
          name="keywords"
          content="Mathesh Mithra, Web Developer, Cybersecurity, AI Enthusiast, Portfolio, React Developer, Python Developer"
        />
        <meta name="author" content="M Mathesh Mithra" />
        <meta property="og:title" content="M Mathesh Mithra | Web Developer & Cybersecurity Enthusiast" />
        <meta
          property="og:description"
          content="Portfolio of M Mathesh Mithra - A results-driven professional focused on Web Development, Cybersecurity, and AI."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://matheshmithra.com" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
        <StarBackground />
        <Navbar />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <AchievementsSection />
          <LeadershipSection />
          <LanguagesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
