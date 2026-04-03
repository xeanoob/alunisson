import client from "../../../tina/__generated__/client";
import { PhilosophieClient } from "@/components/cms/PhilosophieClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "philosophie.md" });
  return resolveMetadata(
    result.data,
    "Notre Philosophie | Alunisson Orléans",
    "Découvrez les valeurs d'Alunisson : inclusion, upcycling et transmission des savoir-faire textiles."
  );
}

export default async function PhilosophiePage() {
  const result = await client.queries.page({ relativePath: "philosophie.md" });

  return (
    <PhilosophieClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
