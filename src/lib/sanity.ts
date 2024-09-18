import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
// creating a client endpoint
export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "gth1bfcr",
  useCdn: false,
});

// converting images to url.
const builder = ImageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
