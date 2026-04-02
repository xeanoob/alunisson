import client from "../../../tina/__generated__/client";
import { RejoindreClient } from "@/components/cms/RejoindreClient";

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
