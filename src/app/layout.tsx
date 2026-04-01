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
  title: {
    default: "Alunisson — Ateliers de Couture Collaborative à Orléans (45)",
    template: "%s | Alunisson Orléans"
  },
  description:
    "Découvrez Alunisson, l'association de couture à Orléans. Ateliers créatifs, initiations gratuites, machines Brother en libre-service et partage de tissus wax. Apprenez à coudre ensemble !",
  keywords: ["couture", "atelier", "Orléans", "association", "wax", "faire soi-même", "initiation couture", "Loiret"],
  authors: [{ name: "Alunisson" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alunisson.fr",
    siteName: "Alunisson",
    title: "Alunisson — Ateliers de Couture Collaborative à Orléans (45)",
    description: "Rejoignez notre communauté de couture à Orléans. Ateliers pour tous niveaux, matériel fourni.",
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
    title: "Alunisson — Couture Collaborative à Orléans",
    description: "Apprendre la couture ensemble à Orléans.",
    images: ["/equipe_sac.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
