import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Association Alunisson Orléans",
  description: "Consultez les informations légales, les conditions d'utilisation et la politique de confidentialité de l'association Alunisson Orléans.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
