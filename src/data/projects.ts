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
import projetStoryboard from 'figma:asset/42a41e26b19b345331a7f6bd58b42845d1016600.png';

// Current Entreprise Images
import projetSecurite from 'figma:asset/f861591e708e949f3d7149043abeab45421cdd31.png';
import projetBientraitance from 'figma:asset/93d01dcd8ff3a72c0ad5bd26ae1d804310b57cc6.png';
import projetBrochure from 'figma:asset/0b1665739c6366ef1efeec964f075db37864f375.png';
import projetHygiene from 'figma:asset/9a9a7ee3ef0cf2eb671426c55ab8fdc46b9989b9.png';
import projetTaxe from 'figma:asset/fc023c72b7c5e548022a333769367c8f537f3ded.png';
import projetVaccination from 'figma:asset/431446adb6ccbe797baeb83cc83a07d74f5832e4.png';

// New Entreprise Images (Small)
import projetOralite from 'figma:asset/70af1bfce861da1483189be1fc0de5e7478b6512.png';
import projetReseaux from 'figma:asset/a9150cd52f37c5577ac5f6e55ff5d461b35cc82f.png';
import projetPresse from 'figma:asset/bd3515837aba6f7a751109af7e54bd7b27b6b214.png';

// New Header Image (Large)
import projetCEM from 'figma:asset/68a3c8de66efc8636c6ee6097680c43c1c3fa8ca.png';

// New Added Images (Batch 4)
import projetKakemono from 'figma:asset/c1cafb74ace531160264bf96c0b76ce12cf6d1ca.png';
import projetManuel from 'figma:asset/824006952e5e165a65264f7073352080f9705b88.png';

export interface ProjectDetails {
  context?: string;
  target?: string;
  watch?: string;
  strategy?: string;
  creation?: string;
  diffusion?: string;
  analysis?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  type: 'entreprise' | 'ecole' | 'personnel';
  image: string;
  size: 'small' | 'medium' | 'large';
  details?: ProjectDetails;
}

export const projects: Project[] = [
  // Projets Entreprise (Headline)
  {
    id: 29,
    title: '20 Ans CEM',
    category: 'Événementiel & Communication',
    type: 'entreprise',
    image: projetCEM,
    size: 'large',
  },

  // Projets Entreprise (Batch 1)
  {
    id: 20,
    title: 'Semaine Sécurité Patient',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetSecurite,
    size: 'medium',
  },
  {
    id: 21,
    title: 'Bientraitance',
    category: 'Campagne de Sensibilisation',
    type: 'entreprise',
    image: projetBientraitance,
    size: 'medium',
  },
  {
    id: 22,
    title: 'Brochure Établissement',
    category: 'Édition & Communication',
    type: 'entreprise',
    image: projetBrochure,
    size: 'medium',
  },
  // Projets Entreprise (Batch 2)
  {
    id: 23,
    title: 'Campagne Hygiène des Mains',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetHygiene,
    size: 'large',
  },
  {
    id: 24,
    title: 'Taxe Apprentissage',
    category: 'Communication Institutionnelle',
    type: 'entreprise',
    image: projetTaxe,
    size: 'medium',
  },
  {
    id: 25,
    title: 'Vaccination Grippe',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetVaccination,
    size: 'medium',
  },
  // Projets Entreprise (Batch 3 - Small)
  {
    id: 26,
    title: 'Campagne Oralité',
    category: 'Communication Santé',
    type: 'entreprise',
    image: projetOralite,
    size: 'small',
  },
  {
    id: 27,
    title: 'Poste pour les réseaux',
    category: 'Social Media',
    type: 'entreprise',
    image: projetReseaux,
    size: 'small',
  },
  {
    id: 28,
    title: 'Communiqué de Presse',
    category: 'Relations Presse',
    type: 'entreprise',
    image: projetPresse,
    size: 'small',
  },
  // Projets Entreprise (Batch 4 - Added)
  {
    id: 30,
    title: 'Kakemono Établissements',
    category: 'Communication Visuelle',
    type: 'entreprise',
    image: projetKakemono,
    size: 'medium',
  },
  {
    id: 31,
    title: 'Manuel de Visibilité',
    category: 'Identité Visuelle',
    type: 'entreprise',
    image: projetManuel,
    size: 'medium',
  },

  // Projet Personnel
  {
    id: 5,
    title: 'Projet Personnel 1',
    category: 'Édition',
    type: 'personnel',
    image: 'https://images.unsplash.com/photo-1660490987094-0ffe77562b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyMzA4MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },

  // Projets Ecole
  {
    id: 7,
    title: 'Angèle & Pardon!',
    category: 'Collaboration Créative',
    type: 'ecole',
    image: projetAngelePardon,
    size: 'large',
    details: {
      target: "Professionnel(le) de la communication, le tuteur encadre des étudiants en BTS Communication en alternance. Il/elle est régulièrement sollicité(e) par l’établissement de formation et cherche à rester informé(e) des actualités liées au BTS, aux outils de communication et aux bonnes pratiques du secteur"
    }
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
    size: 'large',
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
    size: 'large',
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
    size: 'large',
  },
  {
    id: 19,
    title: 'Storyboard',
    category: 'Storyboard',
    type: 'ecole',
    image: projetStoryboard,
    size: 'medium',
  },
];

// Configuration de la grille pour les projets (Reference / Legacy)
export const ECOLE_GRID_CONFIG: Record<number, {
  mobile: string;
  tablet: string;
  desktop: string;
  large: string;
}> = {
  // Entreprise
  29: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  20: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  21: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  22: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  23: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  24: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  25: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  26: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  27: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  28: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  30: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  31: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },

  // Ecole
  7: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  8: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  9: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  10: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  19: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  11: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  12: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  13: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  14: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  15: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  16: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
  17: { mobile: 'col-span-1 row-span-1', tablet: 'col-span-1 row-span-1', desktop: 'col-span-1 row-span-1', large: 'col-span-1 row-span-1' },
  18: { mobile: 'col-span-1 row-span-2', tablet: 'col-span-2 row-span-2', desktop: 'col-span-2 row-span-2', large: 'col-span-2 row-span-2' },
};

// IDs des projets en vedette
export const FEATURED_PROJECT_IDS = [7, 11, 16, 18, 23, 29];
