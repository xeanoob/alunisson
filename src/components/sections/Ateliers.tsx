"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Ateliers() {
  const ateliers = [
    {
      title: "Débutants.",
      description: "Prenez en main la machine, apprenez les points de base et confectionnez vos premiers accessoires simples dans un environnement d'artisan brut.",
      tags: ["Initiation", "Machines", "Accessoires", "Ciseaux"],
      gridOffset: "md:mt-0 md:-rotate-[3deg] relative z-10 w-full md:w-[50%]",
      image: "/calico_sketch.png",
      textColor: "text-stone-900", 
      tagStyle: "zigzag",
    },
    {
      title: "Projets Avancés.",
      description: "Maîtrisez les patrons complexes, le modélisme et les finitions haute couture. La technique de pointe pour des vêtements sur-mesure exceptionnels.",
      tags: ["Patrons", "Sur-mesure", "Haute Couture"],
      gridOffset: "md:mt-80 md:-ml-32 md:rotate-[2deg] relative z-20 w-full md:w-[60%] shadow-[0_30px_50px_rgba(0,0,0,0.6)]",
      image: "/brown_pattern_paper.png",
      textColor: "text-amber-950", 
      tagStyle: "straight",
    }
  ];

  return (
    <section id="ateliers" className="w-full py-32 md:py-48 px-6 md:px-12 relative z-10 font-sans">
      
      {/* Fil Fuchsia Serpentin Géant - Chaotic Thread */}
      <div className="absolute top-[10%] left-[-15%] w-[130%] h-[120%] pointer-events-none z-30 opacity-90 hidden md:block">
        <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 1200 1200" preserveAspectRatio="none">
           <path 
             d="M 0 100 L 400 300 Q 600 -100 800 400 T 1200 200 L 1000 600 Q 800 1000 500 800 T -100 900" 
             fill="none" 
             stroke="#FF00FF" 
             strokeWidth="3.5" 
             strokeDasharray="10 25" 
             strokeLinecap="round"
             strokeLinejoin="round"
           />
           <path 
             d="M 100 200 C 300 500 400 100 700 300 S 1100 600 1300 400" 
             fill="none" 
             stroke="#FF00FF" 
             strokeWidth="2" 
             strokeLinecap="round"
             className="opacity-60"
           />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        
        {/* Titre Oversized Maximaliste */}
        <div className="flex flex-col w-full mb-32 md:mb-48 relative z-40">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] font-black uppercase text-foreground mb-4 block mix-blend-color-burn">
             — Chapitre 01 — Programme
          </span>
          <h2 className="font-serif text-[18vw] md:text-[14vw] font-black tracking-tighter text-foreground leading-[0.7] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Nos Ateliers.
            <span className="absolute -top-10 -right-4 w-12 h-12 rounded-full border border-red-500 flex items-center justify-center opacity-60 mix-blend-multiply rotate-12 bg-white/10 hidden md:flex">
                <span className="text-red-500 font-bold text-xs transform -rotate-12">×</span>
            </span>
          </h2>
        </div>

        {/* Le Layout Destructuré Tactile */}
        <div className="flex flex-col md:flex-row items-start w-full gap-24 md:gap-0 relative">
          
          {ateliers.map((atelier, index) => (
            <div 
              key={index} 
              className={`flex flex-col min-h-[500px] md:min-h-[700px] ${atelier.gridOffset} relative group bg-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-blend-multiply overflow-hidden isolation-auto`}
              style={{
                clipPath: index === 0 
                  ? "polygon(1% 1%, 99% -2%, 100% 98%, 0% 100%)" // Bords légèrement déchirés 
                  : "polygon(-1% 1%, 101% -1%, 98% 99%, 2% 102%)"
              }}
            >
              <div className="absolute inset-0 -z-10">
                <Image 
                  src={atelier.image} 
                  alt="Texture Background" 
                  fill 
                  className="object-cover opacity-100 transition-transform duration-[4s] ease-out group-hover:scale-110 sepia-[.2] contrast-125 saturate-50" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-white/20" /> 
                {/* Taches de Craie / Usure Blanches (Filtre radial) */}
                {index === 1 && (
                   <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, white 0%, transparent 40%), radial-gradient(circle at 30% 80%, white 0%, transparent 30%)'}} />
                )}
                {/* Tache sombre / Graisse */}
                {index === 0 && (
                   <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 90%, black 0%, transparent 50%)'}} />
                )}
              </div>

              <div className={`flex flex-col h-full p-8 md:p-14 ${atelier.textColor}`}>
                
                {/* En-tête Usé */}
                <div className="flex justify-between items-start border-b-[3px] border-current pb-4 mb-20 opacity-60">
                  <span className="font-sans text-lg tracking-[0.2em] font-extrabold uppercase" style={{ fontFamily: 'monospace' }}>
                    P-{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-bold border border-current p-1 rotate-[-2deg]">
                    REF.84{(index + 1)*3}
                  </span>
                </div>

                <div className="flex-grow">
                   <h3 className="font-serif text-5xl md:text-7xl mb-12 font-black leading-[0.9] tracking-tight py-2 px-4 bg-white/40 backdrop-blur-sm border-l-4 border-current box-decoration-clone">
                     {atelier.title}
                   </h3>
                   <p className="font-sans leading-relaxed text-base md:text-lg font-bold max-w-sm mix-blend-color-burn px-2 bg-white/20">
                     {atelier.description}
                   </p>
                </div>
                
                {/* Tags "Fysiques" (Étiquettes en Tissu cousues) */}
                <div className="flex flex-col gap-8 pt-12 mt-12 w-full z-20 relative">
                  {atelier.tags.map((tag, tagIx) => (
                    <div key={tag} className="flex items-center gap-6 w-full relative">
                      
                      {/* Élément "Étiquette Tissu" */}
                      <div className="relative shadow-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] hover:rotate-2 hover:scale-105 transition-all duration-300"
                           style={{
                               backgroundImage: 'url(/bg_label.png)',
                               backgroundSize: 'cover',
                               backgroundPosition: 'center',
                               padding: '8px 16px',
                               transform: `rotate(${tagIx % 2 === 0 ? '-2deg' : '3deg'})`
                           }}
                      >
                         <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] font-extrabold uppercase mix-blend-multiply text-slate-800">
                           {tag}
                         </span>
                         {/* Sur-Coutures rouges sur les bords de l'étiquette pour donner l'impression qu'elle est fixée */}
                         <div className="absolute top-[20%] left-1 w-1 h-[60%] border-r-[2px] border-dashed border-red-500 opacity-60" />
                         <div className="absolute top-[20%] right-1 w-1 h-[60%] border-l-[2px] border-dashed border-red-500 opacity-60" />
                      </div>
                      
                      {/* Le fil de Machine à coudre chaotique qui s'échappe de l'étiquette */}
                      {atelier.tagStyle === "zigzag" ? (
                        <svg className="flex-grow h-6 opacity-80" preserveAspectRatio="none">
                           <path d="M 0 12 L 10 0 L 20 24 L 30 0 L 40 24 L 50 0 L 60 24 L 70 0 L 80 24 L 90 0 L 100 24 L 110 0 L 120 24 L 130 0 L 140 24 L 150 0 L 160 24 L 170 0 L 180 24 L 190 0 L 200 24" fill="none" stroke="#FF00FF" strokeWidth="2.5" strokeLinejoin="miter"/>
                        </svg>
                      ) : (
                        <div className="flex-grow h-[4px] border-b-[4px] border-dashed border-[#FF00FF] opacity-90 rotate-[-1deg]" />
                      )}
                      
                    </div>
                  ))}
                </div>
              </div>

              {/* Tape transparents Scotch en coins */}
              <div className="absolute top-2 right-12 w-16 h-6 bg-white/20 backdrop-blur-md rotate-[-20deg] mix-blend-screen shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
