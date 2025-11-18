import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PageType } from '../../App';

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
    gradient: 'from-rose-200 via-pink-100 to-orange-50',
  },
  {
    id: 2,
    title: 'Projets créatifs',
    subtitle: 'Des réalisations pensées avec passion et attention',
    gradient: 'from-pink-100 via-rose-50 to-amber-50',
  },
  {
    id: 3,
    title: 'Design & stratégie',
    subtitle: 'Apporter ma touche personnelle à chaque projet',
    gradient: 'from-orange-50 via-pink-50 to-rose-100',
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl mb-6 text-foreground tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewRealisations}
              className="px-10 py-4 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Voir les réalisations
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all shadow-md"
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
              index === currentSlide ? 'bg-primary w-8' : 'bg-primary/50 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
}