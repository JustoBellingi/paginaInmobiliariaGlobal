import Image from "next/image";
import Link from "next/link";
import { BuscadorHero } from "@/components/BuscadorHero";
import {
  IconoCheck,
  IconoEscudo,
  IconoFlecha,
  IconoGrafico,
  IconoLlave,
  IconoPin,
} from "@/components/Iconos";
import { IconoWhatsapp } from "@/components/IconoWhatsapp";
import { TarjetaPropiedad } from "@/components/TarjetaPropiedad";
import { linkWhatsapp } from "@/lib/config";
import { fotosLocalidades } from "@/lib/localidades";
import { getCiudades, propiedades } from "@/lib/propiedades";

const pilares = [
  {
    icono: IconoGrafico,
    titulo: "Tasaciones reales",
    texto: "Valuamos con datos del mercado local, no con números inflados para captar tu propiedad.",
  },
  {
    icono: IconoEscudo,
    titulo: "Operaciones seguras",
    texto: "Revisamos títulos y documentación y te acompañamos hasta la escritura o la firma del contrato.",
  },
  {
    icono: IconoPin,
    titulo: "Conocemos Misiones",
    texto: "Desde Posadas hasta Iguazú: barrios, accesos, servicios y lo que de verdad vale cada zona.",
  },
  {
    icono: IconoLlave,
    titulo: "Trato directo",
    texto: "Un asesor que responde. Por WhatsApp, por teléfono o en la oficina, cuando lo necesites.",
  },
];

const servicios = [
  "Venta de casas, departamentos, terrenos y chacras",
  "Alquileres con contrato y garantías verificadas",
  "Tasaciones para venta, alquiler, sucesiones y bancos",
  "Fotografía profesional y difusión en portales y redes",
  "Acompañamiento en escritura y trámites",
];

