import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous Aider & Soutenir l'Association — Alunisson Orléans",
  description: "Faites un don de tissus, mercerie ou machines à coudre. Aidez-nous à faire vivre la couture collaborative à Orléans. Chaque don compte !",
  openGraph: {
    title: "Soutenir la Couture Collaborative — Alunisson",
    description: "Donnez une seconde vie à votre matériel de couture.",
  },
};

export default function AiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
