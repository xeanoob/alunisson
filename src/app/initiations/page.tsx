import client from "../../../tina/__generated__/client";
import { InitiationsClient } from "@/components/cms/InitiationsClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "initiations.md" });
  return resolveMetadata(
    result.data,
    "Initiations Gratuites | Alunisson Orléans",
    "Apprendre les bases (enfilage, canette, machine) gratuitement dans un espace de bienveillance."
  );
}

export default async function InitiationsPage() {
  const result = await client.queries.page({ relativePath: "initiations.md" });

  return (
    <InitiationsClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
