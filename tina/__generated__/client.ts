import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '96331a6f81b7f02ad13f51a94b8a38e655e7fa79', queries,  });
export default client;
  