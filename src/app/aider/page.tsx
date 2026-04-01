"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Gift, UserPlus, Scissors } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

export default function AiderPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-8xl mb-6">
              Nous aider.
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Alunisson vit grâce à l'énergie de ses membres et à la générosité 
              de tous. Voici comment tu peux faire grandir l'association.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Illustration */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1000px] mx-auto h-[300px] md:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-2xl offset-hand-1 border-[10px] border-white">
          <Image 
            src="/tissus_table.jpg" 
            alt="Table de tissus chez Alunisson" 
            fill 
            className="object-cover" 
          />
        </div>
      </section>

      {/* ═══ CARTES D'ACTION ═══ */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[700px] mx-auto text-center">
          
          {/* Don de matériel */}
          <div className="p-8 md:p-12 border border-border rounded-3xl bg-white flex flex-col items-center gap-6 shadow-xl stitched offset-hand-1">
            <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center text-accent offset-hand-2">
              <Scissors size={32} />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-3xl md:text-4xl mb-4 italic">Dons de matériel</h3>
              <p className="text-muted leading-relaxed max-w-md mx-auto italic mb-6">
                "Tu as des chutes de tissus (même petites !), des bobines de fils, ou une machine à coudre dont tu ne te sers plus ?"
              </p>
              <div className="bg-accent-soft/30 p-6 rounded-2xl border border-accent/10 offset-hand-3">
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  On les récupère avec joie pour nos ateliers gratuits et nos initiations. 
                  Donne-leur une seconde vie dans les mains de nos participants !
                </p>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">
                Dépôt possible à l'Info Lab (3 rue de la Cholerie).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-accent text-white py-20 px-6 md:px-10 rounded-t-[3rem]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight">
            Chaque bobine, chaque chute compte.
          </h2>
          <a 
            href="mailto:contact@alunisson.fr" 
            className="inline-block bg-white text-accent font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform"
          >
            Nous contacter pour un don
          </a>
          <p className="mt-8 text-white/70 text-sm">
            On est là chaque semaine à l'Info Lab (3 rue de la Cholerie, Orléans)
          </p>
        </div>
      </section>

    </main>
  );
}
