import type { MetadataRoute } from "next";
import { sitio } from "@/lib/config";
import { propiedades } from "@/lib/propiedades";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: sitio.url, priority: 1 },
    { url: `${sitio.url}/propiedades`, priority: 0.9 },
    { url: `${sitio.url}/tasaciones`, priority: 0.7 },
    { url: `${sitio.url}/nosotros`, priority: 0.6 },
    { url: `${sitio.url}/contacto`, priority: 0.6 },
    ...propiedades.map((p) => ({
      url: `${sitio.url}/propiedades/${p.slug}`,
      priority: 0.8,
      images: [p.fotos[0]],
    })),
  ];
}
