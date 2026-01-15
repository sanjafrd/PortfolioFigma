import { motion } from 'motion/react';
import profileImage from 'figma:asset/456f6eb9af5c2173108cc47471b5e7ed3175d93b.png';

export function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-background via-secondary to-card">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-center mb-16 text-white"
        >
          À propos
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={profileImage}
                  alt="Sanjali Frédélisy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              <p className="text-lg text-white/90 leading-relaxed">
                Je m'appelle <span className="font-semibold text-white">Sanjali Fredelisy</span> et j'évolue dans le domaine de la communication.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Passionnée par la création visuelle et les projets porteurs de sens, j'aime imaginer des supports qui allient esthétique et clarté.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Curieuse et organisée, je prends plaisir à apprendre chaque jour à travers mes missions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Mon objectif est de développer mes compétences en communication et en marketing, tout en apportant ma touche personnelle et créative à chaque projet.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
