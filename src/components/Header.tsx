import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { PageType } from '../App';
import type { FilterType } from '../App';
import { REALISATION_FILTERS } from '../constants/navigation';
import { scrollToTop } from '../utils/helpers';

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
    scrollToTop();
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
          : 'bg-white shadow-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="hover:scale-105 transition-transform"
            aria-label="Retour à l'accueil"
          >
            <span className="text-lg md:text-xl text-primary font-bold">
              Sanjali Frédélisy
            </span>
            <span className="hidden md:inline text-sm text-[#4e0201]/80 ml-2">
              — Communication
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Menu principal">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-primary font-semibold'
                  : 'text-[#4e0201] hover:text-primary/80'
              }`}
              aria-current={currentPage === 'home' ? 'page' : undefined}
            >
              Accueil
            </button>
            
            {/* Réalisations with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsRealisationsDropdownOpen(!isRealisationsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  currentPage === 'realisations'
                    ? 'text-primary font-semibold'
                    : 'text-[#4e0201] hover:text-primary/80'
                }`}
                aria-expanded={isRealisationsDropdownOpen}
                aria-haspopup="true"
                aria-current={currentPage === 'realisations' ? 'page' : undefined}
              >
                Réalisations
                <motion.div
                  animate={{ rotate: isRealisationsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-[#4e0201]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isRealisationsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-xl overflow-hidden min-w-[200px] border border-[#4e0201]/10"
                    role="menu"
                  >
                    {REALISATION_FILTERS.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => handleFilterClick(filter.value)}
                        className="w-full px-6 py-3 text-left hover:bg-[#4e0201]/5 transition-colors text-[#4e0201]"
                        role="menuitem"
                      >
                        {filter.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-primary font-semibold'
                  : 'text-[#4e0201] hover:text-primary/80'
              }`}
              aria-current={currentPage === 'about' ? 'page' : undefined}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors ${
                currentPage === 'contact'
                  ? 'text-primary font-semibold'
                  : 'text-[#4e0201] hover:text-primary/80'
              }`}
              aria-current={currentPage === 'contact' ? 'page' : undefined}
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
            aria-label="Télécharger mon CV (PDF)"
          >
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#4e0201]"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 pb-4 space-y-4 bg-white rounded-lg p-4 shadow-xl"
              role="navigation"
              aria-label="Menu mobile"
            >
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left py-2 ${
                  currentPage === 'home' ? 'text-primary font-semibold' : 'text-[#4e0201]'
                }`}
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                Accueil
              </button>
              
              {/* Mobile Réalisations Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileRealisationsOpen(!isMobileRealisationsOpen)}
                  className={`flex items-center justify-between w-full text-left py-2 ${
                    currentPage === 'realisations' ? 'text-primary font-semibold' : 'text-[#4e0201]'
                  }`}
                  aria-expanded={isMobileRealisationsOpen}
                  aria-haspopup="true"
                  aria-current={currentPage === 'realisations' ? 'page' : undefined}
                >
                  Réalisations
                  <motion.div
                    animate={{ rotate: isMobileRealisationsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-[#4e0201]" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isMobileRealisationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-[#4e0201]/10"
                      role="menu"
                    >
                      {REALISATION_FILTERS.map((filter) => (
                        <button
                          key={filter.value}
                          onClick={() => handleFilterClick(filter.value)}
                          className="block w-full text-left py-2 text-sm text-[#4e0201]/80 hover:text-primary transition-colors"
                          role="menuitem"
                        >
                          {filter.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left py-2 ${
                  currentPage === 'about' ? 'text-primary font-semibold' : 'text-[#4e0201]'
                }`}
                aria-current={currentPage === 'about' ? 'page' : undefined}
              >
                À propos
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`block w-full text-left py-2 ${
                  currentPage === 'contact' ? 'text-primary font-semibold' : 'text-[#4e0201]'
                }`}
                aria-current={currentPage === 'contact' ? 'page' : undefined}
              >
                Contact
              </button>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full shadow-md w-fit mx-auto"
                aria-label="Télécharger mon CV (PDF)"
              >
                <Download className="w-4 h-4" />
                Télécharger mon CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}