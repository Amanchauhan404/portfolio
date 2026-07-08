import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          input: "./src/server.ts",
        },
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      router: {
        routeTreeFileHeader: [
          "/* eslint-disable */",
          "// @ts-nocheck",
          "// noinspection JSUnusedGlobalSymbols",
        ],
      },
      pages: [{ path: "/" }, { path: "/contact" }],
      prerender: {
        enabled: true,
        routes: ["/", "/contact"],
        crawlLinks: false,
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
