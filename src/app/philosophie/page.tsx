"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

export default function PhilosophiePage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-10 max-w-4xl leading-[1.05]">
              On a monté Alunisson parce qu'on en avait marre de coudre tout seuls.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col gap-5 text-muted leading-relaxed">
              <p>
                Alunisson, c'est une association loi 1901 créée à Orléans par un
                groupe de passionnés de couture et de créativité textile. Le constat
                était simple : les machines à coudre coûtent cher, les ateliers
                individuels aussi, et coudre seul·e chez soi c'est pas terrible.
              </p>
              <p>
                Alors on a trouvé un local (merci l'Info Lab !), on a acheté des
                machines Brother, on a ramené nos stocks de tissu wax, de coton,
                de jersey — et on a ouvert les portes. Depuis, chaque semaine,
                des gens de tous âges et de tous horizons viennent coudre ensemble.
              </p>
            </div>
            <div className="flex flex-col gap-5 text-muted leading-relaxed">
              <p>
                Ce qu'on fait, c'est pas un cours magistral. C'est un espace où tu
                peux venir avec ton projet (ou sans), poser des questions, essayer,
                rater, recommencer. Y a toujours quelqu'un à côté qui a déjà galéré
                sur le même truc et qui peut t'aider.
              </p>
              <p>
                On organise aussi des ateliers pour les enfants du quartier, des
                journées « Sac Wax » où tu repars avec un tote bag cousu par toi,
                et des moments de partage autour du tissu, du fil et du café.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo équipe */}
      <section className="w-full px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/equipe_sac.jpg" alt="L'équipe Alunisson" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="text-xs text-muted mt-3 text-center">
            Une partie de l'équipe, lors d'un atelier Sac Wax
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="w-full py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">
            Ce en quoi on croit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "01",
                titre: "L'accès pour tous",
                texte: "Que tu aies 8 ou 70 ans, que tu n'aies jamais touché une aiguille ou que tu fasses tes propres patrons — tu es bienvenu·e."
              },
              {
                emoji: "02",
                titre: "Le partage avant tout",
                texte: "On partage les machines, les tissus, les techniques. La couture se transmet mieux de main en main que dans un tuto YouTube."
              },
              {
                emoji: "03",
                titre: "Le faire soi-même",
                texte: "Dans un monde de fast fashion, savoir coudre c'est un super-pouvoir. Savoir faire un vêtement, c'est une liberté."
              },
            ].map((v) => (
              <motion.div
                key={v.titre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-border text-center"
              >
                <span className="text-sm font-semibold text-accent tracking-widest block mb-4">{v.emoji}</span>
                <h3 className="font-serif text-xl mb-3">{v.titre}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.texte}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
