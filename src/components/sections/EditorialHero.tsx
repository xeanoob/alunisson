"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function EditorialHero() {
  const { scrollY } = useScroll();
  const threadTension = useTransform(scrollY, [0, 500], [1, 0.95]);

  const titleLetters = [
    { char: "A", bg: "url(/bg_burlap.png)" },
    { char: "L", bg: "url(/calico_sketch.png)" },
    { char: "U", bg: "url(/bg_leather.png)" },
    { char: "N", bg: "url(/brown_pattern_paper.png)" },
    { char: "I", bg: "url(/bg_burlap.png)" },
    { char: "S", bg: "url(/calico_sketch.png)" },
    { char: "S", bg: "url(/bg_leather.png)" },
    { char: "O", bg: "url(/brown_pattern_paper.png)" },
    { char: "N", bg: "url(/calico_sketch.png)" },
  ];

  return (
    <section className="relative w-full pt-40 pb-32 px-6 md:px-12 flex flex-col min-h-screen z-10">
      
      {/* Fil Rose Chaotique (Zig-zag et boucle énorme) */}
      <motion.svg 
        style={{ scaleY: threadTension }}
        className="absolute top-[10%] left-[-10%] w-[120%] h-[900px] pointer-events-none z-30 drop-shadow-2xl opacity-90 origin-top" 
        viewBox="0 0 1000 900" 
        preserveAspectRatio="none"
      >
        <path
          d="M -100 100 L 300 400 L 150 700 L 600 200 L 800 800 L 950 50 L 1200 600"
          fill="none"
          stroke="#FF00FF"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="25 10"
        />
        <path
          d="M -50 150 Q 250 -50 450 350 S 800 100 1050 450"
          fill="none"
          stroke="#FF00FF"
          strokeWidth="3"
        />
      </motion.svg>

      <div className="flex flex-col md:flex-row items-center justify-between gap-24 w-full max-w-7xl mx-auto flex-grow relative">
        
        {/* Partie Gauche : Typographie et Textes Tactiles */}
        <div className="flex-1 flex flex-col items-start z-40 w-full mt-12 md:mt-0 relative">
          
          <h2 className="font-serif text-3xl md:text-5xl italic font-bold text-foreground mb-6 drop-shadow-lg bg-[#F1EDE7] px-6 py-3 rotate-[-3deg] border border-foreground/30 shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
            Créons à
          </h2>
          
          {/* Construction du Titre avec Morceaux de Tissus et Papiers cousus ensemble */}
          <div className="flex flex-wrap items-center relative drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] w-full justify-between pr-4">
            {/* Ligne de Couture principale horizontale tenant les lettres */}
            <div className="absolute top-[45%] left-0 w-full h-[3px] bg-transparent border-t-[3px] border-dashed border-gray-400 mix-blend-multiply z-50 shadow-sm" />
            <div className="absolute top-[50%] left-0 w-full h-[1px] bg-[#FF00FF] z-50 opacity-50" />
            
            {titleLetters.map((l, i) => (
              <span 
                key={i} 
                className="font-serif text-[15vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase font-black"
                style={{
                  backgroundImage: l.bg,
                  backgroundSize: '300px', // Rend la texture bien visible dans les lettres
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  transform: `rotate(${i % 2 === 0 ? -4 : 6}deg) translateY(${i % 3 === 0 ? 8 : -8}px) scale(${i === 4 ? 1.1 : 1})`,
                  filter: 'drop-shadow(3px 8px 8px rgba(0,0,0,0.7))',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: i % 2 === 0 ? 10 : 20
                }}
              >
                {l.char}
              </span>
            ))}
          </div>

          <p className="mt-20 max-w-md font-sans text-sm md:text-base leading-relaxed text-foreground font-black bg-[#EFE9DF] p-6 md:p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)] border-l-[8px] border-r-[2px] border-[#FF00FF] rotate-2 relative">
             <span className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-md transform -translate-x-1/2 border-[0.5px] border-white/40" />
             Apprenez la couture, partagez votre créativité, et créez vos propres vêtements dans un espace ouvert et collaboratif à Orléans. Du patron à la pièce finale, Alunisson vous accompagne dans votre démarche créative.
          </p>

          <div className="mt-16 z-50">
            {/* Bouton en morceau de Cuir cousu avec Bouton en Nacre */}
            <button className="flex items-center gap-6 text-xs md:text-sm tracking-[0.2em] font-black uppercase text-[#F1EDE7] shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-[1.03] hover:rotate-2 transition-all duration-300 py-6 px-10 relative overflow-hidden group border border-amber-900/30"
              style={{
                backgroundImage: 'url(/bg_leather.png)',
                backgroundSize: '150px',
                borderStyle: 'dashed',
                borderWidth: '2px',
                borderColor: 'rgba(255,255,255,0.6)',
                borderRadius: '8px',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 20px 25px -5px rgba(0,0,0,0.5)'
              }}
            >
               {/* Nacre Button / Pearl element cousu au cuir */}
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-stone-100 via-stone-200 to-stone-300 flex items-center justify-center flex-shrink-0 group-hover:rotate-45 transition-transform duration-500 relative"
                  style={{
                     boxShadow: 'inset 0 -2px 5px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.8), 0 5px 10px rgba(0,0,0,0.5)'
                  }}
               >
                  {/* Fil de couture en croix rouge (qui tient le bouton) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-[2px] bg-red-600 rotate-45" />
                    <div className="w-4 h-[2px] bg-red-600 -rotate-45 absolute" />
                  </div>
                  <div className="grid grid-cols-2 gap-[4px] relative z-10">
                     <div className="w-[4px] h-[4px] rounded-full bg-stone-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
                     <div className="w-[4px] h-[4px] rounded-full bg-stone-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
                     <div className="w-[4px] h-[4px] rounded-full bg-stone-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
                     <div className="w-[4px] h-[4px] rounded-full bg-stone-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
                  </div>
               </div>
               <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mix-blend-screen text-white">Rejoindre l'Atelier</span> 
            </button>
          </div>
        </div>

        {/* Partie Droite : Le Grand Collage Physique */}
        <div className="flex-1 relative w-full h-[600px] z-20 mt-28 md:mt-0">
           
           {/* Photo 1 (Le croquis sous le collage) */}
           <motion.div 
             initial={{ rotate: -15, y: 50, opacity: 0 }}
             animate={{ rotate: -25, y: 30, opacity: 1 }}
             transition={{ type: "spring", delay: 0.2 }}
             className="absolute top-0 md:top-10 -left-6 md:-left-12 w-48 md:w-64 aspect-square bg-slate-50 p-2 md:p-3 shadow-[0_15px_25px_rgba(0,0,0,0.4)] border border-gray-300 z-10"
           >
              <div className="relative w-full h-full">
                <Image src="/calico_sketch.png" alt="Croquis" fill className="object-cover sepia-[.4]" />
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-[0_4px_4px_rgba(0,0,0,0.6)] z-50 overflow-hidden after:content-[''] after:absolute after:top-1 after:left-1 after:w-[3px] after:h-[3px] after:bg-white/80 after:rounded-full" />
           </motion.div>

           {/* Photo 2 (Le patron marron accroché à droite) */}
           <motion.div 
             initial={{ rotate: 15, x: 50, opacity: 0 }}
             animate={{ rotate: 12, x: 0, opacity: 1 }}
             transition={{ type: "spring", delay: 0.4 }}
             className="absolute top-24 md:top-20 right-0 md:-right-8 w-56 md:w-72 aspect-[3/4] bg-[#F1EDE7] p-2 md:p-4 shadow-[0_20px_35px_rgba(0,0,0,0.4)] border border-amber-900/20 z-20"
           >
              <div className="relative w-full h-full border-[2px] border-dashed border-gray-500/50">
                <Image src="/brown_pattern_paper.png" alt="Patrons" fill className="object-cover opacity-90 mix-blend-multiply" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 md:w-20 h-8 bg-white/30 backdrop-blur-md rotate-45 shadow-sm border border-white/20 mix-blend-screen" />
              <div className="absolute -bottom-4 -left-4 w-12 md:w-20 h-8 bg-white/30 backdrop-blur-md rotate-[-20deg] shadow-sm border border-white/20" />
           </motion.div>

           {/* Photo 3 (Le Focus Atelier central superposé) */}
           <motion.div 
             initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
             animate={{ rotate: -5, scale: 1, opacity: 1 }}
             transition={{ type: "spring", delay: 0.6 }}
             className="absolute top-56 md:top-40 left-8 md:left-24 w-64 md:w-80 aspect-[4/5] bg-[#F8F9FA] p-2 md:p-3 pb-12 md:pb-16 shadow-[0_30px_50px_rgba(0,0,0,0.6)] border border-gray-200 z-30"
           >
              <div className="relative w-full h-full border border-gray-300">
                <Image src="/hero_machine.png" alt="Atelier" fill className="object-cover filter contrast-[1.1] grayscale-[0.1]" priority sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute top-2 left-4 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_5px_5px_rgba(0,0,0,0.6)] z-50 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-[2px] after:h-[2px] after:bg-white/80 after:rounded-full" />
              <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-blue-500 shadow-[0_5px_5px_rgba(0,0,0,0.6)] z-50 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-[2px] after:h-[2px] after:bg-white/80 after:rounded-full" />
              <span className="absolute bottom-4 left-6 font-sans text-xs md:text-sm font-bold opacity-60 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>12 OCT. — ORLÉANS</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
