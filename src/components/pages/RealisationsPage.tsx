import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { FilterType } from '../../App';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import projetAngelePardon from 'figma:asset/a29a96c45105babd89f20f0bf28ed8f0fa0190ac.png';
import projetPantoufle from 'figma:asset/929f65062e7ab91e7218ae36e9c496920d253e8d.png';
import projetMiels from 'figma:asset/8bfe133a2c37018725e7cd23f2b840b828cc3833.png';
import projetMauvaisEleves from 'figma:asset/41bbfd78d0dd79068b20fcf098006308112bb19e.png';
import projetGlace from 'figma:asset/b0357c2980efdba214595eefbbe1bbbe0190c11e.png';
import projetLiloStitch from 'figma:asset/7d966ccca7dc7918c51bc44dd3ecafe824ba394b.png';
import projetClementine from 'figma:asset/e0eeae9bca851e9f2b7768e46eef37f499042d38.png';
import projetAristochats from 'figma:asset/c0e5f0adf6b1f97c4a9525f298b333bd83fdf20b.png';
import projetNalu from 'figma:asset/7ba25114a3db8fa59fa56b43d7aaca1b903660f7.png';
import projetAirAustral from 'figma:asset/d0773edf83316b2a4f921bb9cb223ce5d90adf3f.png';
import projetEDN from 'figma:asset/2e4f71040f207309b51a964a0b6eba1b38fd8ad1.png';
import projetBenetton from 'figma:asset/fac4d339808187a44b0854bc1e337006578e6f7d.png';

interface Project {
  id: number;
  title: string;
  category: string;
  type: 'entreprise' | 'ecole' | 'personnel';
  image: string;
  size: 'small' | 'medium' | 'large';
}

