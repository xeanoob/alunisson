"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { MapPin, Mail, Clock } from "lucide-react";
import { useEffect } from "react";

// ⚠️ URL Calendly officielle
const CALENDLY_URL = "https://calendly.com/alunisson-orleans";

export default function RejoindrePage() {

  // Charge le script Calendly une seule fois
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main className="w-full">
      <Navbar />

      <section className="pt-28 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-end mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-8xl mb-6 leading-none">
                Réserver.
              </h1>
              <p className="text-muted text-base md:text-xl max-w-lg leading-relaxed">
                Choisis un créneau qui te convient directement dans le calendrier.
                L'initiation est gratuite, sans aucun engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
            >
              <Image src="/machine_zoom.png" alt="Machine à coudre Alunisson" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">

            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden min-h-[650px]"
            >
              <div
                className="calendly-inline-widget w-full h-full min-h-[650px]"
                data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fdf8f0&text_color=2d2520&primary_color=d9537b`}
              />
            </motion.div>

            {/* Sidebar infos */}
            <div className="flex flex-col gap-8">
              <div className="bg-accent-soft rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-xs text-muted uppercase tracking-wider font-semibold">Lieu</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Info Lab Orléans<br />
                  <a href="https://www.instagram.com/alunisson.orleans/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@alunisson.orleans</a>
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-accent" />
                  <span className="text-xs text-muted uppercase tracking-wider font-semibold">Ateliers</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Atelier Alunisson — 20 € (5 places, résa obligatoire)<br />
                  Atelier Initiation — Gratuit
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={14} className="text-accent" />
                  <span className="text-xs text-muted uppercase tracking-wider font-semibold">Contact direct</span>
                </div>
                <a href="mailto:contact@alunisson.fr" className="text-sm text-accent hover:underline">
                  contact@alunisson.fr
                </a>
              </div>

              <div className="bg-foreground text-background rounded-2xl p-6">
                <h3 className="font-serif text-lg mb-3">Tarifs</h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  Atelier Alunisson : <strong className="text-background">20 €</strong><br />
                  Initiation : <strong className="text-accent">Gratuit</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
