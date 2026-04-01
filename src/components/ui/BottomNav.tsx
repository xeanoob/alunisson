"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scissors, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/ateliers", label: "Ateliers", icon: Scissors },
  { href: "/initiations", label: "Initiations", icon: Heart },
  { href: "/rejoindre", label: "Réserver", icon: Calendar },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-t border-border md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex flex-col items-center justify-center w-full h-full gap-1 group"
            >
              <div className={`relative p-1 rounded-xl transition-all duration-300 ${isActive ? "text-accent" : "text-muted group-hover:text-foreground"}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-1 bg-accent/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              <span className={`text-[10px] font-medium tracking-tight ${isActive ? "text-accent" : "text-muted"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