const projects: Project[] = [
  {
    id: 2,
    title: 'Projet Entreprise 1',
    category: 'Branding',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2MjM4NzQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Projet Entreprise 2',
    category: 'Social Media',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1639511232533-51a6ed459e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MjQxMzc0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Projet Personnel 1',
    category: 'Édition',
    type: 'personnel',
    image: 'https://images.unsplash.com/photo-1660490987094-0ffe77562b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyMzA4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },
  {
    id: 6,
    title: 'Projet Entreprise 3',
    category: 'Communication',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1663672508343-91628310343c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMDgwcyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjI0MTUxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Angèle & Pardon!',
    category: 'Collaboration Créative',
    type: 'ecole',
    image: projetAngelePardon,
    size: 'medium',
  },
  {
    id: 8,
    title: 'La Pantoufle à Pépère',
    category: 'Branding & Identité',
    type: 'ecole',
    image: projetPantoufle,
    size: 'medium',
  },
  {
    id: 9,
    title: 'Miels Rares du Cirque',
    category: 'Packaging & Communication',
    type: 'ecole',
    image: projetMiels,
    size: 'medium',
  },
  {
    id: 10,
    title: 'Les Mauvais Élèves',
    category: 'Illustration',
    type: 'ecole',
    image: projetMauvaisEleves,
    size: 'medium',
  },
  {
    id: 11,
    title: 'Glace',
    category: 'Illustration',
    type: 'ecole',
    image: projetGlace,
    size: 'medium',
  },
  {
    id: 12,
    title: 'Lilo & Stitch',
    category: 'Illustration',
    type: 'ecole',
    image: projetLiloStitch,
    size: 'medium',
  },
  {
    id: 13,
    title: 'Clementine',
    category: 'Illustration',
    type: 'ecole',
    image: projetClementine,
    size: 'medium',
  },
  {
    id: 14,
    title: 'Aristochats',
    category: 'Illustration',
    type: 'ecole',
    image: projetAristochats,
    size: 'medium',
  },
  {
    id: 15,
    title: 'Nalu',
    category: 'Illustration',
    type: 'ecole',
    image: projetNalu,
    size: 'medium',
  },
  {
    id: 16,
    title: 'Air Austral',
    category: 'Branding & Identité',
    type: 'ecole',
    image: projetAirAustral,
    size: 'medium',
  },
  {
    id: 17,
    title: 'EDN',
    category: 'Branding & Identité',
    type: 'ecole',
    image: projetEDN,
    size: 'medium',
  },
  {
    id: 18,
    title: 'Benetton',
    category: 'Branding & Identité',
    type: 'ecole',
    image: projetBenetton,
    size: 'medium',
  },
];

interface RealisationsPageProps {
  navigateToProject: (projectId: number) => void;
  filter: FilterType;
}

export function RealisationsPage({ navigateToProject, filter }: RealisationsPageProps) {
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getFilterTitle = () => {
    switch (filter) {
      case 'entreprise':
        return 'Projets Entreprise';
      case 'ecole':
        return 'Projets École';
      case 'personnel':
        return 'Projets Personnels';
      default:
        return 'Réalisations';
    }
  };

  // Projects to display larger (featured)
  const featuredProjectIds = [7, 11, 16, 18]; // Angèle&Pardon, Glace, Air Austral, Benetton
  
  // Check if current filter is "ecole" for custom grid layout
  const isEcoleFilter = filter === 'ecole';

  return (
    <section className="min-h-screen px-6 py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4 text-primary">
            {getFilterTitle()}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets réalisés en école et en entreprise
          </p>
        </motion.div>

        {/* Custom Grid Layout for "Projets École" */}
        {isEcoleFilter ? (
          <div className="grid grid-cols-12 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[260px]">
            {filteredProjects.map((project, index) => {
              const isFeatured = featuredProjectIds.includes(project.id);
              
              // Custom positioning for organic layout
              let gridClass = '';
              
              if (project.id === 7) { // Angèle & Pardon - top left, large
                gridClass = 'col-span-6 row-span-2';
              } else if (project.id === 8) { // La Pantoufle - small
                gridClass = 'col-span-3 row-span-1';
              } else if (project.id === 9) { // Miels Rares - small
                gridClass = 'col-span-3 row-span-1';
              } else if (project.id === 10) { // Les Mauvais Élèves - small
                gridClass = 'col-span-3 row-span-1';
              } else if (project.id === 11) { // Glace - large
                gridClass = 'col-span-6 row-span-2';
              } else if (project.id === 12) { // Lilo & Stitch - small
                gridClass = 'col-span-3 row-span-1';
              } else if (project.id === 13) { // Clementine - small
                gridClass = 'col-span-4 row-span-1';
              } else if (project.id === 14) { // Aristochats - small
                gridClass = 'col-span-4 row-span-1';
              } else if (project.id === 15) { // Nalu - small
                gridClass = 'col-span-4 row-span-1';
              } else if (project.id === 16) { // Air Austral - large
                gridClass = 'col-span-6 row-span-2';
              } else if (project.id === 17) { // EDN - small
                gridClass = 'col-span-3 row-span-1';
              } else if (project.id === 18) { // Benetton - large
                gridClass = 'col-span-6 row-span-2';
              }

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`cursor-pointer group ${gridClass}`}
                  onClick={() => navigateToProject(project.id)}
                >
                  {/* Full container without visible borders */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 shadow-md hover:shadow-xl transition-all duration-500 group-hover:scale-[1.03] group-hover:z-10">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with Title on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/85 via-rose-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                      <div>
                        <p className="text-xs text-white/90 mb-1 tracking-wider uppercase">{project.category}</p>
                        <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} text-white`}>{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          // Standard Masonry Layout for other categories
          <ResponsiveMasonry columnsCountBreakPoints={{ default: 3, 1100: 2, 700: 1 }}>
            <Masonry gutter="16px">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => navigateToProject(project.id)}
                >
                  {/* Square Image Container with Overlay Title */}
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Overlay with Title on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-xs text-white/90 mb-1 tracking-wider uppercase">{project.category}</p>
                        <h3 className="text-2xl text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              Aucun projet dans cette catégorie pour le moment
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}