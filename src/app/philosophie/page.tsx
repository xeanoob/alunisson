import client from "../../../tina/__generated__/client";
import { PhilosophieClient } from "@/components/cms/PhilosophieClient";

export default async function PhilosophiePage() {
  const result = await client.queries.page({ relativePath: "philosophie.md" });

  return (
    <PhilosophieClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
