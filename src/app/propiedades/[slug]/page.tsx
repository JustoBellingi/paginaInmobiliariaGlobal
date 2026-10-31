import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BotonCompartir } from "@/components/BotonCompartir";
import { Galeria } from "@/components/Galeria";
import {
  IconoAmbientes,
  IconoAuto,
  IconoBano,
  IconoCama,
  IconoCheck,
  IconoPin,
  IconoSuperficie,
  IconoTelefono,
} from "@/components/Iconos";
import { IconoWhatsapp } from "@/components/IconoWhatsapp";
import { EtiquetaOperacion, TarjetaPropiedad } from "@/components/TarjetaPropiedad";
import { linkTelefono, linkWhatsapp, sitio } from "@/lib/config";
import {
  formatPrecio,
  formatSuperficie,
  getPropiedad,
  precioConPeriodo,
  propiedades,
  tipoLabel,
} from "@/lib/propiedades";

export function generateStaticParams() {
  return propiedades.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/propiedades/[slug]">): Promise<Metadata> {
  const p = getPropiedad((await params).slug);
  if (!p) return {};
  const titulo = `${p.titulo} · ${precioConPeriodo(p)}`;
  const detalle = [
    p.ambientes && `${p.ambientes} ambientes`,
    p.dormitorios && `${p.dormitorios} dormitorios`,
    `${formatSuperficie(p.superficieCubierta || p.superficieTotal)}${p.superficieCubierta ? " cubiertos" : ""}`,
  ]
    .filter(Boolean)
    .join(", ");
  const descripcion = `${tipoLabel[p.tipo]} en ${p.operacion} en ${p.barrio}, ${p.ciudad}, Misiones. ${detalle}.`;
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
  const mensaje = `Hola! Me interesa la propiedad ${p.codigo}: ${p.titulo} (${precioConPeriodo(p)}). ${url}`;
  const similares = propiedades
    .filter((o) => o.slug !== p.slug && o.operacion === p.operacion)
    .sort((a, b) => Number(b.ciudad === p.ciudad) - Number(a.ciudad === p.ciudad))
    .slice(0, 3);

  const destacados = [
    p.ambientes > 0 && { icono: IconoAmbientes, valor: p.ambientes, label: "Ambientes" },
    p.dormitorios > 0 && { icono: IconoCama, valor: p.dormitorios, label: "Dormitorios" },
    p.banos > 0 && { icono: IconoBano, valor: p.banos, label: p.banos === 1 ? "Baño" : "Baños" },
    p.superficieCubierta > 0 && { icono: IconoSuperficie, valor: formatSuperficie(p.superficieCubierta), label: "Cubiertos" },
    { icono: IconoSuperficie, valor: formatSuperficie(p.superficieTotal), label: "Totales" },
    p.cocheras > 0 && { icono: IconoAuto, valor: p.cocheras, label: p.cocheras === 1 ? "Cochera" : "Cocheras" },
  ].filter((d) => d !== false);

  const ficha = [
    ["Código", p.codigo],
    ["Operación", p.operacion === "venta" ? "Venta" : "Alquiler"],
    ["Tipo", tipoLabel[p.tipo]],
    ["Localidad", p.ciudad],
    ["Barrio", p.barrio],
    ["Antigüedad", p.antiguedad === undefined ? null : p.antiguedad === 0 ? "A estrenar" : `${p.antiguedad} años`],
    ["Expensas", p.expensas ? formatPrecio(p.expensas, "ARS") : null],
  ].filter(([, v]) => v);

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
      businessFunction:
        p.operacion === "venta" ? "http://purl.org/goodrelations/v1#Sell" : "http://purl.org/goodrelations/v1#LeaseOut",
      seller: { "@type": "RealEstateAgent", name: sitio.nombre, telephone: sitio.telefono },
    },
    contentLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: p.ciudad,
        addressRegion: "Misiones",
        addressCountry: "AR",
      },
      geo: { "@type": "GeoCoordinates", latitude: p.ubicacion.lat, longitude: p.ubicacion.lng },
    },
  };

  const contacto = (
    <>
      <a href={linkWhatsapp(mensaje)} target="_blank" rel="noopener noreferrer" className="boton-whatsapp w-full py-3.5">
        <IconoWhatsapp /> Consultar por WhatsApp
      </a>
      <a href={linkTelefono} className="boton-borde w-full py-3.5">
        <IconoTelefono className="h-4 w-4" /> Llamar al {sitio.telefono}
      </a>
    </>
  );

  return (
    <div className="contenedor pt-6 pb-8">
      <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-gris" aria-label="Ruta">
        <Link href="/" className="hover:text-marino">Inicio</Link>
        <span>/</span>
        <Link href={`/propiedades?operacion=${p.operacion}`} className="hover:text-marino">
          {p.operacion === "venta" ? "Venta" : "Alquiler"}
        </Link>
        <span>/</span>
        <Link href={`/propiedades?ciudad=${encodeURIComponent(p.ciudad)}`} className="hover:text-marino">{p.ciudad}</Link>
        <span>/</span>
        <span className="text-tinta">{p.codigo}</span>
      </nav>

      <Galeria fotos={p.fotos} titulo={p.titulo} />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <EtiquetaOperacion operacion={p.operacion} />
            <span className="rounded-full bg-crema px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-gris uppercase">
              {tipoLabel[p.tipo]}
            </span>
            <span className="text-xs text-gris">Cód. {p.codigo}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl leading-tight font-medium text-marino sm:text-[2.6rem]">{p.titulo}</h1>
          <p className="mt-3 flex items-center gap-1.5 text-gris">
            <IconoPin className="h-5 w-5 text-petroleo" /> {p.barrio}, {p.ciudad}, Misiones
          </p>

          {/* Precio en celular */}
          <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-linea lg:hidden">
            <p className="text-3xl font-bold tracking-tight text-marino">{precioConPeriodo(p)}</p>
            {p.expensas ? <p className="mt-1 text-sm text-gris">+ {formatPrecio(p.expensas, "ARS")} de expensas</p> : null}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-linea ring-1 ring-linea sm:grid-cols-3">
            {destacados.map(({ icono: Icono, valor, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white p-4">
                <Icono className="h-6 w-6 shrink-0 text-petroleo" />
                <div>
                  <dd className="text-lg leading-none font-bold text-marino">{valor}</dd>
                  <dt className="mt-1 text-xs text-gris">{label}</dt>
                </div>
              </div>
            ))}
          </dl>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-marino">Descripción</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-tinta/85">
              {p.descripcion.split("\n\n").map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}
            </div>
          </section>

          {p.caracteristicas.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-2xl text-marino">Características y comodidades</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.caracteristicas.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-petroleo-suave text-petroleo">
                      <IconoCheck className="h-3.5 w-3.5" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12">
            <h2 className="font-display text-2xl text-marino">Ficha técnica</h2>
            <dl className="mt-5 divide-y divide-linea rounded-2xl bg-white px-5 ring-1 ring-linea">
              {ficha.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3.5 text-sm">
                  <dt className="text-gris">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-marino">Ubicación</h2>
            <p className="mt-2 text-sm text-gris">
              {p.barrio}, {p.ciudad}. La ubicación exacta se informa al coordinar la visita.
            </p>
            <div className="mt-5 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-linea">
              <iframe
                title={`Mapa de ${p.titulo}`}
                src={`https://www.google.com/maps?q=${p.ubicacion.lat},${p.ubicacion.lng}&z=15&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3 rounded-3xl bg-white p-7 shadow-[0_20px_50px_-20px_rgba(15,47,38,0.25)] ring-1 ring-linea">
            <p className="text-sm text-gris">{p.operacion === "venta" ? "Precio de venta" : "Alquiler mensual"}</p>
            <p className="text-4xl font-bold tracking-tight text-marino">{formatPrecio(p.precio, p.moneda)}</p>
            {p.expensas ? <p className="text-sm text-gris">+ {formatPrecio(p.expensas, "ARS")} de expensas</p> : null}
            <div className="space-y-3 border-t border-linea pt-5">{contacto}</div>
            <BotonCompartir titulo={p.titulo} url={url} />
            <p className="pt-2 text-center text-xs text-gris">
              {sitio.matricula}
            </p>
          </div>
        </aside>
      </div>

      {similares.length > 0 && (
        <section className="mt-24">
          <p className="sobretitulo">Seguí buscando</p>
          <h2 className="titulo-seccion mt-2">Otras propiedades en {p.operacion}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similares.map((o) => (
              <TarjetaPropiedad key={o.slug} propiedad={o} />
            ))}
          </div>
        </section>
      )}

      {/* Barra fija de contacto en celular */}
      <div className="barra-contacto fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-linea bg-white/95 p-3 backdrop-blur lg:hidden">
        <a href={linkWhatsapp(mensaje)} target="_blank" rel="noopener noreferrer" className="boton-whatsapp flex-[2] py-3">
          <IconoWhatsapp /> WhatsApp
        </a>
        <a href={linkTelefono} className="boton-borde flex-1 py-3">
          <IconoTelefono className="h-4 w-4" /> Llamar
        </a>
      </div>
      <div className="h-16 lg:hidden" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
