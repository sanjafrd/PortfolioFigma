import { motion, AnimatePresence } from 'motion/react';
import type { FilterType } from '../../App';
import { projects } from '../../data/projects';
import { getFilterTitle } from '../../utils/helpers';
import { ProjectCard } from '../ProjectCard';
import { cn } from '../ui/utils';

interface RealisationsPageProps {
  navigateToProject: (projectId: number) => void;
  filter: FilterType;
}

const getGridSpan = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'large':
      return 'col-span-1 sm:col-span-2';
    case 'medium':
      return 'col-span-1';
    case 'small':
      return 'col-span-1';
    default:
      return 'col-span-1';
  }
};

export function RealisationsPage({ navigateToProject, filter }: RealisationsPageProps) {
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="min-h-screen px-4 py-24 sm:px-6 sm:py-32 bg-gradient-to-br from-[#4e0201] via-[#2a0000] to-[#4e0201]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium mb-6 text-white">
            {getFilterTitle(filter)}
          </h1>
        </motion.div>

        {/* Masonry Grid - Optimized with granular rows */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 auto-rows-[1px] grid-flow-dense"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={navigateToProject}
                className={getGridSpan(project.size)}
                index={index}
                priority={index < 4}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-2xl font-serif text-muted-foreground/50">
              Aucun projet à afficher pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
