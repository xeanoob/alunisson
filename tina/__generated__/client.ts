import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: 'C:/Users/Windows/Desktop/sites/alunisson/tina/__generated__/.cache/1775132280382', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  