import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://devtools.51nav.com",
  trailingSlash: "always",
  integrations: [tailwind(), sitemap()]
});
