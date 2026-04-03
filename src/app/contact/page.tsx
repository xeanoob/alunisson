import client from "../../../tina/__generated__/client";
import { ContactClient } from "@/components/cms/ContactClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "contact.md" });
  return resolveMetadata(
    result.data,
    "Contactez-nous | Alunisson Orléans",
    "Une question ? Un projet ? Contactez l'équipe Alunisson à Orléans pour toute demande sur nos ateliers couture."
  );
}

export default async function ContactPage() {
  const result = await client.queries.page({ relativePath: "contact.md" });

  return (
    <ContactClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
