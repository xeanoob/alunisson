"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CleanHero() {
  const { scrollY } = useScroll();
  const threadTension = useTransform(scrollY, [0, 800], [0, 150]); 

  return (
    <section className="relative w-full pt-48 pb-32 px-6 flex flex-col items-center min-h-[90vh] z-10 text-center overflow-hidden">
      
      {/* Fil de couture poudré en background  */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-screen bg-[#D9949F]/20 -z-10 origin-top"
      />
      
      {/* Guirlande de fil animé Framboise Poudré */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full pointer-events-none -z-10 overflow-visible opacity-60" viewBox="0 0 100 1000" preserveAspectRatio="none">
         <motion.path 
            d="M 50 0 Q 80 250, 50 500 T 50 1000"
            fill="none" 
            stroke="#D9949F" 
            strokeWidth="1.5"
            strokeDasharray="6 4"
            initial={{ d: "M 50 0 Q 100 250, 50 500 T 50 1000" }}
            animate={{ d: "M 50 0 Q 30 250, 50 500 T 50 1000" }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
         />
      </svg>

      <div className="flex flex-col items-center w-full max-w-4xl mx-auto flex-grow relative z-20">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col items-center"
        >
            <span className="font-sans text-xs md:text-sm tracking-[0.4em] text-foreground/50 uppercase font-semibold mb-8">
              — Créons à —
            </span>
            <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.9] tracking-tight text-foreground font-medium uppercase relative">
              Alunisson
            </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 max-w-2xl font-sans text-sm md:text-base leading-relaxed text-foreground/70 font-normal bg-background/50 backdrop-blur-sm p-4"
        >
          Apprenez la couture, partagez votre créativité, et créez vos propres vêtements dans un espace ouvert et collaboratif à Orléans. Du patron à la pièce finale, Alunisson vous accompagne dans votre démarche créative.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          {/* Bouton style Éditorial avec surpiqûre */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-foreground text-background font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 overflow-hidden"
          >
             <div className="absolute inset-[3px] border-[1px] border-dashed border-transparent group-hover:border-background/60 transition-colors duration-500 pointer-events-none" />
             <span className="relative z-10">Rejoindre l'Atelier</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
