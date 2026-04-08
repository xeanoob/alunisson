"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function AteliersClient(props: {
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
      <section className="pt-28 pb-12 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <h1 className="font-serif text-4xl md:text-7xl mb-6">
                {content.hero?.title}
              </h1>
              <span className="absolute top-2 -right-10 md:-right-40 font-hand text-eco-clay rotate-[8deg] text-2xl hidden md:block">
                {content.hero?.italicTitle}
              </span>
            </div>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              {content.hero?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections dynamiques */}
      {content.sections?.map((section, index) => {
        if (section?.__typename === "PageSectionsWorkshopBlock") {
          return (
            <section key={index} className="px-6 md:px-10 pb-16">
              <div className="max-w-[1400px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl overflow-hidden stitched grid grid-cols-1 md:grid-cols-2 shadow-xl offset-hand-1"
                >
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden md:order-2 m-4 rounded-xl shadow-lg border-2 border-white">
                    <Image
                      src={section.image || "/creations_wax.png"}
                      alt={section.title || "Image Alunisson"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xs bg-eco-sand text-foreground px-4 py-1.5 rounded-sm font-bold -rotate-1 shadow-sm">
                        {section.priceTag}
                      </span>
                      {section.priceSub && (
                        <span className="text-xs text-eco-green font-hand text-lg rotate-2 translate-x-2">
                          {section.priceSub}
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 italic">{section.title}</h2>
                    <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
                      {section.description}
                    </p>

                    {section.features && (
                      <div className="flex flex-col gap-3 mb-8 bg-accent-soft rounded-2xl p-6 border border-accent/10 offset-hand-1">
                        {section.features.map((text, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-foreground font-medium">{text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href={section.buttonLink || "/rejoindre"}
                      className="w-full text-center md:self-start bg-accent text-white font-bold text-sm
                                 px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-md offset-hand-3"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        }

        if (section?.__typename === "PageSectionsGridSection") {
           return (
             <section key={index} className="w-full bg-foreground text-background py-14 px-6 md:px-10 rounded-t-[2rem]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                   {section.items?.map((item, i) => (
                      <div key={i}>
                         {item?.image && (
                           <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4">
                             <Image
                               src={item.image}
                               alt={item.title || ""}
                               fill
                               className="object-cover"
                               sizes="(max-width: 768px) 100vw, 33vw"
                             />
                           </div>
                         )}
                         <h3 className="font-serif text-xl mb-2">{item?.title}</h3>
                         <div className="text-background/60 text-sm leading-relaxed whitespace-pre-line">
                            {item?.text}
                         </div>
                      </div>
                   ))}
                </div>
             </section>
           )
        }
        return null;
      })}
    </main>
  );
}