export default function Home() {
  // Múltiplo de 3 (máximo 6) para que la grilla no deje una tarjeta sola en la última fila.
  const todasDestacadas = propiedades.filter((p) => p.destacada);
  const destacadas = todasDestacadas.slice(0, Math.min(6, Math.max(3, todasDestacadas.length - (todasDestacadas.length % 3))));
  const ciudades = getCiudades();
  const creditos = ciudades.flatMap((c) => {
    const credito = fotosLocalidades[c.nombre]?.credito;
    return credito ? [[c.nombre, credito] as const] : [];
  });

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-selva">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=75"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-selva via-selva/85 to-selva/30" />
        <div className="contenedor pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="sobretitulo text-tierra-suave/90">Inmobiliaria en Misiones</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.05] font-medium text-white sm:text-6xl lg:text-7xl">
            Tu próxima propiedad en <em className="text-tierra-suave not-italic">tierra colorada</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Casas, departamentos, terrenos y chacras en venta y alquiler en Posadas, Oberá, Iguazú y toda la provincia.
          </p>
          <div className="mt-10 max-w-4xl">
            <BuscadorHero />
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="border-b border-linea bg-white">
        <div className="contenedor grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(({ icono: Icono, titulo, texto }) => (
            <div key={titulo} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tierra-suave text-tierra">
                <Icono className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-selva">{titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gris">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destacadas */}
      <section className="contenedor mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="sobretitulo">Selección</p>
            <h2 className="titulo-seccion mt-2">Propiedades destacadas</h2>
          </div>
          <Link href="/propiedades" className="boton-borde">
            Ver todas las propiedades <IconoFlecha className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacadas.map((p) => (
            <TarjetaPropiedad key={p.slug} propiedad={p} />
          ))}
        </div>
      </section>

      {/* Localidades */}
      <section className="contenedor mt-24">
        <p className="sobretitulo">Explorá por zona</p>
        <h2 className="titulo-seccion mt-2">Propiedades en toda la provincia</h2>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {ciudades.map((c, i) => {
            const foto = fotosLocalidades[c.nombre];
            return (
            <Link
              key={c.nombre}
              href={`/propiedades?ciudad=${encodeURIComponent(c.nombre)}`}
              className={`group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white transition hover:-translate-y-1 ${
                i % 2 ? "bg-tierra" : "bg-selva"
              }`}
            >
              {foto ? (
                <>
                  <Image
                    src={foto.src}
                    alt={`Vista de ${c.nombre}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="-z-20 object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-selva via-selva/40 to-transparent" />
                </>
              ) : (
                <svg viewBox="0 0 100 100" className="absolute -top-6 -right-6 h-32 w-32 opacity-15" aria-hidden="true">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="16" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              )}
              <p className="font-display text-2xl leading-tight">{c.nombre}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-white/75">
                {c.cantidad} propiedad{c.cantidad === 1 ? "" : "es"}
                <IconoFlecha className="h-4 w-4 transition group-hover:translate-x-1" />
              </p>
            </Link>
            );
          })}
        </div>
        {creditos.length > 0 && (
          <p className="mt-4 text-xs text-gris/80">
            Fotos de localidades:{" "}
            {creditos.map(([ciudad, c], i) => (
              <span key={ciudad}>
                {i > 0 && " · "}
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-selva hover:underline">
                  {ciudad}, {c.autor} ({c.licencia})
                </a>
              </span>
            ))}
            , vía Wikimedia Commons.
          </p>
        )}
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="mt-24 scroll-mt-28 bg-crema/60 py-20">
        <div className="contenedor grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=75"
                alt="Casa en venta"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-selva p-6 text-white shadow-xl sm:left-auto sm:-right-6">
              <p className="font-display text-4xl">Misiones</p>
              <p className="text-sm text-white/70">es nuestra casa</p>
            </div>
          </div>
          <div>
            <p className="sobretitulo">Nosotros</p>
            <h2 className="titulo-seccion mt-2">Una inmobiliaria que conoce cada rincón de la provincia</h2>
            <p className="mt-5 leading-relaxed text-gris">
              En Global Inmobiliaria acompañamos a familias, inversores y propietarios en cada paso: desde la primera
              visita hasta la entrega de llaves. Trabajamos con información clara, precios reales y un trato cercano.
            </p>
            <ul className="mt-8 space-y-3">
              {servicios.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-selva text-white">
                    <IconoCheck className="h-3.5 w-3.5" />
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contacto" className="boton-primario">Conocenos</Link>
              <Link href="/propiedades" className="boton-borde">Ver propiedades</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Llamados */}
      <section className="contenedor mt-24 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-tierra p-8 text-white sm:p-12">
          <svg viewBox="0 0 200 200" className="absolute -right-16 -bottom-16 h-72 w-72 opacity-10" aria-hidden="true">
            <path d="M20 110 100 40l80 70M45 95v85h110V95" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" />
          </svg>
          <p className="sobretitulo text-white/70">Propietarios</p>
          <h2 className="mt-3 max-w-md font-display text-3xl leading-tight sm:text-4xl">¿Cuánto vale tu propiedad hoy?</h2>
          <p className="mt-4 max-w-md text-white/85">
            Pedí una tasación sin cargo. Te visitamos, analizamos el mercado de tu zona y te damos un valor real.
          </p>
          <Link href="/tasaciones" className="boton mt-8 bg-white text-tierra hover:bg-tierra-suave">
            Pedir tasación <IconoFlecha className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl bg-white p-8 ring-1 ring-linea sm:p-12">
          <p className="sobretitulo">Búsqueda a medida</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-selva">¿No encontrás lo que buscás?</h2>
          <p className="mt-4 text-gris">
            Contanos qué necesitás y te avisamos apenas ingrese una propiedad así, antes de publicarla.
          </p>
          <a
            href={linkWhatsapp("Hola, estoy buscando una propiedad con estas características: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-whatsapp mt-8"
          >
            <IconoWhatsapp /> Contanos qué buscás
          </a>
        </div>
      </section>
    </>
  );
}
