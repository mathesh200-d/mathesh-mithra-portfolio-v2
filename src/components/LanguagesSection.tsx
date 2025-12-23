import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'Tamil', level: 'Native', proficiency: 100 },
  { name: 'Telugu', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Proficient', proficiency: 85 },
  { name: 'Hindi', level: 'Advanced', proficiency: 75 },
  { name: 'French', level: 'Intermediate', proficiency: 50 },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Native':
      return 'bg-green-500';
    case 'Proficient':
      return 'bg-blue-500';
    case 'Advanced':
      return 'bg-purple-500';
    case 'Intermediate':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
};

export const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Communication</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Speaking Languages</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-card border border-border card-shadow"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">Multilingual</h3>
              <p className="text-sm text-muted-foreground">Fluent in 5 languages</p>
            </div>
          </div>

          <div className="space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full text-primary-foreground ${getLevelColor(lang.level)}`}>
                    {lang.level}
                  </span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className={`h-full rounded-full ${getLevelColor(lang.level)}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
