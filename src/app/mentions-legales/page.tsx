"use client";
import { Navbar } from "@/components/ui/Navbar";
import { motion } from "framer-motion";

export default function MentionsLegalesPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl mb-12">Mentions Légales</h1>
            
            <div className="space-y-10 text-muted leading-relaxed">
              <div>
                <h2 className="text-foreground font-semibold mb-3 italic">1. Éditeur du site</h2>
                <p className="text-sm">
                  Le présent site est édité par l'association <strong className="text-foreground">Alunisson</strong>, 
                  association loi 1901 à but non lucratif.<br />
                  <strong className="text-foreground">Siège social :</strong> 3 rue de la Cholerie, 45000 Orléans (L'Info Lab).<br />
                  <strong className="text-foreground">Responsable de la publication :</strong> Le Bureau de l'association.
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold mb-3 italic">2. Hébergement</h2>
                <p className="text-sm">
                  Ce site est hébergé par <strong className="text-foreground">Vercel Inc.</strong><br />
                  Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold mb-3 italic">3. Propriété intellectuelle</h2>
                <p className="text-sm">
                  L'ensemble des contenus (textes, images, logos) présents sur le site est la propriété exclusive de l'association Alunisson, 
                  sauf mention contraire. Toute reproduction, même partielle, est interdite sans accord préalable.
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold mb-3 italic">4. Données personnelles</h2>
                <p className="text-sm">
                  Les adresses e-mail collectées via le formulaire de newsletter sont uniquement destinées au bureau de l'association 
                  pour envoyer des invitations aux ateliers. Conformément au RGPD, vous disposez d'un droit d'accès, 
                  de rectification et de suppression de vos données en nous contactant à <strong className="text-foreground">contact@alunisson.fr</strong>.
                </p>
              </div>

              <div className="pt-10 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">
                  Site réalisé par un bénévole pour l'association Alunisson.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
