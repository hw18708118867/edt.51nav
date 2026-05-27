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
- `PUBLIC_ENABLE_ADSENSE`: optional switch for AdSense
- `PUBLIC_ADSENSE_CLIENT_ID`: optional AdSense client ID
- `PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT`: optional tool page sidebar slot ID

## GitHub Pages deployment

The workflow can read repository variables from GitHub Actions `Variables`:

- `PUBLIC_GA4_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_ENABLE_ADSENSE`
- `PUBLIC_ADSENSE_CLIENT_ID`
- `PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT`

Also update:

- `public/CNAME`

## Launch checklist

1. Set the custom domain to `devtools.51nav.com`
2. Confirm DNS for `devtools.51nav.com`
3. Add the Google Search Console verification token when you are ready
4. Add the GA4 measurement ID when you are ready
5. Add AdSense only after approval and slot creation
