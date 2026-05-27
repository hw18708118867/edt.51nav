# Everyday Dev Tools

Static developer tools site built with Astro, Tailwind CSS, and TypeScript for deployment on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` for local testing.

- `PUBLIC_GA4_MEASUREMENT_ID`: optional GA4 measurement ID
- `PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Google Search Console verification token
- `PUBLIC_ENABLE_ADSENSE`: set to `true` to render AdSense units
- `PUBLIC_ADSENSE_CLIENT_ID`: your AdSense client ID, for example `ca-pub-...`
- `PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT`: tool page sidebar slot ID

## GitHub Pages deployment

The workflow reads repository variables from GitHub Actions `Variables`:

- `PUBLIC_GA4_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_ENABLE_ADSENSE`
- `PUBLIC_ADSENSE_CLIENT_ID`
- `PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT`

Also update:

- `public/CNAME`
- `public/ads.txt`

## Launch checklist

1. Set the custom domain to `devtools.51nav.com`
2. Add the Google Search Console verification token
3. Add the GA4 measurement ID
4. Replace `public/ads.txt` with the real publisher entry
5. Enable AdSense only after approval and slot creation
