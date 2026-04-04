"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { InstagramFeed, INSTAGRAM_WIDGET_ID } from "@/components/ui/InstagramFeed";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function HomeClient(props: {
  data: PageQuery;
  variables: { relativePath: string };
  query: string;
}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page;
  const bandeau = (content as Record<string, unknown>).bandeau as { image?: string; title?: string; subtitle?: string } | undefined;
  const location = (content as Record<string, unknown>).location as { image?: string; title?: string; text?: string } | undefined;

  return (
    <main className="w-full">
      <Navbar />

      {/* ═══ HERO PLEIN ÉCRAN ═══ */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Immersive */}
        <div className="absolute inset-0">
          <Image
            src={content.hero?.image || "/equipe_sac.jpg"}
            alt="L'équipe Alunisson — Partage et Création"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          {/* Overlay dégradé doux pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        {/* Contenu Centré */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-serif text-white mb-2 tracking-wide drop-shadow-md">
                {content.hero?.description || "Alunisson"}
              </span>
              <div className="relative inline-block text-center">
                <h1 className="font-serif text-white text-5xl sm:text-7xl md:text-[7rem] leading-[1.1] mb-8 drop-shadow-2xl">
                  {content.hero?.title} <br />
                  <span className="italic text-eco-sand">{content.hero?.italicTitle}</span>
                </h1>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/rejoindre"
                className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-full font-bold
                           hover:bg-white hover:text-accent transition-all duration-500 shadow-2xl scale-100 hover:scale-105"
              >
                {content.hero?.buttonPrimary || "Réserver un atelier"}
              </Link>
              <Link
                href="/ateliers"
                className="w-full sm:w-auto text-white/90 font-semibold border-b-0 sm:border-b border-white/30 
                           hover:border-white transition-colors py-1 text-sm tracking-widest uppercase"
              >
                {content.hero?.buttonSecondary || "Découvrir l'association"}
              </Link>
            </div>
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
              {content.welcome?.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ LES DEUX ATELIERS ═══ */}
      <section className="w-full px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-serif italic text-lg mb-2 block">Dès 8 ans, pour tous.</span>
              <h2 className="font-serif text-4xl md:text-6xl">
                Viens coudre avec nous.
              </h2>
            </div>
            <Link 
              href="/ateliers" 
              className="text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
            >
              Voir tous les formats →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {(() => {
              const gridSection = content.sections?.find((s) => s?.__typename === "PageSectionsGridSection");
              type GridType = { items?: Array<{ title?: string | null, text?: string | null, label?: string | null, image?: string | null } | null> | null };
              const grid = gridSection as unknown as GridType;
              const w1 = grid?.items?.[0] || {};
              const w2 = grid?.items?.[1] || {};

              return (
                <>
                  {/* Atelier Créatif & Circulaire */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-8 shadow-2xl tape offset-hand-1">
                      <Image
                        src={w1.image || "/creations_wax.png"}
                        alt="Création Éco-responsable Alunisson"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-sm text-xs font-bold shadow-lg -rotate-2">
                        {w1.title || "Atelier Upcycling — 20€"}
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl stitched shadow-xl -mt-20 relative z-10 mx-6">
                      <h3 className="font-serif text-2xl mb-3">{w1.label || "Nos Ateliers"}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-6 italic">
                        "{w1.text || "Réalise ton tote bag, tablier ou trousse à partir de matières recyclées, pour l'environnement."}"
                      </p>
                      <Link
                        href="/rejoindre"
                        className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-md"
                      >
                        Je réserve ma place
                      </Link>
                    </div>
                  </motion.div>

                  {/* Atelier Initiation */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group relative md:mt-24"
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-8 shadow-2xl tape offset-hand-2">
                      <Image
                        src={w2.image || "/enfant_groupe.jpg"}
                        alt="Initiation couture"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-6 right-6 bg-eco-green text-white px-4 py-2 rounded-sm text-xs font-bold shadow-lg rotate-3">
                        {w2.title || "Initiation — Gratuit"}
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl stitched shadow-xl -mt-20 relative z-10 mx-6">
                      <h3 className="font-serif text-2xl mb-3">{w2.label || "Découverte Sociale"}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-6 italic">
                        "{w2.text || "Apprendre ensemble. Idéal pour s'initier aux machines dans un espace de bienveillance."}"
                      </p>
                      <Link
                        href="/initiations"
                        className="inline-block border-2 border-foreground text-foreground px-8 py-3 rounded-full font-bold hover:bg-foreground hover:text-white transition-all shadow-md"
                      >
                        Découvrir le format
                      </Link>
                    </div>
                  </motion.div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO TISSUS (bandeau vivant) ═══ */}
      <section className="w-full px-6 md:px-10 py-6">
        <div className="max-w-[1400px] mx-auto relative rounded-2xl overflow-hidden h-64 md:h-80">
          <Image
            src={bandeau?.image || "/tissus_table.jpg"}
            alt="Bandeau Alunisson"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="font-serif text-white text-2xl md:text-4xl text-center px-6 leading-snug">
              {bandeau?.title || "On fournit tout le matériel."}<br />
              <span className="text-white/70 text-lg md:text-2xl">{bandeau?.subtitle || "Viens comme tu es."}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ OÙ ═══ */}
      <section className="w-full py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto bg-accent-soft rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="max-w-xl z-10">
            <h3 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              On se retrouve à <br />
              <span className="italic text-accent">l'Info Lab Orléans.</span>
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Un espace partagé en plein centre-ville pour apprendre et faire de la couture ensemble. 
              On y partage les machines, et on revalorise nos chutes de tissus !
              <br /><br />
              <span className="text-foreground font-bold border-b border-accent pb-1 block mb-2">Partenariats Sociaux :</span>
              <span className="text-sm">Interventions avec l'ODAS, les centres aérés et le CIDFF pour créer du lien.</span>
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.instagram.com/alunisson.orleans/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white font-bold text-sm px-10 py-5 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Suivre nos actus
              </a>
              <a 
                href="https://www.google.com/maps/dir//3+rue+de+la+Cholerie+45000+Orléans" 
                target="_blank" 
                className="text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
              >
                Itinéraire Maps →
              </a>
            </div>
          </div>

          {/* Photo immersive du lieu/matériel */}
          <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl offset-hand-1 border-[10px] border-white z-10">
            <Image 
              src={location?.image || "/tissus_table.jpg"} 
              alt="Lieu Alunisson" 
              fill 
              className="object-cover" 
            />
          </div>
          
          {/* Décoration asymétrique */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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
    </main>
  );
}
