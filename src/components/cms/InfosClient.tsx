"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { ChevronDown, MapPin, Info, Users, Clock } from "lucide-react";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function InfosClient(props: {
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
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-serif text-5xl md:text-8xl mb-6">
              {content.hero?.title}
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed whitespace-pre-line">
              {content.hero?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Illustration */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[800px] mx-auto h-[300px] md:h-80 relative rounded-3xl overflow-hidden shadow-xl border-8 border-white offset-hand-2">
          <Image 
            src={content.hero?.image || "/creations_wax.png"} 
            alt="Illustration Alunisson" 
            fill 
            className="object-cover" 
          />
        </div>
      </section>

      {/* Sections dynamiques */}
      {content.sections?.map((section, index) => {
        if (section?.__typename === "PageSectionsGridSection") {
          // Si c'est la section FAQ (pas de labels spécifiques)
          if (!section.items?.[0]?.label) {
            return (
              <section key={index} className="px-6 md:px-10 pb-20">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="font-serif text-3xl mb-12 text-center italic">{section.title}</h2>
                  {section.items?.map((item, i) => (
                    <details key={i} className="group bg-white stitched rounded-2xl p-6 transition-all duration-300 open:shadow-xl offset-hand-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-xl pr-6 transition-colors group-open:text-accent">
                        {item?.title}
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-muted text-sm leading-relaxed border-t border-border pt-4 italic">
                        {item?.text}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            );
          }
          
          // Si c'est la section Infos Pratiques avec icônes
          return (
            <section key={index} className="bg-accent-soft/50 py-20 px-6 md:px-10 border-y border-accent/10">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {section.items?.map((item, i) => (
                  <div key={i} className={`flex flex-col gap-4 offset-hand-${(i % 3) + 1}`}>
                    <div className="text-accent bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                      {item?.label === "LIEU" && <MapPin size={24} />}
                      {item?.label === "HORAIRES" && <Clock size={24} />}
                      {item?.label === "ESPRIT" && <Users size={24} />}
                      {item?.label === "PARTENARIAT" && <Info size={24} />}
                      {!item?.label && <Info size={24} />}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold italic">{item?.title}</h3>
                    <p className="text-sm text-muted">{item?.text}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
