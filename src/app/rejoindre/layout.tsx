import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver & Nous Rejoindre — Alunisson Orléans (45)",
  description: "Prenez rendez-vous pour votre initiation gratuite ou réservez votre créneau d'atelier couture à Orléans. En direct sur notre calendrier Calendly !",
  openGraph: {
    title: "Rejoindre un Atelier Couture à Orléans",
    description: "Inscrivez-vous dès maintenant pour coudre ensemble.",
  },
};

export default function RejoindreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
