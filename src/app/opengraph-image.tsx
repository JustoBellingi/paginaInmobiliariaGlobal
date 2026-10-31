import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { sitio } from "@/lib/config";
import { getCiudades } from "@/lib/propiedades";

// Imagen que aparece al compartir la portada, el catálogo, tasaciones y contacto.
// Cada propiedad usa su propia foto (ver propiedades/[slug]/page.tsx).
export const alt = `${sitio.nombre} · Propiedades en venta y alquiler en Misiones`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const isotipo = await readFile(join(process.cwd(), "src/app/icon.svg"), "utf8");
  const logo = `data:image/svg+xml;base64,${Buffer.from(isotipo).toString("base64")}`;
  const ciudades = getCiudades().map((c) => c.nombre).join("  ·  ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#19212c",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ display: "flex", background: "white", borderRadius: 18, padding: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} width={76} height={76} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Global</span>
              <span style={{ fontSize: 18, letterSpacing: 8, color: "#6fb7c0" }}>INMOBILIARIA</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
              Propiedades en venta y alquiler en Misiones
            </span>
            <span style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>Casas · Departamentos · Terrenos · Chacras · Tasaciones</span>
          </div>
          <span style={{ fontSize: 22, color: "#6fb7c0" }}>{ciudades}</span>
        </div>
        <div style={{ display: "flex", width: 24, background: "#0b5b66" }} />
      </div>
    ),
    size,
  );
}
