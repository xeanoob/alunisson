import client from "../../../tina/__generated__/client";
import { InfosClient } from "@/components/cms/InfosClient";

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
