"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function AteliersPage() {
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
              <h1 className="font-serif text-4xl md:text-7xl mb-6">
                Nos ateliers
              </h1>
              <span className="absolute -top-10 -right-16 font-hand text-wax-orange rotate-12 text-2xl hidden md:block">
                C'est facile, promis !
              </span>
            </div>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              Deux formats, un même lieu : l'Info Lab Orléans.
              Un pour créer, un pour apprendre. À toi de choisir !
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ ATELIER ALUNISSON ═══ */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden stitched grid grid-cols-1 md:grid-cols-2 shadow-xl offset-hand-1"
          >
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden md:order-2 m-4 rounded-xl shadow-lg border-2 border-white">
              <Image
                src="/creations_wax.png"
                alt="Nos créations en Wax — Alunisson"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs bg-wax-yellow text-foreground px-4 py-1.5 rounded-sm font-bold -rotate-1 shadow-sm">
                  20 € / personne
                </span>
                <span className="text-xs text-wax-teal font-hand text-lg rotate-2 translate-x-2">
                  Tout inclus !
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl mb-4 italic">Atelier Alunisson</h2>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
                L'atelier créatif. En une séance, tu réalises un objet de A à Z :
                sac, trousse, gant de cuisine, doudou, pochette…
                On t'accompagne à chaque étape, et tu repars avec ta création !
              </p>

              <div className="flex flex-col gap-3 mb-8 bg-accent-soft rounded-2xl p-6 border border-accent/10 offset-hand-1">
                {[
                  "5 personnes maximum",
                  "Tu repars avec ta création",
                  "Tous niveaux (on adapte)",
                  "Info Lab Orléans",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/rejoindre"
                className="w-full text-center md:self-start bg-accent text-white font-bold text-sm
                           px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-md offset-hand-3"
              >
                Réserver une place
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRANSITION VERS INITIATIONS ═══ */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-8 md:p-12 bg-wax-teal text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            {/* Décoration bobine en fond */}
            <div className="absolute top-0 right-0 opacity-10 font-serif text-[10rem] rotate-12 -translate-y-10 translate-x-10"></div>
            
            <div className="max-w-xl relative z-10">
              <h2 className="font-serif text-3xl mb-4 italic">Tu débutes complètement ?</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                On propose aussi des initiations gratuites pour apprendre les bases de la machine à coudre
                sans pression. C'est l'étape idéale avant de se lancer dans un atelier créatif.
              </p>
            </div>
            <Link href="/initiations" className="bg-wax-yellow text-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform whitespace-nowrap relative z-10 offset-hand-2">
              Découvrir les initiations gratuites
            </Link>
          </div>
        </div>
      </section>

      {/* Bandeau tissu */}
      <section className="w-full px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto relative rounded-2xl overflow-hidden h-64 md:h-72">
          <Image src="/tissus_table.jpg" alt="Tissus colorés" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="font-serif text-white text-2xl md:text-3xl text-center px-6">
              Tout le matériel est fourni.<br />
              <span className="text-lg text-white/70">Machines, fil, ciseaux, tissus.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="w-full bg-foreground text-background py-14 px-6 md:px-10 rounded-t-[2rem]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl mb-2">Tarifs</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Atelier Alunisson : <strong className="text-background">20 €</strong><br />
              Initiation : <strong className="text-accent">Gratuit</strong>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Lieu</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Info Lab Orléans<br />
              <a href="https://www.instagram.com/alunisson.orleans/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @alunisson.orleans
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">À amener</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Rien du tout !<br />On fournit machines, fil, ciseaux et tissus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
