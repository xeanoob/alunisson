"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function PhilosophiePage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
          
          {/* Portrait flottant */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white hidden lg:block offset-hand-1">
            <Image src="/enfant_groupe.jpg" alt="L'enthousiasme du faire soi-même" fill className="object-cover" />
          </div>

          <div>
            <h1 className="font-serif text-5xl md:text-8xl mb-10 leading-[1.05]">
              On a monté Alunisson <span className="italic text-accent">ensemble.</span>
            </h1>
            <div className="flex flex-col gap-8 text-muted leading-relaxed text-lg max-w-2xl">
              <p>
                Alunisson, c'est une association loi 1901 créée à Orléans par un
                groupe de passionnés de couture et de créativité textile. Le constat
                était simple : les machines à coudre coûtent cher, les ateliers
                individuels aussi, et coudre seul·e chez soi c'est pas terrible.
              </p>
              <p>
                Alors on a trouvé un local (merci l'Info Lab !), on a acheté des
                machines Brother, on a ramené nos stocks de tissu wax, de coton,
                de jersey — et on a ouvert les portes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs — Style Scrapbook */}
      <section className="w-full py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-16 text-center italic">Ce en quoi on croit</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "01",
                titre: "L'accès pour tous",
                texte: "Que tu aies 8 ou 70 ans, que tu n'aies jamais touché une aiguille ou que tu fasses tes propres patrons — tu es bienvenu·e.",
                rot: "offset-hand-1"
              },
              {
                emoji: "02",
                titre: "Le partage avant tout",
                texte: "On partage les machines, les tissus, les techniques. La couture se transmet mieux de main en main que dans un tuto YouTube.",
                rot: "offset-hand-2"
              },
              {
                emoji: "03",
                titre: "Le faire soi-même",
                texte: "Dans un monde de fast fashion, savoir coudre c'est un super-pouvoir. Savoir faire un vêtement, c'est une liberté.",
                rot: "offset-hand-3"
              },
            ].map((v) => (
              <motion.div
                key={v.titre}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 stitched shadow-xl text-center ${v.rot}`}
              >
                <span className="text-xs font-bold text-accent tracking-widest block mb-4 italic opacity-60">PROJET {v.emoji}</span>
                <h3 className="font-serif text-xl mb-3 italic">{v.titre}</h3>
                <p className="text-muted text-xs leading-relaxed italic">{v.texte}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo équipe — Style Polaroid / Collage */}
      <section className="w-full px-6 md:px-10 pb-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[21/9] overflow-hidden rounded-lg shadow-2xl border-[12px] border-white offset-hand-1"
          >
            <Image src="/equipe_sac.jpg" alt="L'équipe Alunisson" fill className="object-cover" sizes="100vw" />
          </motion.div>
          <div className="absolute -bottom-6 right-10 bg-eco-green text-white px-6 py-2 rounded-sm font-serif italic text-sm shadow-lg offset-hand-2 z-20">
            L'équipe lors d'un atelier Upcycling
          </div>
        </div>
      </section>
    </main>
  );
}
