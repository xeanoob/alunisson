import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiation Couture Gratuite Orléans — Premiers Pas",
  description: "Apprenez les bases de la couture gratuitement à Orléans. Enfilage de machine, canette, couture droite : nos initiations sont idéales pour débuter sans pression.",
  openGraph: {
    title: "Initiation Couture Gratuite Orléans",
    description: "Apprenez à utiliser une machine à coudre en 1h. C'est gratuit et ouvert à tous !",
  },
};

export default function InitiationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
