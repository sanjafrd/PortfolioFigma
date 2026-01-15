import { forwardRef, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  className?: string;
  priority?: boolean;
  index?: number;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, onClick, className = '', priority = false, index = 0 }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [span, setSpan] = useState(0);

    useEffect(() => {
      const updateSpan = () => {
        if (contentRef.current) {
          const height = contentRef.current.getBoundingClientRect().height;
          // Grid setup: auto-rows-[1px] and gap-3 (12px)
          const gap = 12;
          const rowHeight = 1;
          
          // Formula: span * rowHeight + (span - 1) * gap >= height
          // span * (rowHeight + gap) >= height + gap
          const requiredSpan = Math.ceil((height + gap) / (rowHeight + gap));
          
          setSpan(requiredSpan);
        }
      };

      // Initial calculation
      updateSpan();

      const observer = new ResizeObserver(updateSpan);
      if (contentRef.current) {
        observer.observe(contentRef.current);
      }

      // Fallback for image loading resize events
      window.addEventListener('resize', updateSpan);

      return () => {
        observer.disconnect();
        window.removeEventListener('resize', updateSpan);
      };
    }, []);

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className={`relative group cursor-pointer overflow-hidden rounded-3xl ${className}`}
        style={{ gridRowEnd: span ? `span ${span}` : undefined }}
        onClick={() => onClick(project.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(project.id);
          }
        }}
      >
        {/* Content Wrapper for measurement */}
        <div ref={contentRef} className="w-full">
          {/* Main Content Layer - Full Image */}
          <div className="relative z-10 w-full flex items-center justify-center p-0">
            <div className="relative w-full transition-transform duration-500 group-hover:scale-105">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-auto block drop-shadow-2xl"
                loading={priority ? "eager" : "lazy"}
              />
            </div>
          </div>

          {/* Overlay Info Layer */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
            <span className="text-xs font-medium tracking-widest text-white/80 uppercase mb-2 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              {project.category}
            </span>
            <h3 className="text-2xl font-serif font-medium text-white transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
