import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PageType } from '../../App';
import { scrollToTop } from '../../utils/helpers';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Communication visuelle',
    subtitle: 'Créer des supports qui allient esthétique et clarté',
    gradient: 'from-background via-card to-secondary',
  },
  {
    id: 2,
    title: 'Projets créatifs',
    subtitle: 'Des réalisations pensées avec passion et attention',
    gradient: 'from-secondary via-background to-accent',
  },
  {
    id: 3,
    title: 'Design & stratégie',
    subtitle: 'Apporter ma touche personnelle à chaque projet',
    gradient: 'from-card via-secondary to-background',
  },
];

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleViewRealisations = () => {
    setCurrentPage('realisations');
    scrollToTop();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white tracking-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewRealisations}
              className="px-10 py-4 bg-white text-background rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
            >
              Voir les réalisations
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-background transition-all shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-background transition-all shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
