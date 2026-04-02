import client from "../../../tina/__generated__/client";
import { InitiationsClient } from "@/components/cms/InitiationsClient";

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
