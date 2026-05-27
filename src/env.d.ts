/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_MEASUREMENT_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_ENABLE_ADSENSE?: string;
  readonly PUBLIC_ADSENSE_CLIENT_ID?: string;
  readonly PUBLIC_ADSENSE_TOOL_SIDEBAR_SLOT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
