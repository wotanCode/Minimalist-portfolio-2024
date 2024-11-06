// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel(),
});
