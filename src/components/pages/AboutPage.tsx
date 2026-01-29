import { motion } from 'motion/react';
// import profileImage from 'figma:asset/456f6eb9af5c2173108cc47471b5e7ed3175d93b.png';
const profileImage = "https://images.unsplash.com/photo-1658909835269-e76abd3ffb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY3JlYXRpdmUlMjBkaXJlY3RvciUyMHdhcm0lMjBsaWdodGluZyUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5NjcyNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-[#2a0000] via-[#4e0201] to-[#2a0000]">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-center mb-16 text-white"
        >
          À propos
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16 items-start md:h-[600px]">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center h-full w-full"
          >
            <div className="relative w-full max-w-md h-[500px] md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6f1a19]/30 to-[#913331]/30 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Sanjali Frédélisy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Scroll Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full relative overflow-y-auto pr-4 custom-scrollbar"
          >
            <div className="space-y-6 pb-6">
              <p className="text-lg text-white/90 leading-relaxed">
                Je m'appelle <span className="text-white font-semibold">Sanjali Fredelisy</span> et j'évolue dans le domaine de la communication.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Je suis très intéressée par la création visuelle et les nouveaux projets. J’aime imaginer, créer et suivre des projets, ainsi que concevoir différents supports de communication.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Curieuse et organisée, je prends plaisir à apprendre chaque jour à travers mes missions, mais surtout j’ai envie de continuer à m’améliorer et à évoluer dans mon domaine.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Mon objectif est de développer mes compétences en communication, tout en réussissant à apporter une touche personnelle et créative à mon travail.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Après avoir obtenu un baccalauréat avec la mention assez bien, je suis entrée dans le monde du travail, où j’ai travaillé pendant trois ans. Suite à cette expérience, j’ai décidé de me reconvertir professionnellement vers un domaine qui m’attirait depuis longtemps : la communication, et plus précisément la création de contenu.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Dans la vie, j’ai plusieurs passions que je cultive depuis des années, notamment la musique, je joue du piano, ainsi que le sport. Mon parcours personnel et professionnel m’a appris la rigueur et la régularité, des valeurs que j’essaie aujourd’hui d’appliquer à ma formation et à mon futur métier.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
