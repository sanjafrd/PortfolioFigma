import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { PageType } from '../App';
import type { FilterType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onFilteredNavigation: (filter: FilterType) => void;
}

export function Header({ currentPage, setCurrentPage, onFilteredNavigation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRealisationsDropdownOpen, setIsRealisationsDropdownOpen] = useState(false);
  const [isMobileRealisationsOpen, setIsMobileRealisationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRealisationsDropdownOpen(false);
      }
    };

    if (isRealisationsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isRealisationsDropdownOpen]);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterClick = (filter: FilterType) => {
    onFilteredNavigation(filter);
    setIsRealisationsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileRealisationsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="hover:scale-105 transition-transform"
          >
            <span className="text-lg md:text-xl text-primary">
              Sanjali Frédélisy
            </span>
            <span className="hidden md:inline text-sm text-muted-foreground ml-2">
              — Communication
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Accueil
            </button>
            
            {/* Réalisations with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsRealisationsDropdownOpen(!isRealisationsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  currentPage === 'realisations'
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Réalisations
                <motion.div
                  animate={{ rotate: isRealisationsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isRealisationsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-xl overflow-hidden min-w-[200px] border border-primary/10"
                  >
                    <button
                      onClick={() => handleFilterClick('entreprise')}
                      className="w-full px-6 py-3 text-left hover:bg-rose-50 transition-colors text-foreground"
                    >
                      Projets entreprise
                    </button>
                    <button
                      onClick={() => handleFilterClick('ecole')}
                      className="w-full px-6 py-3 text-left hover:bg-rose-50 transition-colors text-foreground"
                    >
                      Projets école
                    </button>
                    <button
                      onClick={() => handleFilterClick('personnel')}
                      className="w-full px-6 py-3 text-left hover:bg-rose-50 transition-colors text-foreground"
                    >
                      Projets personnels
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors ${
                currentPage === 'contact'
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CV Button - Desktop */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2 ${
                currentPage === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Accueil
            </button>
            
            {/* Mobile Réalisations Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileRealisationsOpen(!isMobileRealisationsOpen)}
                className={`flex items-center justify-between w-full text-left py-2 ${
                  currentPage === 'realisations' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Réalisations
                <motion.div
                  animate={{ rotate: isMobileRealisationsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isMobileRealisationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    <button
                      onClick={() => handleFilterClick('entreprise')}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Projets entreprise
                    </button>
                    <button
                      onClick={() => handleFilterClick('ecole')}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Projets école
                    </button>
                    <button
                      onClick={() => handleFilterClick('personnel')}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Projets personnels
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left py-2 ${
                currentPage === 'about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2 ${
                currentPage === 'contact' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full shadow-md w-fit"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}