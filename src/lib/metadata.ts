import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: CreateMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
