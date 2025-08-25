// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  base: "/demo",              // mount the app under /demo
  output: "server",
  adapter: vercel({ imageService: true }),
});
