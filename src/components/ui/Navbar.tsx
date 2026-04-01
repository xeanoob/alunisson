"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/ateliers", label: "Nos ateliers" },
  { href: "/initiations", label: "Nos initiations" },
  { href: "/philosophie", label: "Nos actions" },
  { href: "/aider", label: "Nous aider" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-14">
        <Link href="/" className="font-serif text-lg tracking-wide hover:text-accent transition-colors">
          Alunisson
        </Link>

        {/* Desktop links only */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors duration-200 ${
                pathname === l.href ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] text-muted tracking-wider uppercase">
            Orléans
          </span>
          {/* Version mobile : bouton rapide ou juste le handle local */}
          <Link href="/rejoindre" className="md:hidden text-[10px] bg-accent text-white px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
            Réserver
          </Link>
        </div>
      </div>
    </nav>
  );
}
