import client from "../../tina/__generated__/client";
import { HomeClient } from "@/components/cms/HomeClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export const revalidate = 60;


export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "home.md" });
  return resolveMetadata(
    result.data,
    "Alunisson — Couture Collaborative à Orléans (45)",
    "Découvrez Alunisson, l'association de couture collaborative à Orléans. Ateliers créatifs et couture pour tous."
  );
}

export default async function Page() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <HomeClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
