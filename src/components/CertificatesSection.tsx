import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

// Import certificate images
import apolloDCA from '@/assets/certificates/apollo-dca.jpg';
import apolloPerformance from '@/assets/certificates/apollo-performance.jpg';
import ciscoCybersecurity from '@/assets/certificates/cisco-cybersecurity.jpg';
import ibmHybridCloud from '@/assets/certificates/ibm-hybrid-cloud.jpg';
import awsGenerativeAI from '@/assets/certificates/aws-generative-ai.jpg';
import microsoftSecurity from '@/assets/certificates/microsoft-security.jpg';
import tataCybersecurity from '@/assets/certificates/tata-cybersecurity.jpg';
import cybraryOrientation from '@/assets/certificates/cybrary-orientation.jpg';
import cybraryCareers from '@/assets/certificates/cybrary-careers.jpg';

const certificates = [
  {
    name: 'Diploma in Computer Applications (DCA)',
    platform: 'Apollo Computer Education',
    status: 'Grade: A+',
    description: 'Comprehensive course covering MS Office, C, C++, Core Java, Core Python.',
    image: apolloDCA,
  },
  {
    name: 'Performance Evaluation Exam',
    platform: 'Apollo Computer Education',
    status: 'Grade: A+',
    description: 'Performance evaluation exam certification from Apollo Computer Education.',
    image: apolloPerformance,
  },
  {
    name: 'Introduction to Cybersecurity',
    platform: 'Cisco Networking Academy',
    status: 'Completed',
    description: 'Student level credential for completing the Introduction to Cybersecurity course.',
    image: ciscoCybersecurity,
  },
  {
    name: 'Open Source Origin Stories: Hybrid Cloud & AI Ethics',
    platform: 'IBM SkillsBuild',
    status: 'Completed',
    description: 'Adventures in Hybrid Cloud, AI Ethics, and Open Source Technologies.',
    image: ibmHybridCloud,
  },
  {
    name: 'Introduction to Generative AI',
    platform: 'AWS Training & Certification',
    status: 'Completed',
    description: 'Art of the Possible - Introduction to Generative AI concepts.',
    image: awsGenerativeAI,
  },
  {
    name: 'Device-based Threats & Security Controls',
    platform: 'Microsoft',
    status: 'Completed',
    description: 'Comprehensive cybersecurity training on threats and mitigations.',
    image: microsoftSecurity,
  },
  {
    name: 'Cybersecurity Analyst Job Simulation',
    platform: 'TATA via Forage',
    status: 'Completed',
    description: 'Practical tasks in IAM fundamentals, strategy assessment, and platform integration.',
    image: tataCybersecurity,
  },
  {
    name: 'Cybrary Orientation',
    platform: 'Cybrary',
    status: 'Completed',
    description: 'Cybersecurity training orientation and platform introduction.',
    image: cybraryOrientation,
  },
  {
    name: 'Careers in Cybersecurity',
    platform: 'Cybrary',
    status: '2 Hours',
    description: 'Comprehensive guide to career paths in cybersecurity.',
    image: cybraryCareers,
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setZoom(1);
    }
  };

  const closeModal = useCallback(() => {
    setSelectedCert(null);
    setZoom(1);
    setIsFullscreen(false);
    document.body.style.overflow = '';
  }, []);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [selectedCert, closeModal]);

  return (
    <section id="certificates" className="relative">
      <div className="section-container">
        <h2 className="section-heading">
          <span className="text-gradient">Certificates & Training</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-card border border-border rounded-2xl overflow-hidden card-glow animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Preview */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                    {cert.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.platform}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal - Full Screen Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className={`relative bg-card border border-border rounded-2xl overflow-hidden animate-scale-in ${
              isFullscreen ? 'w-full h-full rounded-none' : 'max-w-4xl w-[95vw] max-h-[95vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between z-10">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="font-semibold text-lg truncate">{selectedCert.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{selectedCert.platform}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Zoom out"
                  disabled={zoom <= 0.5}
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={resetZoom}
                  className="px-3 py-1 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Zoom in"
                  disabled={zoom >= 3}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-border mx-1" />
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div 
              className={`overflow-auto bg-secondary/30 ${
                isFullscreen ? 'h-[calc(100vh-73px)]' : 'max-h-[calc(95vh-140px)]'
              }`}
            >
              <div 
                className="min-h-full flex items-start justify-center p-4"
                style={{
                  cursor: zoom > 1 ? 'grab' : 'default'
                }}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-w-none transition-transform duration-200 shadow-2xl rounded-lg"
                  style={{ 
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    width: zoom === 1 ? '100%' : 'auto',
                    maxWidth: zoom === 1 ? '100%' : 'none'
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Footer with description */}
            <div className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border p-4">
              <p className="text-sm text-muted-foreground text-center">
                {selectedCert.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
