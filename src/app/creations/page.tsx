"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";

const creations = [
  { src: "/equipe_sac.jpg", alt: "Tote bags wax cousus main", aspect: "aspect-[4/5]" },
  { src: "/tissus_table.jpg", alt: "Sélection de tissus colorés", aspect: "aspect-square" },
  { src: "/enfant_groupe.jpg", alt: "Les p'tites mains en action", aspect: "aspect-[3/4]" },
  { src: "/equipe_sac.jpg", alt: "Fierté post-atelier", aspect: "aspect-[3/4]" },
  { src: "/tissus_table.jpg", alt: "Table de coupe multicolore", aspect: "aspect-[4/5]" },
  { src: "/enfant_groupe.jpg", alt: "Concentration et créativité", aspect: "aspect-square" },
];

export default function CreationsPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-10 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              Créations
            </h1>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              Tout ce qui sort de l'atelier — fait main par nos membres.
              Sacs, trousses, doudous, vêtements… et beaucoup de fierté.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-32">
        <div className="max-w-[1400px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {creations.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="mb-4 break-inside-avoid group"
            >
              <div className={`relative ${c.aspect} overflow-hidden rounded-xl bg-border`}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end p-4 rounded-xl">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {c.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
