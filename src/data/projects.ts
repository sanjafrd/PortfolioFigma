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
    image: 'https://images.unsplash.com/photo-1698925914457-05fd83774a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNlbGVicmF0aW9uJTIwYnJhbmRpbmclMjBtYXJrZXRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzY5NjcyMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
  },

  // Projets Entreprise (Batch 1)
  {
    id: 20,
    title: 'Semaine Sécurité Patient',
    category: 'Communication Santé',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1722235625926-3db1c4c54af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwc2FmZXR5JTIwaG9zcGl0YWwlMjBtZWRpY2FsJTIwcG9zdGVyJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3Njk2NzIxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 21,
    title: 'Bientraitance',
    category: 'Campagne de Sensibilisation',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1693821193240-8ccede32fb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGtpbmRuZXNzJTIwaGFuZHMlMjBob2xkaW5nJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2OTY3MjExNnww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 22,
    title: 'Brochure Établissement',
    category: 'Édition & Communication',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1695634621121-691d54259d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicm9jaHVyZSUyMG1hZ2F6aW5lJTIwbGF5b3V0JTIwZWRpdG9yaWFsJTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3Njk2NzIxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  // Projets Entreprise (Batch 2)
  {
    id: 23,
    title: 'Campagne Hygiène des Mains',
    category: 'Communication Santé',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1628235176517-71013205a2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwaHlnaWVuZSUyMHdhc2hpbmclMjBoYW5kcyUyMHNvYXAlMjBtZWRpY2FsJTIwYmx1ZXxlbnwxfHx8fDE3Njk2NzIxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
  },
  {
    id: 24,
    title: 'Taxe Apprentissage',
    category: 'Communication Institutionnelle',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHByZW50aWNlc2hpcCUyMHRheCUyMGJ1c2luZXNzJTIwZmluYW5jZSUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHxlbnwxfHx8fDE3Njk2NzIxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 25,
    title: 'Vaccination Grippe',
    category: 'Communication Santé',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1578307896780-d257213543a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHUlMjB2YWNjaW5hdGlvbiUyMHN5cmluZ2UlMjBtZWRpY2FsJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3Njk2NzIxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  // Projets Entreprise (Batch 3 - Small)
  {
    id: 26,
    title: 'Campagne Oralité',
    category: 'Communication Santé',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFsJTIwaGVhbHRoJTIwZGVudGlzdCUyMHNtaWxlJTIwdGVldGglMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc2OTY3MjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },
  {
    id: 27,
    title: 'Poste pour les réseaux',
    category: 'Social Media',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1762330465740-ecffd36232f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpY2FsJTIwbWFya2V0aW5nJTIwaW5zdGFncmFtJTIwcG9zdHMlMjBwaG9uZSUyMHNjcmVlbnxlbnwxfHx8fDE3Njk2NzIxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },
  {
    id: 28,
    title: 'Communiqué de Presse',
    category: 'Relations Presse',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMHJlbGVhc2UlMjBqb3VybmFsaXNtJTIwd3JpdGluZyUyMG5ld3NwYXBlciUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzY5NjcyMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
  },
  // Projets Entreprise (Batch 4 - Added)
  {
    id: 30,
    title: 'Kakemono Établissements',
    category: 'Communication Visuelle',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsJTIwdXAlMjBiYW5uZXIlMjBleGhpYml0aW9uJTIwZGVzaWduJTIwc3RhbmQlMjBtb2NrdXB8ZW58MXx8fHwxNzY5NjcyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 31,
    title: 'Manuel de Visibilité',
    category: 'Identité Visuelle',
    type: 'entreprise',
    image: 'https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbWFudWFsJTIwZ3VpZGVsaW5lcyUyMGJvb2slMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc2OTY3MjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1764520408437-95890a95db4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvc3RlciUyMGRlc2lnbiUyMGFydGlzdGljJTIwY29sb3JmdWwlMjBncmFwaGljfGVufDF8fHx8MTc2OTY3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1645475401635-88f088f224d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGlwcGVyJTIwY296eSUyMGJyYW5kaW5nJTIwbG9nbyUyMHdvb2wlMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTY3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 9,
    title: 'Miels Rares du Cirque',
    category: 'Packaging & Communication',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1740730808274-3838998c4504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMHBhY2thZ2luZyUyMGphciUyMGx1eHVyeSUyMGRlc2lnbnxlbnwxfHx8fDE3Njk2NzI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 10,
    title: 'Les Mauvais Élèves',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1759753928132-364c22819e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBkcmF3aW5nJTIwYXJ0JTIwYmFkJTIwc3R1ZGVudHMlMjBzY2hvb2wlMjBmdW5ueXxlbnwxfHx8fDE3Njk2NzIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 11,
    title: 'Glace',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1566321116846-60099a937385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHN1bW1lciUyMGlsbHVzdHJhdGlvbiUyMGNvbG9yZnVsJTIwcG9wJTIwYXJ0fGVufDF8fHx8MTc2OTY3MjEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
  },
  {
    id: 12,
    title: 'Lilo & Stitch',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1625077854313-735e4442a038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlsbHVzdHJhdGlvbiUyMGhhd2FpaSUyMHN0eWxlJTIwdmlicmFudHxlbnwxfHx8fDE3Njk2NzI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 13,
    title: 'Clementine',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1765382506526-9de810e1aeb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVtZW50aW5lJTIwb3JhbmdlJTIwZnJ1aXQlMjBpbGx1c3RyYXRpb24lMjBjaXRydXMlMjBmcmVzaHxlbnwxfHx8fDE3Njk2NzIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 14,
    title: 'Aristochats',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1736703263170-29c8b10977ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY2F0JTIwaWxsdXN0cmF0aW9uJTIwYXJ0aXN0aWMlMjBwaWFub3xlbnwxfHx8fDE3Njk2NzI0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 15,
    title: 'Nalu',
    category: 'Illustration',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1764520408437-95890a95db4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvc3RlciUyMGRlc2lnbiUyMGFydGlzdGljJTIwY29sb3JmdWwlMjBncmFwaGljfGVufDF8fHx8MTc2OTY3MjExOXww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 16,
    title: 'Air Austral',
    category: 'Branding & Identité',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1693749546359-7aeb24ff6ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJsaW5lJTIwYnJhbmRpbmclMjBsb2dvJTIwcGxhbmUlMjBza3klMjBjbG91ZHMlMjB0cmF2ZWx8ZW58MXx8fHwxNzY5NjcyMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
  },
  {
    id: 17,
    title: 'EDN',
    category: 'Branding & Identité',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1613905383527-8994ba2f9896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbG9nbyUyMGJyYW5kaW5nJTIwZGVzaWduJTIwY2xlYW4lMjB0eXBvZ3JhcGh5fGVufDF8fHx8MTc2OTY3MjEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
  },
  {
    id: 18,
    title: 'Benetton',
    category: 'Branding & Identité',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1767570278951-0a3c50e1a07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhc2hpb24lMjBwaG90b2dyYXBoeSUyMGFydGlzdGljJTIwc3R5bGV8ZW58MXx8fHwxNzY5NjcyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
  },
  {
    id: 19,
    title: 'Storyboard',
    category: 'Storyboard',
    type: 'ecole',
    image: 'https://images.unsplash.com/photo-1714251638558-349c2f49ea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeWJvYXJkJTIwbW92aWUlMjBmaWxtJTIwc2tldGNoJTIwZHJhd2luZyUyMHNlcXVlbmNlfGVufDF8fHx8MTc2OTY3MjEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
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
