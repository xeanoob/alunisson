import client from "../../../tina/__generated__/client";
import { CreationsClient } from "@/components/cms/CreationsClient";

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
