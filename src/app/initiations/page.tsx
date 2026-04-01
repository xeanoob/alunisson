"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function InitiationsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <span className="text-xs font-bold text-wax-teal uppercase tracking-widest mb-4 block">Gratuit / Débutant</span>
              <h1 className="font-serif text-4xl md:text-7xl mb-6">
                Nos initiations
              </h1>
              <span className="absolute -top-10 -right-16 font-hand text-wax-orange rotate-12 text-2xl hidden md:block">
                C'est facile, promis !
              </span>
            </div>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              Tu n'as jamais touché une machine à coudre ? Pas de panique. 
              On t'apprend les bases en douceur pour te donner le super-pouvoir du faire soi-même.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ LE CONTENU ═══ */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden stitched grid grid-cols-1 md:grid-cols-2 shadow-xl offset-hand-1">
            <div className="flex flex-col justify-center p-8 md:p-12 md:order-1 order-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs bg-wax-teal text-white px-4 py-1.5 rounded-sm font-bold rotate-1 shadow-sm">
                  100% Gratuit
                </span>
                <span className="text-xs text-wax-orange font-hand text-lg -rotate-2 translate-x-2">
                  Zéro pression.
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl mb-4 italic">Apprendre les bases</h2>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
                Pas de création ici — on se concentre sur la technique pure. 
                Apprivoiser la machine (Brother), enfiler le fil de dessus et de dessous, 
                préparer une canette, et réussir tes premières coutures droites.
              </p>

              <div className="flex flex-col gap-3 mb-10 bg-accent-soft rounded-2xl p-6 border border-accent/10 offset-hand-3">
                {[
                  "Matériel entièrement fourni",
                  "Machines à coudre sur place",
                  "Durée : environ 1h30",
                  "Accessible dès 8 ans",
                  "Lieu : Info Lab Orléans",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/rejoindre"
                className="w-full text-center md:self-start bg-wax-yellow text-foreground font-bold text-sm
                           px-10 py-5 rounded-full hover:bg-foreground hover:text-white transition-all duration-300 shadow-xl offset-hand-1"
              >
                Réserver mon initiation
              </Link>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden md:order-2 m-4 rounded-xl shadow-lg border-2 border-white">
              <Image
                src="/machine_zoom.png"
                alt="Gros plan sur une machine à coudre — Alunisson"
                fill
                className="object-cover scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section pourquoi nous rejoindre */}
      <section className="w-full py-20 px-6 md:px-10 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-8">Pourquoi l'initiation ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="font-serif text-xl mb-3">Sortir de la Fast-Fashion</h3>
              <p className="text-sm text-muted">Savoir faire un ourlet ou recoudre un bouton, c'est le début de la résistance contre le gaspillage.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3">Prendre confiance</h3>
              <p className="text-sm text-muted">La machine à coudre fait un peu peur au début, mais une fois domptée, tout devient possible.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
