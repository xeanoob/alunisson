"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// ⚠️ INSTRUCTIONS POUR LE VRAI FLUX INSTAGRAM :
// 1. Va sur https://elfsight.com/instagram-feed-instashow/
// 2. Crée un compte gratuit et connecte @alunisson.orleans
// 3. Récupère ton code d'intégration (embed code)
// 4. Remplace 'PLACEHOLDER' par ton ID final (ex: "1234abcd-56ef-78gh-90ij-klmnopqrstuv")
export const INSTAGRAM_WIDGET_ID = "PLACEHOLDER";

export function InstagramFeed() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    if (INSTAGRAM_WIDGET_ID === "PLACEHOLDER") return;
    
    setIsWidgetLoaded(true);
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (INSTAGRAM_WIDGET_ID === "PLACEHOLDER") return null;

  return (
    <div className="w-full relative min-h-[400px]">
      <div className={`elfsight-app-${INSTAGRAM_WIDGET_ID}`} data-elfsight-app-lazy></div>
    </div>
  );
}
