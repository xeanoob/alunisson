import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Ateliers Couture à Orléans — Création & Partage",
  description: "Participez à nos ateliers de couture à Orléans. Apprenez à fabriquer vos propres sacs wax, accessoires et vêtements dans une ambiance conviviale et collaborative.",
  openGraph: {
    title: "Nos Ateliers Couture à Orléans — Création & Partage",
    description: "Apprenez la couture avec Alunisson. Matériel fourni, ambiance workshop.",
  },
};

export default function AteliersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
