import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://kelly-insinga.pages.dev",
  integrations: [mdx()],
  output: "hybrid",
  adapter: cloudflare(),
});
