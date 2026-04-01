"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/ateliers", label: "Ateliers" },
  { href: "/philosophie", label: "Qui sommes-nous" },
  { href: "/creations", label: "Créations" },
  { href: "/rejoindre", label: "Rejoindre" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-14">
          <Link href="/" className="font-serif text-lg tracking-wide">
            Alunisson
          </Link>

          {/* Desktop */}
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
            <span className="text-[11px] text-muted tracking-wider uppercase hidden sm:block">
              Orléans
            </span>
            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] w-6"
              aria-label="Menu"
            >
              <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-14 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
