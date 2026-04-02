"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function PhilosophieClient(props: {
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

  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
          
          {/* Portrait flottant */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white hidden lg:block offset-hand-1">
            <Image 
              src={content.hero?.image || "/enfant_groupe.jpg"} 
              alt={content.hero?.title || "Philosophie Alunisson"} 
              fill 
              className="object-cover" 
            />
          </div>

          <div>
            <h1 className="font-serif text-5xl md:text-8xl mb-10 leading-[1.05]">
              {content.hero?.title} <span className="italic text-accent">{content.hero?.italicTitle}</span>
            </h1>
            <div className="flex flex-col gap-8 text-muted leading-relaxed text-lg max-w-2xl whitespace-pre-line">
              {content.hero?.description}
            </div>
          </div>
        </div>
      </section>

      {/* Sections dynamiques */}
      {content.sections?.map((section, index) => {
        if (section?.__typename === "PageSectionsGridSection") {
          return (
            <section key={index} className="w-full py-16 px-6 md:px-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl mb-16 text-center italic">{section.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.items?.map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`bg-white rounded-2xl p-8 stitched shadow-xl text-center offset-hand-${(i % 3) + 1}`}
                    >
                      <span className="text-xs font-bold text-accent tracking-widest block mb-4 italic opacity-60">
                        {v?.label}
                      </span>
                      <h3 className="font-serif text-xl mb-3 italic">{v?.title}</h3>
                      <p className="text-muted text-xs leading-relaxed italic">{v?.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section?.__typename === "PageSectionsPolaroidBlock") {
          return (
            <section key={index} className="w-full px-6 md:px-10 pb-24 overflow-hidden">
              <div className="max-w-[1200px] mx-auto relative">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative w-full aspect-[21/9] overflow-hidden rounded-lg shadow-2xl border-[12px] border-white offset-hand-1"
                >
                  <Image 
                    src={section.image || "/equipe_sac.jpg"} 
                    alt={section.caption || "Equipe Alunisson"} 
                    fill 
                    className="object-cover" 
                    sizes="100vw" 
                  />
                </motion.div>
                <div className="absolute -bottom-6 right-10 bg-eco-green text-white px-6 py-2 rounded-sm font-serif italic text-sm shadow-lg offset-hand-2 z-20">
                  {section.caption}
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
