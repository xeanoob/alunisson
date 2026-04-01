import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BottomNav } from "@/components/ui/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alunisson — Cours & Ateliers de Couture à Orléans (45)",
  description:
    "Apprenez la couture à Orléans avec Alunisson. Ateliers débutants, machines en libre-service, tissus wax et projets créatifs dans le Loiret. Rejoignez notre communauté !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen">
        <SmoothScroll>
          <div className="pb-16 md:pb-0">
            {children}
          </div>
        </SmoothScroll>
        <BottomNav />
      </body>
    </html>
  );
}
