import client from "../../../tina/__generated__/client";
import { RejoindreClient } from "@/components/cms/RejoindreClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "rejoindre.md" });
  return resolveMetadata(
    result.data,
    "Réserver une place | Alunisson Orléans",
    "Prêt à coudre ? Réservez votre créneau pour nos prochains ateliers Alunisson ou nos initiations gratuites."
  );
}

export default async function RejoindrePage() {
  const result = await client.queries.page({ relativePath: "rejoindre.md" });

  return (
    <RejoindreClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
