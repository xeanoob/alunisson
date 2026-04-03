import { Metadata } from "next";

export function resolveMetadata(data: any, fallbackTitle: string, fallbackDesc: string): Metadata {
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
