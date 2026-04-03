import client from "../../../tina/__generated__/client";
import { AiderClient } from "@/components/cms/AiderClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "aider.md" });
  return resolveMetadata(
    result.data,
    "Nous Aider | Alunisson Orléans",
    "Découvrez comment soutenir l'association Alunisson : dons de tissus, mécénat et entraide locale."
  );
}

export default async function AiderPage() {
  const result = await client.queries.page({ relativePath: "aider.md" });

  return (
    <AiderClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
