import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Philosophie & Nos Actions — Couture Solidaire Orléans",
  description: "Découvrez l'histoire d'Alunisson et nos valeurs : entraide, durabilité et accessibilité. Nos membres agissent pour une mode plus humaine à Orléans.",
  openGraph: {
    title: "Philosophie & Actions Alunisson Orléans",
    description: "Plus qu'une association, un mouvement pour la couture collaborative.",
  },
};

export default function PhilosophieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
