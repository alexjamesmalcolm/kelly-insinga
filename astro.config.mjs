import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), image(), sitemap(), prefetch()],
  output: "server",
  adapter: vercel()
});