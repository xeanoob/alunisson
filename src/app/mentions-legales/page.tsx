import client from "../../../tina/__generated__/client";
import { MentionsLegalesClient } from "@/components/cms/MentionsLegalesClient";

export default async function MentionsLegalesPage() {
  const result = await client.queries.page({ relativePath: "mentions-legales.md" });

  return (
    <MentionsLegalesClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
