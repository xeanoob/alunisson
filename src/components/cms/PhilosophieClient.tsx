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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-8xl mb-10 leading-[1.05]">
            {content.hero?.title} <span className="italic text-accent">{content.hero?.italicTitle}</span>
          </h1>
          <div className="flex flex-col gap-8 text-muted leading-relaxed text-lg whitespace-pre-line">
            {content.hero?.description}
          </div>
        </div>
      </section>

      {/* Sections dynamiques */}
      {content.sections?.map((section, index) => {
        if (section?.__typename === "PageSectionsGridSection") {
          return (
            <section key={index} className="w-full py-16 px-6 md:px-10">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl mb-16 text-center italic">{section.title}</h2>

                <div className="flex flex-wrap justify-center gap-8">
                  {section.items?.map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`group bg-white rounded-2xl p-8 stitched shadow-xl text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px]`}
                    >
                      <span className="text-xs font-bold text-accent tracking-widest block mb-4 italic opacity-60">
                        {v?.label}
                      </span>
                      {v?.image && (
                        <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden shadow-inner">
                          <Image 
                            src={v.image} 
                            alt={v.title || ""} 
                            fill 
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
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
                    src={section.image || "/uploads/equipe_sac.jpg"} 
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
