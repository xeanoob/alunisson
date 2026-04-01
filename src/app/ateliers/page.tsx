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
            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              Nos ateliers
            </h1>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              Deux formats, un même lieu : l'Info Lab Orléans.
              Un pour créer, un pour apprendre. À toi de choisir !
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ ATELIER ALUNISSON ═══ */}
      <section className="px-6 md:px-10 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2"
          >
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src="/equipe_sac.jpg"
                alt="Participants avec leurs sacs wax cousus main"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs bg-accent text-white px-3 py-1 rounded-full font-semibold">
                  20 € / personne
                </span>
                <span className="text-xs text-accent font-semibold">
                  Réservation obligatoire
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Atelier Alunisson</h2>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
                L'atelier créatif. En une séance, tu réalises un objet de A à Z :
                sac, trousse, gant de cuisine, doudou, pochette…
                On t'accompagne à chaque étape, et tu repars avec ta création !
              </p>

              <div className="flex flex-col gap-3 mb-8 bg-accent-soft rounded-xl p-5">
                {[
                  "5 personnes maximum",
                  "Tu repars avec ta création",
                  "Tous niveaux (on adapte)",
                  "Info Lab Orléans",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/rejoindre"
                className="self-start bg-accent text-white font-semibold text-sm
                           px-8 py-3 rounded-full hover:bg-foreground transition-colors duration-300 shadow-sm"
              >
                Réserver une place
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ATELIER INITIATION ═══ */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-8 md:p-12 md:order-1 order-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs bg-foreground text-background px-3 py-1 rounded-full font-semibold">
                  Gratuit
                </span>
                <span className="text-xs text-muted font-semibold">
                  Ouvert à tous
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Initiation</h2>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
                Pas de création ici — on apprend les fondamentaux.
                Utiliser la machine, enfiler le fil, préparer une canette,
                coudre droit. Les bases, tranquillement, sans pression.
              </p>

              <div className="flex flex-col gap-3 mb-8 bg-accent-soft rounded-xl p-5">
                {[
                  "Entièrement gratuit",
                  "Objectif : être autonome sur machine",
                  "Débutant complet bienvenu",
                  "Info Lab Orléans",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/rejoindre"
                className="self-start text-sm font-semibold text-accent hover:underline underline-offset-4"
              >
                S'inscrire à une initiation →
              </Link>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden md:order-2 order-1">
              <Image
                src="/enfant_groupe.jpg"
                alt="Atelier d'initiation couture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
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
              <a href="https://www.instagram.com/infolaborleans/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @infolaborleans
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
