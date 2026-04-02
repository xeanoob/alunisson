"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
              Nous contacter.
            </h1>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Une question sur nos ateliers ? Une envie de collaborer ou de faire un don ? 
              Envoyez-nous un petit mot, on vous répondra avec plaisir !
            </p>

            <div className="flex flex-col gap-6 bg-white p-8 rounded-3xl shadow-xl stitched offset-hand-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-foreground mb-1 uppercase tracking-widest">Email</span>
                  <a href="mailto:contact@alunisson.fr" className="text-accent underline underline-offset-4 hover:opacity-80">
                    contact@alunisson.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-foreground mb-1 uppercase tracking-widest">Le Local</span>
                  <p className="text-muted text-sm leading-relaxed">
                    Info Lab, 3 rue de la Cholerie<br />
                    45000 Orléans
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-2 border-border relative z-10 offset-hand-2"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-6 italic">Envoyer un mail</h2>
            <form action="mailto:contact@alunisson.fr" method="post" encType="text/plain" className="flex flex-col gap-5 text-left">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">Votre nom</label>
                <input 
                  type="text" 
                  name="Nom" 
                  required 
                  className="w-full bg-background rounded-xl border-none outline-none focus:ring-2 focus:ring-accent p-4 text-sm" 
                  placeholder="Jean Dupont"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">Votre email</label>
                <input 
                  type="email" 
                  name="Mail" 
                  required 
                  className="w-full bg-background rounded-xl border-none outline-none focus:ring-2 focus:ring-accent p-4 text-sm" 
                  placeholder="jean@exemple.fr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">Le message</label>
                <textarea 
                  name="Message" 
                  required 
                  rows={5}
                  className="w-full bg-background rounded-xl border-none outline-none focus:ring-2 focus:ring-accent p-4 text-sm resize-none" 
                  placeholder="Coucou ! Je voulais vous demander..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-4 w-full bg-accent text-white font-bold text-sm uppercase tracking-widest py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-3 shadow-lg"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
