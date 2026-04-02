import type { Metadata } from "next";
import { Inter, Playfair_Display, Gochi_Hand } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  weight: "400",
  variable: "--font-gochi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alunisson.fr"),
  title: {
    default: "Alunisson — Couture Collaborative à Orléans (45)",
    template: "%s | Alunisson Orléans"
  },
  description:
    "Découvrez Alunisson, l'association de couture collaborative à Orléans. Ateliers créatifs, initiations gratuites et couture pour tous.",
  keywords: ["couture", "diy", "Orléans", "association", "collaboratif", "couture pour tous", "textile", "vêtements"],
  authors: [{ name: "Alunisson", url: "https://alunisson.fr" }],
  creator: "Alunisson",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alunisson.fr",
    siteName: "Alunisson",
    title: "Alunisson — Couture Collaborative à Orléans (45)",
    description: "Découvrez Alunisson, l'association de couture collaborative à Orléans. Ateliers couture, entraide et créativité.",
    images: [
      {
        url: "/equipe_sac.jpg",
        width: 1200,
        height: 630,
        alt: "L'équipe Alunisson Orléans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alunisson — Couture Collaborative",
    description: "La couture pour tous à Orléans.",
    images: ["/equipe_sac.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alunisson.fr",
  },
  other: {
    "geo.region": "FR-CVL",
    "geo.placename": "Orléans",
    "geo.position": "47.902964;1.909251",
    "ICBM": "47.902964, 1.909251",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${gochiHand.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <SmoothScroll>
          <div>
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
