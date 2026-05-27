import { siteConfig } from "@/config/site";
import type { ArticleMeta, FaqItem, ToolMeta } from "@/data/site-content";

export const buildWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description
});

export const buildFaqJsonLd = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const buildToolJsonLd = (tool: ToolMeta) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  applicationCategory: "DeveloperApplication",
  name: tool.title,
  url: `${siteConfig.url}/${tool.category}/${tool.slug}/`,
  description: tool.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  operatingSystem: "Any",
  isAccessibleForFree: true
});

export const buildArticleJsonLd = (article: ArticleMeta) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  datePublished: article.publishedAt,
  author: {
    "@type": "Organization",
    name: siteConfig.name
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name
  },
  mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}/`
});
