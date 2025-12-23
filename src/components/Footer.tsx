import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Phone, href: 'tel:+916374436010', label: 'Phone' },
  { icon: Mail, href: 'mailto:matheshmithra@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mathesh-mithra-m-4644a0300', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/mathesh200-d', label: 'GitHub' },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="font-heading font-bold text-2xl gradient-text">
              M Mathesh Mithra
            </a>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Results-driven professional passionate about Web Development, 
              Cybersecurity, and AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} M Mathesh Mithra. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
};
