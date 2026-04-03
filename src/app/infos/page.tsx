import client from "../../../tina/__generated__/client";
import { InfosClient } from "@/components/cms/InfosClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "infos.md" });
  return resolveMetadata(
    result.data,
    "Informations & FAQ | Alunisson Orléans",
    "Réponses aux questions les plus fréquentes sur nos ateliers, nos tarifs et notre local à l'Info Lab."
  );
}

export default async function InfosPage() {
  const result = await client.queries.page({ relativePath: "infos.md" });

  return (
    <InfosClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
