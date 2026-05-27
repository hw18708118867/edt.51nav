export const siteConfig = {
  name: "Everyday Dev Tools",
  shortName: "EDT",
  domain: "devtools.51nav.com",
  url: "https://devtools.51nav.com",
  description:
    "Fast developer tools for JSON, JWT, encoding, regex, and everyday API debugging."
} as const;

export const primaryNav = [
  { href: "/tools/", label: "All Tools" },
  { href: "/json/", label: "JSON" },
  { href: "/jwt/", label: "JWT" },
  { href: "/encode/", label: "Encode" },
  { href: "/api/", label: "API" },
  { href: "/regex/", label: "Regex" },
  { href: "/blog/", label: "Blog" }
] as const;

export const secondaryNav = [
  { href: "/about/", label: "About" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/contact/", label: "Contact" }
] as const;
