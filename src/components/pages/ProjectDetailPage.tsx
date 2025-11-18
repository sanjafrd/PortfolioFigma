import { motion } from 'motion/react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import type { PageType } from '../../App';

interface ProjectDetailPageProps {
  projectId: number;
  setCurrentPage: (page: PageType) => void;
}

// Mock project data - vous pourrez remplir ces informations plus tard
const projectsData: Record<number, {
  title: string;
  category: string;
  image: string;
}> = {
  1: {
    title: 'Projet École 1',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1663672508343-91628310343c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMDgwcyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjI0MTUxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  2: {
    title: 'Projet Entreprise 1',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2MjM4NzQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  3: {
    title: 'Projet École 2',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwxfHx8fDE3NjIzNTM2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  4: {
    title: 'Projet Entreprise 2',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1639511232533-51a6ed459e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MjQxMzc0OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  5: {
    title: 'Projet École 3',
    category: 'Édition',
    image: 'https://images.unsplash.com/photo-1660490987094-0ffe77562b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyMzA4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  6: {
    title: 'Projet Entreprise 3',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1663672508343-91628310343c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMDgwcyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjI0MTUxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
};

export function ProjectDetailPage({ projectId, setCurrentPage }: ProjectDetailPageProps) {
  const project = projectsData[projectId];

  if (!project) {
    return null;
  }

  const handleBack = () => {
    setCurrentPage('realisations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen px-6 py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour aux réalisations
        </motion.button>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">{project.category}</p>
          <h1 className="text-5xl md:text-6xl text-foreground mb-6">
            {project.title}
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-96 rounded-3xl overflow-hidden shadow-xl mb-16 bg-white"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project sections */}
        <div className="space-y-12">
          {/* Contexte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">📋 Contexte</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>

          {/* Veille */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">🔍 Veille</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>

          {/* Stratégie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">🎯 Stratégie</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>

          {/* Création */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">🎨 Création</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>

          {/* Diffusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">📢 Diffusion</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>

          {/* Analyse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <h2 className="text-3xl mb-6 text-primary">📈 Analyse</h2>
            <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-muted-foreground italic">Contenu à ajouter...</p>
            </div>
          </motion.div>
        </div>

        {/* Back button at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleBack}
            className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Retour aux réalisations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
