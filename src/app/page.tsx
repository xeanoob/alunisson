"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { InstagramFeed, INSTAGRAM_WIDGET_ID } from "@/components/ui/InstagramFeed";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />

      {/* ═══ OUVERTURE — Photo + titre chaleureux ═══ */}
      <section className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
        <Image
          src="/equipe_sac.jpg"
          alt="L'équipe Alunisson avec leurs créations en tissu wax"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1400px] mx-auto"
          >
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95] mb-5">
              On coud ensemble.
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-md leading-relaxed">
              Association de couture ouverte à tous, à Orléans.
              Ateliers créatifs, initiations gratuites et bonne humeur
              — le tout à l'Info Lab !
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ BIENVENUE ═══ */}
      <section className="w-full py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.4] text-foreground">
              Alunisson est née d'une idée simple : la couture, ça s'apprend
              mieux <em className="text-accent not-italic font-semibold">à plusieurs</em>.
              On partage les machines, les tissus, les galères et les réussites.
              Débutant ou confirmé, t'as ta place ici.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ LES DEUX ATELIERS ═══ */}
      <section className="w-full px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">Nos ateliers</h2>
            <Link href="/ateliers" className="text-sm text-accent hover:underline underline-offset-4 font-medium">
              Tout savoir →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Atelier Alunisson */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/equipe_sac.jpg"
                  alt="Participants fiers avec leurs sacs"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  20 € / personne
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl mb-2">Atelier Alunisson</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Tu réalises une création de A à Z : sac, trousse, doudou, gant…
                  5 places max, réservation obligatoire.
                  Tu repars avec ton objet fini !
                </p>
                <Link href="/rejoindre" className="inline-block w-full text-center md:w-auto text-sm font-semibold bg-accent-soft text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all">
                  Réserver ma place
                </Link>
              </div>
            </motion.div>

            {/* Atelier Initiation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/enfant_groupe.jpg"
                  alt="Atelier d'initiation couture"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Gratuit
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl mb-2">Initiation</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Pas de création ici — on apprend les bases :
                  utiliser la machine, enfiler le fil, préparer une canette,
                  coudre droit. Tranquille, sans pression.
                </p>
                <Link href="/rejoindre" className="inline-block w-full text-center md:w-auto text-sm font-semibold bg-foreground/5 text-foreground px-6 py-3 rounded-full hover:bg-foreground hover:text-white transition-all">
                  S'inscrire gratuitement
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PHOTO TISSUS (bandeau vivant) ═══ */}
      <section className="w-full px-6 md:px-10 py-6">
        <div className="max-w-[1400px] mx-auto relative rounded-2xl overflow-hidden h-64 md:h-80">
          <Image
            src="/tissus_table.jpg"
            alt="Table de coupe couverte de tissus wax colorés"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="font-serif text-white text-2xl md:text-4xl text-center px-6 leading-snug">
              On fournit tout le matériel.<br />
              <span className="text-white/70 text-lg md:text-2xl">Viens comme tu es.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ OÙ ═══ */}
      <section className="w-full py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto bg-accent-soft rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-2">
              On est à l'Info Lab Orléans
            </h3>
            <p className="text-sm text-muted max-w-md leading-relaxed mb-4">
              Un espace partagé où la tech rencontre l'artisanat.<br />
              <span className="text-foreground font-semibold">3 rue de la Cholerie, 45000 Orléans</span>
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.instagram.com/alunisson.orleans/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-accent font-semibold text-sm
                           px-6 py-3 rounded-full border border-accent/20 hover:bg-accent hover:text-white
                           transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                @alunisson.orleans
              </a>
              <a 
                href="https://www.google.com/maps/dir//3+rue+de+la+Cholerie+45000+Orléans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-muted hover:text-accent transition-colors underline underline-offset-4"
              >
                Voir sur Maps →
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ CTA CHALEUREUX ═══ */}
      <section className="w-full py-16 md:py-24 px-6 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
            Envie d'essayer ?
          </h2>
          <p className="text-muted text-base mb-10 leading-relaxed">
            L'atelier initiation est <strong className="text-foreground">gratuit</strong>.
            Tu n'as besoin de rien amener.<br />
            Juste de la curiosité.
          </p>
          <Link
            href="/rejoindre"
            className="inline-block bg-accent text-white font-semibold text-sm uppercase tracking-wider
                       px-10 py-4 rounded-full hover:bg-foreground hover:scale-105 transition-all duration-300 shadow-md"
          >
            Je m'inscris
          </Link>
        </div>
      </section>

      {/* ═══ INSTAGRAM FEED ═══ */}
      {INSTAGRAM_WIDGET_ID !== "PLACEHOLDER" && (
        <section className="w-full py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10 gap-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-2">Dans l'atelier</h2>
                <p className="text-muted text-sm">Aperçu de ce qu'il se passe sur nos machines.</p>
              </div>
              <a 
                href="https://www.instagram.com/alunisson.orleans/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline underline-offset-4"
              >
                Voir @alunisson.orleans →
              </a>
            </div>

            <InstagramFeed />
          </div>
        </section>
      )}



      {/* ═══ NEWSLETTER ═══ */}
      <section className="w-full py-20 px-6 md:px-10 bg-accent-soft rounded-t-[2rem] mt-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4 text-foreground">
            On reste en contact ?
          </h2>
          <p className="text-muted text-sm md:text-base mb-8 leading-relaxed">
            On organise parfois des gros ateliers le week-end. Laisse ton email pour être prévenu en premier (les places partent très vite).
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ton.email@exemple.com" 
              required
              className="px-6 py-4 rounded-full border border-white bg-white focus:outline-none focus:border-accent w-full text-sm shadow-sm"
            />
            <button 
              type="submit"
              className="bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-foreground transition-colors shadow-sm"
            >
              M'inscrire
            </button>
          </form>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="w-full border-t border-border py-10 px-6 md:px-10 bg-white/50">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm">Alunisson</span>
            <span className="text-muted text-xs">·</span>
            <span className="text-muted text-xs">Info Lab Orléans</span>
            <span className="text-muted text-xs">·</span>

          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/alunisson.orleans/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent transition-colors">
              Instagram
            </a>
            <Link href="/rejoindre" className="text-xs text-muted hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
