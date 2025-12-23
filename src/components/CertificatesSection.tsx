import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import certificate images
import dcaPerformance from '@/assets/certificates/dca-performance.jpg';
import dcaTraining from '@/assets/certificates/dca-training.jpg';
import linkedinLearning from '@/assets/certificates/linkedin-learning.jpg';
import ibmCertificate from '@/assets/certificates/ibm-certificate.jpg';
import awsCertificate from '@/assets/certificates/aws-certificate.jpg';
import microsoftCertificate from '@/assets/certificates/microsoft-certificate.jpg';
import cybraryCertificate from '@/assets/certificates/cybrary-certificate.jpg';
import tataCertificate from '@/assets/certificates/tata-certificate.jpg';

const certificates = [
  {
    name: 'Diploma in Computer Application (DCA)',
    platform: 'Apollo Computer Education',
    date: 'September 2024',
    status: 'Completed',
    image: dcaTraining,
    description: 'Training in MS Office, C, C++, Core Java, Core Python',
  },
  {
    name: 'DCA Performance Evaluation - A+ Grade',
    platform: 'Apollo Computer Education',
    date: '2024',
    status: 'Awarded',
    image: dcaPerformance,
    description: 'First Prize in coding and debugging test',
  },
  {
    name: 'Prompt Engineering with ChatGPT',
    platform: 'LinkedIn Learning',
    date: 'April 2025',
    status: 'Completed',
    image: linkedinLearning,
    description: 'ChatGPT & Prompt Engineering skills',
  },
  {
    name: 'Open Source Origin Stories: Hybrid Cloud & AI Ethics',
    platform: 'IBM SkillsBuild',
    date: 'July 2025',
    status: 'Completed',
    image: ibmCertificate,
    description: 'Adventures in Hybrid Cloud, AI Ethics, and Open Source',
  },
  {
    name: 'Introduction to Generative AI',
    platform: 'AWS Training & Certification',
    date: 'November 2025',
    status: 'Completed',
    image: awsCertificate,
    description: 'Art of the Possible with Generative AI',
  },
  {
    name: 'Cybersecurity Fundamentals',
    platform: 'Microsoft',
    date: 'October 2025',
    status: 'Completed',
    image: microsoftCertificate,
    description: 'Device-based threats and security controls',
  },
  {
    name: 'Careers in Cybersecurity',
    platform: 'Cybrary',
    date: 'December 2025',
    status: 'Completed',
    image: cybraryCertificate,
    description: 'Cybersecurity career path and fundamentals',
  },
  {
    name: 'Cybersecurity Analyst Job Simulation',
    platform: 'Tata & Forage',
    date: 'December 2025',
    status: 'Completed',
    image: tataCertificate,
    description: 'IAM strategy, custom solutions, and platform integration',
  },
];

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Credentials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-2">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Certificate Image */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-primary-foreground text-sm font-medium flex items-center gap-1">
                    <Maximize2 className="w-4 h-4" />
                    View Full
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading font-semibold text-sm leading-tight line-clamp-2">
                    {cert.name}
                  </h3>
                  <Award className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-2">{cert.platform}</p>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    {cert.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={closeModal}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-card/90 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-card/90 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-card/90 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-card/90 backdrop-blur-sm ml-2"
                onClick={closeModal}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Image Container with scroll */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center overflow-auto p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Certificate"
                className="max-w-none rounded-lg shadow-2xl cursor-move"
                style={{
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.2s ease-out',
                  maxHeight: zoom === 1 ? '90vh' : 'none',
                  maxWidth: zoom === 1 ? '90vw' : 'none',
                }}
                draggable={false}
              />
            </motion.div>

            {/* Zoom indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium">
              {Math.round(zoom * 100)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
