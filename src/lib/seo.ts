import { siteConfig } from "@/config/site";

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
}

export const buildCanonicalUrl = (path: string) =>
  new URL(path, siteConfig.url).toString();

export const buildPageTitle = (title: string) =>
  `${title} | ${siteConfig.name}`;

export const buildSeo = ({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = "/social-cover.svg"
}: SeoInput) => ({
  title: buildPageTitle(title),
  description,
  canonical: buildCanonicalUrl(path),
  type,
  keywords: [...keywords, siteConfig.name, "developer tools"],
  image
});
