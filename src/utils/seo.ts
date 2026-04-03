import { Metadata } from "next";

interface TinaSeoData {
  title?: string | null;
  description?: string | null;
  image?: string | null;
}

interface TinaPageData {
  page?: {
    seo?: TinaSeoData | null;
    [key: string]: unknown;
  } | null;
}

/**
 * Resolves metadata from Tina data. Handles missing seo fields gracefully.
 */
export function resolveMetadata(
  data: TinaPageData | null | undefined,
  fallbackTitle: string,
  fallbackDesc: string
): Metadata {
  const seo = data?.page?.seo;
  const image = seo?.image || "/og-main.png";

  return {
    title: seo?.title || fallbackTitle,
    description: seo?.description || fallbackDesc,
    openGraph: {
      title: seo?.title || fallbackTitle,
      description: seo?.description || fallbackDesc,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seo?.title || fallbackTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title || fallbackTitle,
      description: seo?.description || fallbackDesc,
      images: [image],
    },
  };
}
