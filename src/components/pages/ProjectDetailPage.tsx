import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import type { PageType } from '../../App';
import { projects } from '../../data/projects';
import { scrollToTop } from '../../utils/helpers';

interface ProjectDetailPageProps {
  projectId: number;
  setCurrentPage: (page: PageType) => void;
}

export function ProjectDetailPage({ projectId, setCurrentPage }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return null;
  }

  const handleBack = () => {
    setCurrentPage('realisations');
    scrollToTop();
  };

  const renderSection = (title: string, content: string | undefined, delay: number) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="bg-card rounded-3xl p-8 shadow-md border border-white/5"
      >
        <h2 className="text-3xl mb-6 text-white font-serif">{title}</h2>
        {content ? (
          <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
            {content}
          </p>
        ) : (
          <div className="min-h-[150px] flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl">
            <p className="text-white/30 italic">Contenu à ajouter...</p>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen px-6 py-32 bg-gradient-to-br from-background via-secondary to-card">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBack}
          className="flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-8"
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
          <p className="text-sm text-white/60 mb-2 tracking-wider uppercase">{project.category}</p>
          <h1 className="text-5xl md:text-6xl text-white mb-6 font-serif">
            {project.title}
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-96 rounded-3xl overflow-hidden shadow-xl mb-16 bg-white/5 border border-white/10"
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
          {renderSection('📋 Contexte', project.details?.context, 0.3)}

          {/* Cible - Render ONLY if content exists (special case as requested) */}
          {project.details?.target && (
             <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.35 }}
             className="bg-card rounded-3xl p-8 shadow-md border border-white/5"
           >
             <h2 className="text-3xl mb-6 text-white font-serif">👥 Cible</h2>
             <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
               {project.details.target}
             </p>
           </motion.div>
          )}

          {/* Veille */}
          {renderSection('🔍 Veille', project.details?.watch, 0.4)}

          {/* Stratégie */}
          {renderSection('🎯 Stratégie', project.details?.strategy, 0.5)}

          {/* Création */}
          {renderSection('🎨 Création', project.details?.creation, 0.6)}

          {/* Diffusion */}
          {renderSection('📢 Diffusion', project.details?.diffusion, 0.7)}

          {/* Analyse */}
          {renderSection('📈 Analyse', project.details?.analysis, 0.8)}
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
            className="px-8 py-3 bg-white text-background rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
          >
            Retour aux réalisations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
