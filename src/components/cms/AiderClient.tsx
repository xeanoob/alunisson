"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function AiderClient(props: {
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

      {/* Header */}
      <section className="pt-28 pb-10 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-8xl mb-6">
              {content.hero?.title}
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {content.hero?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Illustration */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[1000px] mx-auto h-[300px] md:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-2xl offset-hand-1 border-[10px] border-white">
          <Image 
            src={content.hero?.image || "/uploads/tissus_table.jpg"} 
            alt="Illustration Alunisson" 
            fill 
            className="object-cover" 
          />
        </div>
      </section>

      {/* ═══ CARTES D'ACTION ═══ */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[700px] mx-auto text-center space-y-10">
          {content.sections?.map((section, index) => {
            if (section?.__typename === "PageSectionsGridSection") {
              return (
                <div key={index} className="space-y-10">
                   {section.items?.map((item, i) => (
                      <div key={i} className="p-8 md:p-12 border border-border rounded-3xl bg-white flex flex-col items-center gap-6 shadow-xl stitched offset-hand-1">
                        {item?.image && (
                          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-2">
                            <Image
                              src={item.image}
                              alt={item.title || ""}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 700px"
                            />
                          </div>
                        )}
                        <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center text-accent offset-hand-2">
                          <Scissors size={32} />
                        </div>
                        <div className="text-center">
                          <h3 className="font-serif text-3xl md:text-4xl mb-4 italic">{item?.title}</h3>
                          <p className="text-muted leading-relaxed max-w-md mx-auto italic mb-6">
                            &quot;{item?.text}&quot;
                          </p>
                          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">
                            {item?.label}
                          </p>
                        </div>
                      </div>
                   ))}
                </div>
              )
            }

            if (section?.__typename === "PageSectionsWorkshopBlock") {
               return (
                 <section key={index} className="bg-accent text-white py-20 px-6 md:px-10 rounded-[3rem] -mx-6 md:-mx-10">
                    <div className="max-w-2xl mx-auto text-center">
                      <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight">
                        {section.title}
                      </h2>
                      <a 
                        href={section.buttonLink || "mailto:contact@alunisson.fr"} 
                        className="inline-block bg-white text-accent font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform"
                      >
                        {section.buttonText}
                      </a>
                      <p className="mt-8 text-white/70 text-sm">
                        {section.description}
                      </p>
                    </div>
                  </section>
               )
            }
            return null;
          })}
        </div>
      </section>
    </main>
  );
}
