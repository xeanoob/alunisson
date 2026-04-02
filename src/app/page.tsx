import client from "../../tina/__generated__/client";
import { HomeClient } from "@/components/cms/HomeClient";

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
