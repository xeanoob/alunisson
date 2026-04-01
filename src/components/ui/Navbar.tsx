"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/ateliers", label: "Nos ateliers" },
  { href: "/initiations", label: "Nos initiations" },
  { href: "/philosophie", label: "Nos actions" },
  { href: "/aider", label: "Nous aider" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Verrouiller le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] bg-white/40 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="relative z-[1010] font-serif text-xl tracking-[0.05em] hover:opacity-70 transition-opacity"
          >
            Alunisson
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[12px] font-bold uppercase tracking-[0.15em] text-foreground/60 transition-colors hover:text-foreground py-2"
              >
                {l.label}
                {pathname === l.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4 relative z-[1010]">
            <Link 
              href="/rejoindre" 
              className="hidden sm:flex bg-accent text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-foreground transition-all shadow-lg active:scale-95"
            >
              Réserver
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 p-2 bg-foreground text-background rounded-full shadow-lg"
              aria-label="Menu"
            >
              <motion.span 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
                className="w-5 h-[1.5px] bg-current rounded-full"
              />
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-5 h-[1.5px] bg-current rounded-full"
              />
              <motion.span 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
                className="w-5 h-[1.5px] bg-current rounded-full"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - ESPRIT ATELIER COLORÉ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] md:hidden bg-[#FFF9E5] flex flex-col pt-24 px-8 overflow-hidden"
          >
            {/* Texture de papier / tissu en fond */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
            
            {/* Éléments de décoration "couture" */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -left-10 w-60 h-60 bg-wax-teal/10 rounded-full blur-3xl" />

            <div className="flex flex-col gap-10 w-full max-w-sm mx-auto relative z-10">
              <div className="space-y-8">
                <div className="relative">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 block mb-2">Explorer</span>
                </div>

                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -30, rotate: -5 }}
                    animate={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? 1 : -1 }}
                    transition={{ delay: 0.1 + i * 0.08, type: "spring" }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-serif text-5xl block transition-all hover:translate-x-2 active:scale-95 ${pathname === l.href ? "text-accent italic underline decoration-wax-yellow underline-offset-8" : "text-foreground"}`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="py-4">
                <div className="h-px bg-foreground/10 w-full" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <Link
                  href="/rejoindre"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-center w-full bg-accent text-white py-6 rounded-2xl font-bold uppercase tracking-widest shadow-xl transition-all hover:shadow-2xl active:scale-95 overflow-hidden offset-hand-1"
                >
                  <span className="relative z-10">Réserver un atelier</span>
                  <div className="absolute inset-0 bg-wax-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <span className="absolute -bottom-8 right-2 font-hand text-accent rotate-2 text-base">
                  On t'attend au labo
                </span>
              </motion.div>
            </div>
            
            {/* Pied du menu mobile artisanal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pb-10 flex flex-col items-center gap-3 relative z-10"
            >
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-wax-yellow' : 'bg-wax-teal'}`} />
                ))}
              </div>
              <p className="font-hand text-lg opacity-40">Alunisson · Créé avec amour à Orléans</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
