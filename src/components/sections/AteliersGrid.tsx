"use client";
import React from "react";
import Image from "next/image";

export function AteliersGrid() {
  const ateliers = [
    {
      title: "Initiation Couture",
      desc: "Apprenez à maîtriser la machine à coudre et réalisez vos premiers accessoires.",
      tag: "Débutant",
      swatch: "/calico_sketch.png",
    },
    {
      title: "Modélisme Avancé",
      desc: "Création de patrons sur mesure et techniques de moulage sur mannequin.",
      tag: "Avancé",
      swatch: "/brown_pattern_paper.png",
    },
    {
      title: "Upcycling & Broderie",
      desc: "Transformez vos anciens vêtements avec des techniques de broderie moderne.",
      tag: "Créatif",
      swatch: "/bg_burlap.png",
    }
  ];

  return (
    <section className="w-full py-32 px-6 max-w-7xl mx-auto flex flex-col items-center bg-[#FDFBF7]">
       <div className="text-center mb-20 z-10 relative">
          <span className="font-sans text-[10px] tracking-[0.3em] font-semibold uppercase text-foreground/50 mb-4 block">
            — Chapitre 03
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Ateliers Thématiques
          </h2>
          
          <div className="absolute top-1/2 -left-12 w-8 h-[1px] bg-[#D9949F]/40" />
          <div className="absolute top-1/2 -right-12 w-8 h-[1px] bg-[#D9949F]/40" />
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {ateliers.map((atelier, i) => (
             <div key={i} className="group flex flex-col border border-[#1A1A1A]/10 bg-white p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-[4px] border-[1px] border-dashed border-transparent group-hover:border-[#D9949F]/40 m-2 transition-colors duration-700 pointer-events-none z-20" />
                
                {/* Coupon Swatch */}
                <div className="w-full h-56 bg-gray-50 mb-8 relative border border-gray-100 overflow-hidden rounded-tr-[40px] rounded-bl-[40px]">
                   <Image src={atelier.swatch} alt="Texture Tissu" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                   
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 font-sans text-[10px] uppercase tracking-widest font-semibold text-foreground/80 shadow-sm">
                     {atelier.tag}
                   </div>
                   
                   {/* Pincement Effect pin */}
                   <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-white shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-1.5 h-1.5 bg-[#D9949F] rounded-full" />
                   </div>
                </div>

                <h3 className="font-serif text-2xl font-medium mb-4 relative z-10">{atelier.title}</h3>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-8 flex-grow relative z-10">{atelier.desc}</p>

                <div className="w-full pt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                   <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#D9949F] group-hover:text-foreground transition-colors duration-300">Découvrir l'Atelier</span>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground group-hover:translate-x-2 transition-transform duration-500">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                   </svg>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
}
