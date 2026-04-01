"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export function Patrotheque() {
  const constraintsRef = useRef(null);

  // Formes de patron technique
  const patternPieces = [
    { id: 1, name: "BUSTE", d: "M 40 0 L 160 0 L 180 50 L 180 250 L 160 280 L 40 280 L 20 250 L 20 50 Z", x: -100, y: 50 },
    { id: 2, name: "MANCHE G", d: "M 60 0 L 100 0 L 80 150 L 20 120 Z", x: -250, y: 20 },
    { id: 3, name: "MANCHE D", d: "M 0 0 L 40 0 L 80 120 L 20 150 Z", x: 150, y: 20 },
    { id: 4, name: "COL", d: "M 0 20 Q 50 -10 100 20 L 80 40 Q 50 10 20 40 Z", x: -50, y: -100 },
  ];

  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center bg-[#FDFBF7] border-y border-[#D9949F]/20 overflow-hidden cursor-none">
       
       <div className="text-center mb-16 z-20">
          <span className="font-sans text-[10px] tracking-[0.3em] font-semibold uppercase text-foreground/50 mb-4 block">
            — Chapitre 02
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            La Patrothèque
          </h2>
          <p className="mt-4 font-sans text-sm text-foreground/60 max-w-sm mx-auto">Saisissez les pièces de tissu avec votre dé à coudre pour composer le vêtement sur la table de coupe.</p>
       </div>

       <div 
         ref={constraintsRef} 
         className="w-full max-w-4xl h-[600px] border border-dashed border-[#D9949F]/40 relative bg-[#F8F5F0] flex items-center justify-center p-8 mx-auto"
       >
          {/* Ligne de construction fond */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#D9949F 1px, transparent 1px), linear-gradient(90deg, #D9949F 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="absolute opacity-20 border border-[#D9949F] w-[200px] h-[300px] border-dashed pointer-events-none flex items-center justify-center">
             <span className="text-[#D9949F] font-sans text-xs tracking-widest uppercase">Assemblage</span>
          </div>

          {patternPieces.map((piece) => (
             <motion.div
               key={piece.id}
               drag
               dragConstraints={constraintsRef}
               dragElastic={0.1}
               dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
               whileDrag={{ scale: 1.05 }}
               initial={{ x: piece.x, y: piece.y }}
               className="absolute flex flex-col items-center justify-center will-change-transform"
             >
                <svg className="overflow-visible drop-shadow-sm hover:drop-shadow-lg transition-all" width="200" height="300" viewBox="-20 -20 240 320">
                   <path 
                     d={piece.d} 
                     fill="#FFF" 
                     stroke="#1A1A1A" 
                     strokeWidth="0.5" 
                     className="transition-colors hover:fill-[#f9f7f4]" 
                     strokeDasharray="3 3"
                   />
                   <text x="50%" y="40%" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" opacity="0.6" letterSpacing="3">
                     {piece.name}
                   </text>
                   <text x="50%" y="48%" textAnchor="middle" fill="#1A1A1A" fontSize="8" fontFamily="sans-serif" opacity="0.4">
                     COUPER 1X
                   </text>
                   <circle cx="50%" cy="55%" r="2" fill="#D9949F" />
                </svg>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
