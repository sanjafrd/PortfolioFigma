import { motion } from 'motion/react';
import { Phone, Mail, Send, Heart } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl mb-6 text-primary">
            Contact
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-2">
            Envie de collaborer ou d'échanger ? Écris-moi <Heart className="w-5 h-5 text-primary fill-primary" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-2xl mb-4 text-primary">Mes coordonnées</h2>
              <p className="text-muted-foreground">
                N'hésitez pas à me contacter pour échanger sur vos projets ou simplement discuter de communication et création.
              </p>
            </div>

            <motion.a
              href="tel:0693527304"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                <p className="text-lg">0693 52 73 04</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:sanja.fredelisy@gmail.com"
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg break-all">sanja.fredelisy@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl mb-6 text-primary">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-input-background rounded-2xl border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-input-background rounded-2xl border-2 border-transparent focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-foreground">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-6 py-4 bg-input-background rounded-2xl border-2 border-transparent focus:border-primary focus:outline-none transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary text-white rounded-full flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Envoyer
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
