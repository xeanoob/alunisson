import client from "../../../tina/__generated__/client";
import { ContactClient } from "@/components/cms/ContactClient";

export default async function ContactPage() {
  const result = await client.queries.page({ relativePath: "contact.md" });

  return (
    <ContactClient
      data={JSON.parse(JSON.stringify(result.data))}
      query={result.query}
      variables={result.variables}
    />
  );
}
