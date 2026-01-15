import { motion } from 'motion/react';
import { Linkedin, Instagram, Dribbble } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants/navigation';
import { getCurrentYear } from '../utils/helpers';

export function Footer() {
  return (
    <footer className="bg-secondary px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-white font-serif">
              Sanjali Frédélisy
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-background hover:bg-card hover:text-white transition-all shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-background hover:bg-card hover:text-white transition-all shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-background hover:bg-card hover:text-white transition-all shadow-md"
              aria-label="Behance"
            >
              <Dribbble className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/80 mb-6 italic font-light"
          >
            Pensé avec passion, conçu avec le cœur
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-white/50"
          >
            © {getCurrentYear()} Sanjali Frédélisy. Tous droits réservés.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
