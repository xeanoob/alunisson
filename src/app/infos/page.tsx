"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { ChevronDown, MapPin, Info, Users, Clock } from "lucide-react";

const faq = [
  {
    q: "Dois-je apporter ma propre machine ?",
    a: "Non ! On a des machines Brother et Singer robustes sur place. Mais si tu préfères dompter la tienne, tu peux tout à fait l'apporter."
  },
  {
    q: "Quels tissus utilisez-vous ?",
    a: "On adore le Wax pour ses couleurs, mais on travaille tout : coton, jersey, lin. On a souvent du stock récupéré grâce à des dons."
  },
  {
    q: "À quel âge peut-on commencer ?",
    a: "Dès 8 ans, accompagné d'un adulte si besoin. Pour les initiations, c'est idéal pour découvrir la coordination œil-main."
  },
  {
    q: "Est-ce que je peux venir avec mon projet perso ?",
    a: "C'est tout le but de l'association ! Tu viens avec ton envie, tes questions, et on s'entraide pour réussir."
  }
];

export default function InfosPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-serif text-5xl md:text-8xl mb-6">
              En savoir plus.
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              Tout ce que tu as toujours voulu savoir sur Alunisson et notre 
              fonctionnement à l'Info Lab Orléans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Illustration */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[800px] mx-auto h-[300px] md:h-80 relative rounded-3xl overflow-hidden shadow-xl border-8 border-white offset-hand-2">
          <Image 
            src="/creations_wax.png" 
            alt="Détails de nos créations" 
            fill 
            className="object-cover" 
          />
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl mb-12 text-center italic">Questions fréquentes</h2>
          {faq.map((item, i) => (
            <details key={i} className="group bg-white stitched rounded-2xl p-6 transition-all duration-300 open:shadow-xl offset-hand-3">
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-xl pr-6 transition-colors group-open:text-accent">
                {item.q}
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-muted text-sm leading-relaxed border-t border-border pt-4 italic">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══ INFOS PRATIQUES (Grid) ═══ */}
      <section className="bg-accent-soft/50 py-20 px-6 md:px-10 border-y border-accent/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4 offset-hand-1">
            <div className="text-accent bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"><MapPin size={24} /></div>
            <h3 className="font-serif text-2xl font-semibold italic">Le Lieu</h3>
            <p className="text-sm text-muted">Info Lab Orléans (Info Jeunes), 3 rue de la Cholerie. En plein centre ville historique.</p>
          </div>
          <div className="flex flex-col gap-4 offset-hand-2">
            <div className="text-accent bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"><Clock size={24} /></div>
            <h3 className="font-serif text-2xl font-semibold italic">Horaires</h3>
            <p className="text-sm text-muted">Nous sommes là chaque semaine. Les créneaux sont annoncés sur Instagram et via notre newsletter.</p>
          </div>
          <div className="flex flex-col gap-4 offset-hand-3">
            <div className="text-accent bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"><Users size={24} /></div>
            <h3 className="font-serif text-2xl font-semibold italic">L'Esprit</h3>
            <p className="text-sm text-muted">Collectif, ouvert, sans pression. Ici, on ne juge pas les coutures qui ne sont pas droites du premier coup !</p>
          </div>
          <div className="flex flex-col gap-4 offset-hand-1">
            <div className="text-accent bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"><Info size={24} /></div>
            <h3 className="font-serif text-2xl font-semibold italic">Partenariats</h3>
            <p className="text-sm text-muted">Nous collaborons avec l'Info Lab Orléans pour mêler tech et artisanat dans un espace hybride.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
