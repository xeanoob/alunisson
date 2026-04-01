"use client";
import React from "react";
import Image from "next/image";

export function MembresMasonry() {
  return (
    <section className="w-full py-32 px-6 max-w-7xl mx-auto flex flex-col items-center relative bg-[#FDFBF7]">
       
       {/* Ligne de Surpiqûre décorative géante */}
       <div className="absolute top-0 right-10 md:right-32 w-px h-full border-r-[1px] border-dashed border-[#D9949F]/40 -z-10" />
       
       <div className="text-center mb-24 z-10 relative bg-[#FDFBF7] px-8">
          <span className="font-sans text-[10px] tracking-[0.3em] font-semibold uppercase text-foreground/50 mb-4 block">
            — Chapitre 04
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Membres à l'Unisson
          </h2>
       </div>

       {/* CSS Columns pour un Masonry simple et léger */}
       <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 w-full z-10">
          
          {/* Card 1 */}
          <div className="break-inside-avoid relative group cursor-none">
             <div className="w-full aspect-[3/4] relative overflow-hidden bg-gray-50 p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-700">
                 <div className="absolute inset-[6px] border-[1px] border-dashed border-transparent group-hover:border-white/80 transition-colors z-20 pointer-events-none duration-700" />
                 <div className="relative w-full h-full overflow-hidden">
                    <Image src="/hero_sewing.png" alt="Membre" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                 </div>
             </div>
             <div className="mt-5 text-center">
               <h4 className="font-serif text-xl font-medium">Jeanne D.</h4>
               <p className="font-sans text-[10px] text-[#D9949F] uppercase tracking-[0.2em] font-semibold mt-2">Robe d'Été</p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="break-inside-avoid relative group cursor-none">
             <div className="w-full aspect-square relative overflow-hidden bg-gray-50 p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-700">
                 <div className="absolute inset-[6px] border-[1px] border-dashed border-transparent group-hover:border-white/80 transition-colors z-20 pointer-events-none duration-700" />
                 <div className="relative w-full h-full overflow-hidden">
                    <Image src="/calico_sketch.png" alt="Patron" fill className="object-cover sepia-[.1] hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                 </div>
             </div>
             <div className="mt-5 text-center">
               <h4 className="font-serif text-xl font-medium">Projet Collectif</h4>
               <p className="font-sans text-[10px] text-[#D9949F] uppercase tracking-[0.2em] font-semibold mt-2">Patronage</p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="break-inside-avoid relative group cursor-none">
             <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-50 p-2 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-700">
                 <div className="absolute inset-[6px] border-[1px] border-dashed border-transparent group-hover:border-white/80 transition-colors z-20 pointer-events-none duration-700" />
                 <div className="relative w-full h-full overflow-hidden">
                    <Image src="/brown_pattern_paper.png" alt="Travail" fill className="object-cover hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                 </div>
             </div>
             <div className="mt-5 text-center">
               <h4 className="font-serif text-xl font-medium">Marc L.</h4>
               <p className="font-sans text-[10px] text-[#D9949F] uppercase tracking-[0.2em] font-semibold mt-2">Veste Tailleur</p>
             </div>
          </div>

       </div>

    </section>
  );
}
