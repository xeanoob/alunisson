import client from "../../../tina/__generated__/client";
import { CreationsClient } from "@/components/cms/CreationsClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export const revalidate = 60;


export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "creations.md" });
  return resolveMetadata(
    result.data,
    "Nos Créations | Alunisson Orléans",
    "Découvrez le portfolio des créations réalisées à l'atelier Alunisson : upcycling, accessoires et prêt-à-porter."
  );
}

export default async function CreationsPage() {
  const result = await client.queries.page({ relativePath: "creations.md" });

  return (
    <CreationsClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
