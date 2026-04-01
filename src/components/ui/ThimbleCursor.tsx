"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * ThimbleCursor — Dé à coudre minimaliste
 *
 * Remplace le curseur natif par un petit cercle élégant avec
 * un motif de pointillés rappelant la texture d'un dé à coudre.
 * S'agrandit au survol d'éléments cliquables, se pince au clic.
 * Masqué sur écrans tactiles (via CSS dans globals).
 */
export function ThimbleCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);

  // Spring doux pour un suivi organique du curseur
  const x = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // Ne pas activer sur mobile/tablette
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const el = e.target as HTMLElement;
      const isClickable =
        el.closest("a") || el.closest("button") || el.closest("[draggable]") ||
        el.closest("[data-drag]") || el.getAttribute("role") === "button";
      setHovering(!!isClickable);
    };

    const down = () => setPressing(true);
    const up = () => setPressing(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: pressing ? 20 : hovering ? 40 : 28,
          height: pressing ? 20 : hovering ? 40 : 28,
          borderWidth: hovering ? 2 : 1.5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="rounded-full border-accent flex items-center justify-center bg-background/60 backdrop-blur-sm"
        style={{ borderStyle: "dotted", borderColor: "var(--color-accent)" }}
      >
        {/* Point central */}
        <motion.div
          animate={{ scale: pressing ? 0 : 1 }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
      </motion.div>
    </motion.div>
  );
}
