"use client";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-16 px-6 md:px-10 bg-white/40 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Mission */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-xl md:text-2xl tracking-tight text-foreground">
            Alunisson
          </Link>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            L'association de couture collaborative d'Orléans. 
            On coud l'avenir main dans la main.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/alunisson.orleans/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:contact@alunisson.fr" className="text-muted hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-5">
          <h4 className="font-serif text-lg font-semibold lg:text-xl">Navigation</h4>
          <div className="flex flex-col gap-2">
            <Link href="/ateliers" className="text-sm text-muted hover:text-accent transition-colors">Nos ateliers</Link>
            <Link href="/initiations" className="text-sm text-muted hover:text-accent transition-colors">Nos initiations</Link>
            <Link href="/creations" className="text-sm text-muted hover:text-accent transition-colors">Créations</Link>
            <Link href="/aider" className="text-sm text-muted hover:text-accent transition-colors">Nous aider</Link>
          </div>
        </div>

        {/* Association & Infos */}
        <div className="flex flex-col gap-5">
          <h4 className="font-serif text-lg font-semibold lg:text-xl">En savoir plus</h4>
          <div className="flex flex-col gap-2">
            <Link href="/infos" className="text-sm text-muted hover:text-accent transition-colors">FAQ & Infos</Link>
            <Link href="/philosophie" className="text-sm text-muted hover:text-accent transition-colors">Nos actions</Link>
            <Link href="/mentions-legales" className="text-sm text-muted hover:text-accent transition-colors">Mentions Légales</Link>
          </div>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-col gap-5 relative">
          <h4 className="font-serif text-lg font-semibold lg:text-xl">Nous trouver</h4>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <MapPin size={18} className="text-eco-green flex-shrink-0" />
              <p className="text-sm text-muted">
                Info Lab Orléans<br />
                3 rue de la Cholerie<br />
                45000 Orléans
              </p>
            </div>
            <Link href="/rejoindre" className="inline-block mt-2 text-sm font-bold text-eco-green hover:underline underline-offset-4">
              Nous contacter →
            </Link>
          </div>
          <span className="absolute -bottom-10 right-0 font-hand text-eco-clay rotate-3 text-xl hidden lg:block">
            On se voit là-bas !
          </span>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} Association Alunisson · Orléans (45)
        </p>
        <p className="text-[10px] text-muted/60 lowercase font-hand text-lg">
          Fait avec passion et quelques épingles.
        </p>
      </div>
    </footer>
  );
}
