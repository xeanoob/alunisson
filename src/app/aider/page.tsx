import client from "../../../tina/__generated__/client";
import { AiderClient } from "@/components/cms/AiderClient";

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
