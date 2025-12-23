import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  { 
    icon: Phone, 
    href: 'tel:+916374436010', 
    label: 'Phone',
    color: 'hover:text-green-500'
  },
  { 
    icon: Mail, 
    href: 'mailto:matheshmithra@gmail.com', 
    label: 'Email',
    color: 'hover:text-red-400'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/mathesh-mithra-m-4644a0300', 
    label: 'LinkedIn',
    color: 'hover:text-blue-500'
  },
  { 
    icon: Github, 
    href: 'https://github.com/mathesh200-d', 
    label: 'GitHub',
    color: 'hover:text-foreground'
  },
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 gradient-bg">
              <img
                src={profileImage}
                alt="M Mathesh Mithra"
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-primary-foreground text-sm">✓</span>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            M Mathesh Mithra
          </motion.h1>

          {/* Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {['Web Development', 'Cybersecurity', 'AI & ML Enthusiast'].map((role, index) => (
              <span
                key={role}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                  index === 0 
                    ? 'gradient-bg text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-muted-foreground mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span>Madurai, Tamil Nadu, India</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Results-driven professional focused on achieving excellence and driving growth. 
            Passionate about continuous learning with strong teamwork, communication, and 
            leadership skills. Ready to apply technical and problem-solving abilities to real-world challenges.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-card card-shadow border border-border transition-all duration-300 ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="gradient-bg border-0 shadow-lg hover:shadow-xl transition-all">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-muted">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
