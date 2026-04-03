import client from "../../../tina/__generated__/client";
import { AteliersClient } from "@/components/cms/AteliersClient";
import { Metadata } from "next";
import { resolveMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: "ateliers.md" });
  return resolveMetadata(
    result.data,
    "Nos Ateliers | Alunisson Orléans",
    "Découvrez nos ateliers de couture collaborative à Orléans. Wax, upcycling et création de A à Z."
  );
}

export default async function AteliersPage() {
  const result = await client.queries.page({ relativePath: "ateliers.md" });

  return (
    <AteliersClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
