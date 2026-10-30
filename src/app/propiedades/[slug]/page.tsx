import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BotonCompartir } from "@/components/BotonCompartir";
import { Galeria } from "@/components/Galeria";
import { IconoWhatsapp } from "@/components/IconoWhatsapp";
import { TarjetaPropiedad } from "@/components/TarjetaPropiedad";
import { linkWhatsapp, sitio } from "@/lib/config";
import { formatPrecio, getPropiedad, precioConPeriodo, propiedades, tipoLabel } from "@/lib/propiedades";

export function generateStaticParams() {
  return propiedades.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/propiedades/[slug]">): Promise<Metadata> {
  const p = getPropiedad((await params).slug);
  if (!p) return {};
  const titulo = `${p.titulo} · ${precioConPeriodo(p)}`;
  const descripcion = `${tipoLabel[p.tipo]} en ${p.operacion} en ${p.zona}. ${p.ambientes} ambientes, ${p.dormitorios} dormitorios, ${p.superficieCubierta} m² cubiertos.`;
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: `/propiedades/${p.slug}` },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: `/propiedades/${p.slug}`,
      images: [{ url: p.fotos[0], alt: p.titulo }],
    },
    twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: [p.fotos[0]] },
  };
}

export default async function PropiedadPage({ params }: PageProps<"/propiedades/[slug]">) {
  const p = getPropiedad((await params).slug);
  if (!p) notFound();

  const url = `${sitio.url}/propiedades/${p.slug}`;
  const mensaje = `Hola! Me interesa esta propiedad: ${p.titulo} (${precioConPeriodo(p)}). ${url}`;
  const similares = propiedades
    .filter((o) => o.slug !== p.slug && o.operacion === p.operacion)
    .slice(0, 3);

  const datos = [
    ["Tipo", tipoLabel[p.tipo]],
    ["Ambientes", p.ambientes],
    ["Dormitorios", p.dormitorios],
    ["Baños", p.banos],
    ["Sup. cubierta", `${p.superficieCubierta} m²`],
    ["Sup. total", `${p.superficieTotal} m²`],
    ["Cochera", p.cochera ? "Sí" : "No"],
    ["Antigüedad", p.antiguedad === undefined ? "—" : p.antiguedad === 0 ? "A estrenar" : `${p.antiguedad} años`],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: p.titulo,
    description: p.descripcion,
    url,
    image: p.fotos,
    offers: {
      "@type": "Offer",
      price: p.precio,
      priceCurrency: p.moneda,
      businessFunction: p.operacion === "venta" ? "http://purl.org/goodrelations/v1#Sell" : "http://purl.org/goodrelations/v1#LeaseOut",
    },
    contentLocation: {
      "@type": "Place",
      address: p.direccion,
      geo: { "@type": "GeoCoordinates", latitude: p.ubicacion.lat, longitude: p.ubicacion.lng },
    },
  };

  return (
    <div className="contenedor py-8">
      <nav className="mb-4 text-sm text-gris">
        <Link href="/propiedades" className="hover:text-marca">Propiedades</Link>
        {" / "}
        <Link href={`/propiedades?operacion=${p.operacion}`} className="capitalize hover:text-marca">{p.operacion}</Link>
        {" / "}
        <span>{p.zona}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <Galeria fotos={p.fotos} titulo={p.titulo} />

          <h1 className="mt-6 font-display text-2xl font-semibold text-marca sm:text-3xl">{p.titulo}</h1>
          <p className="mt-1 text-gris">{p.direccion}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {datos.map(([k, v]) => (
              <div key={k} className="rounded-xl border border-linea bg-white p-3">
                <dt className="text-xs text-gris">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 text-lg font-bold">Descripción</h2>
          <p className="mt-2 whitespace-pre-line leading-relaxed text-tinta/90">{p.descripcion}</p>

          {p.caracteristicas.length > 0 && (
            <>
              <h2 className="mt-8 text-lg font-bold">Características</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.caracteristicas.map((c) => (
                  <li key={c} className="rounded-full bg-white px-3 py-1.5 text-sm ring-1 ring-linea">✓ {c}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="mt-8 text-lg font-bold">Ubicación</h2>
          <div className="mt-3 aspect-[16/9] overflow-hidden rounded-2xl border border-linea">
            <iframe
              title={`Mapa de ${p.titulo}`}
              src={`https://www.google.com/maps?q=${p.ubicacion.lat},${p.ubicacion.lng}&z=15&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <aside className="h-fit space-y-3 rounded-2xl border border-linea bg-white p-6 lg:sticky lg:top-24">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
              p.operacion === "venta" ? "bg-marca text-white" : "bg-acento text-marca"
            }`}
          >
            {p.operacion}
          </span>
          <p className="text-3xl font-bold text-marca">{precioConPeriodo(p)}</p>
          {p.expensas ? <p className="text-sm text-gris">+ {formatPrecio(p.expensas, "ARS")} de expensas</p> : null}
          <a
            href={linkWhatsapp(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-semibold text-white transition hover:brightness-95"
          >
            <IconoWhatsapp /> Consultar por WhatsApp
          </a>
          <BotonCompartir titulo={p.titulo} url={url} />
          <p className="pt-2 text-center text-xs text-gris">
            También podés llamarnos al{" "}
            <a href={`tel:${sitio.telefono.replace(/\D/g, "")}`} className="font-semibold text-marca">{sitio.telefono}</a>
          </p>
        </aside>
      </div>

      {similares.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-marca">Otras propiedades en {p.operacion}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similares.map((o) => (
              <TarjetaPropiedad key={o.slug} propiedad={o} />
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
