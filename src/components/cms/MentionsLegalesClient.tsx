"use client";
import { Navbar } from "@/components/ui/Navbar";
import { motion } from "framer-motion";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

export function MentionsLegalesClient(props: {
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

      <section className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl mb-12">{content.hero?.title}</h1>
            
            <div className="space-y-10 text-muted leading-relaxed">
              {content.sections?.map((section, index) => {
                if (section?.__typename === "PageSectionsGridSection") {
                  return section.items?.map((item, i) => (
                    <div key={`${index}-${i}`}>
                      <h2 className="text-foreground font-semibold mb-3 italic">{item?.title}</h2>
                      <div className="text-sm whitespace-pre-line">
                        {item?.text}
                      </div>
                    </div>
                  ));
                }
                return null;
              })}

              <div className="pt-10 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">
                  Site réalisé par un bénévole pour l'association Alunisson.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
