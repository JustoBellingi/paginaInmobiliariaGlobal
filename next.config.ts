import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Fotos de ejemplo. Cuando se carguen las fotos reales, agregar acá su dominio.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Fotos de localidades (Wikimedia Commons, ver src/lib/localidades.ts).
      { protocol: "https", hostname: "thumb.wikimedia.org" },
    ],
  },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
