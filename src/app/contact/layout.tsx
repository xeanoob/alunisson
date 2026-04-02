import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous Contacter — Association Alunisson Orléans",
  description: "Contactez l'association de couture Alunisson à Orléans. Posez-nous vos questions, réservez en direct ou proposez-nous un partenariat.",
  openGraph: {
    title: "Nous Contacter — Alunisson Orléans",
    description: "Une question ? Une envie de coudre ? Envoyez-nous un email.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
