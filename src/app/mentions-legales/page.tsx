import client from "../../../tina/__generated__/client";
import { MentionsLegalesClient } from "@/components/cms/MentionsLegalesClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "mentions-legales.md" });
  return resolveMetadata(
    result.data,
    "Mentions Légales | Alunisson Orléans",
    "Informations légales sur l'association Alunisson, l'édition du site et l'hébergement."
  );
}

export default async function MentionsLegalesPage() {
  const result = await client.queries.page({ relativePath: "mentions-legales.md" });

  return (
    <MentionsLegalesClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
