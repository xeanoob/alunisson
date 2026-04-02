import client from "../../../tina/__generated__/client";
import { AteliersClient } from "@/components/cms/AteliersClient";

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
