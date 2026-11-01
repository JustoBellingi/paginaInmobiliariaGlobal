import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Camera,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileSignature,
  Handshake,
  House,
  KeyRound,
  MapPinned,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { IconoFlecha } from "@/components/Iconos";
import { IconoWhatsapp } from "@/components/IconoWhatsapp";
import { linkWhatsapp, sitio } from "@/lib/config";
import { fotosLocalidades } from "@/lib/localidades";
import { getCiudades } from "@/lib/propiedades";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conocé ${sitio.nombre}: inmobiliaria en ${sitio.ciudad}, Misiones. Venta, alquiler y tasación de propiedades con trato directo y conocimiento del mercado local.`,
  alternates: { canonical: "/nosotros" },
};

// TODO: completar con la historia real de la inmobiliaria (año de inicio, quiénes la integran, etc.).
const valores = [
  {
    icono: ScanSearch,
    titulo: "Transparencia",
    texto: "Información clara desde el primer contacto: precios reales, costos de la operación y estado de la documentación.",
  },
  {
    icono: MapPinned,
    titulo: "Conocimiento local",
    texto: "Sabemos qué vale cada barrio, cómo se mueve el mercado en cada localidad y qué busca hoy quien compra o alquila.",
  },
  {
    icono: Handshake,
    titulo: "Acompañamiento",
    texto: "Un asesor que te acompaña de punta a punta y responde por WhatsApp, por teléfono o en la oficina.",
  },
  {
    icono: ShieldCheck,
    titulo: "Operaciones seguras",
    texto: "Verificamos títulos, garantías y documentación para que cada operación se cierre sin sorpresas.",
  },
];

const servicios = [
  { icono: House, titulo: "Venta", texto: "Casas, departamentos, terrenos y chacras. Te ayudamos a vender al mejor precio posible o a encontrar la propiedad indicada." },
  { icono: KeyRound, titulo: "Alquiler", texto: "Contratos claros, garantías verificadas y seguimiento durante el alquiler, tanto para propietarios como para inquilinos." },
  { icono: ChartNoAxesCombined, titulo: "Tasaciones", texto: "Valores de mercado fundamentados para venta, alquiler, sucesiones, divisiones y presentaciones bancarias." },
  { icono: Camera, titulo: "Difusión profesional", texto: "Fotografía cuidada, ficha completa en la web y publicación en portales y redes para llegar a más interesados." },
  { icono: FileSignature, titulo: "Escritura y trámites", texto: "Coordinamos con escribanías y te acompañamos en cada paso hasta la firma y la entrega de llaves." },
  { icono: MessagesSquare, titulo: "Asesoramiento", texto: "Orientación a inversores y familias para decidir dónde y cómo comprar según su presupuesto y sus planes." },
];

const proceso = [
  { icono: MessagesSquare, titulo: "Nos contactás", texto: "Por WhatsApp, teléfono o el formulario de la web." },
  { icono: ClipboardCheck, titulo: "Evaluamos", texto: "Visitamos la propiedad o entendemos qué estás buscando." },
  { icono: Camera, titulo: "Ponemos en marcha", texto: "Tasación, fotos y publicación, o búsqueda a medida." },
  { icono: BadgeCheck, titulo: "Cerramos", texto: "Negociación, documentación y firma, con vos en cada paso." },
];

export default function NosotrosPage() {
  const ciudades = getCiudades();
  const fotoPosadas = fotosLocalidades["Posadas"]?.src;

  return (
    <>
      {/* Encabezado */}
      <section className="relative isolate overflow-hidden bg-marino text-white">
        {fotoPosadas && (
          <Image src={fotoPosadas} alt="" fill preload sizes="100vw" className="-z-20 object-cover" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-marino via-marino/90 to-marino/55" />
        <div className="contenedor py-20 sm:py-28">
          <p className="sobretitulo text-petroleo-claro">Nosotros</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] font-semibold sm:text-6xl">
            Una inmobiliaria de Misiones, para la gente de Misiones
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            En {sitio.nombre} acompañamos a familias, inversores y propietarios a comprar, vender, alquilar y tasar con
            información clara y un trato cercano.
          </p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="contenedor grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="sobretitulo">Quiénes somos</p>
          <h2 className="titulo-seccion mt-3">Conocemos el mercado porque vivimos acá</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-gris">
            <p>
              Somos una inmobiliaria con base en {sitio.ciudad} y trabajamos en toda la provincia. Conocemos cada barrio,
              sus accesos y servicios, y sabemos lo que realmente vale una propiedad en cada zona.
            </p>
            <p>
              Nuestro trabajo es simple de explicar: escuchar lo que necesitás, darte información honesta y ocuparnos de
              todo lo que hace falta para que la operación salga bien, desde la primera visita hasta la entrega de llaves.
            </p>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-linea bg-white px-4 py-3 text-sm">
            <BadgeCheck className="h-5 w-5 text-petroleo" strokeWidth={1.6} aria-hidden="true" />
            <span className="font-semibold text-marino">{sitio.matricula}</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=75"
              alt="Casa en venta"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 max-w-[16rem] rounded-xl bg-petroleo p-5 text-white shadow-xl">
            <p className="font-display text-lg font-semibold">Oficina en {sitio.ciudad}</p>
            <p className="mt-1 text-sm text-white/80">{sitio.direccion}</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-linea bg-white py-20">
        <div className="contenedor">
          <p className="sobretitulo">Cómo trabajamos</p>
          <h2 className="titulo-seccion mt-3 max-w-2xl">Lo que podés esperar de nosotros</h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map(({ icono: Icono, titulo, texto }) => (
              <div key={titulo} className="border-t border-marino/15 pt-6">
                <Icono className="h-8 w-8 text-petroleo" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold text-marino">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gris">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="contenedor py-20">
        <p className="sobretitulo">Servicios</p>
        <h2 className="titulo-seccion mt-3 max-w-2xl">Todo lo que necesitás en una sola inmobiliaria</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-linea ring-1 ring-linea sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icono: Icono, titulo, texto }) => (
            <div key={titulo} className="bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-petroleo-suave text-petroleo">
                <Icono className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-marino">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gris">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-marino py-20 text-white">
        <div className="contenedor">
          <p className="sobretitulo text-petroleo-claro">Paso a paso</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight font-semibold sm:text-4xl">
            Así es trabajar con nosotros
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {proceso.map(({ icono: Icono, titulo, texto }, i) => (
              <li key={titulo} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/15 text-petroleo-claro">
                    <Icono className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-widest text-white/40">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{titulo}</h3>
                <p className="mt-1 text-sm text-white/65">{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Zonas */}
      <section className="contenedor py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="sobretitulo">Dónde trabajamos</p>
            <h2 className="titulo-seccion mt-3">Toda la provincia de Misiones</h2>
            <p className="mt-4 text-gris">
              Desde nuestra oficina en {sitio.ciudad} atendemos operaciones en toda la provincia, de la capital a la zona
              centro y el norte.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {ciudades.map((c) => (
              <li key={c.nombre}>
                <Link
                  href={`/propiedades?ciudad=${encodeURIComponent(c.nombre)}`}
                  className="flex items-center gap-2 rounded-md border border-linea bg-white px-4 py-3 font-semibold text-marino transition hover:border-petroleo hover:text-petroleo"
                >
                  <MapPinned className="h-4 w-4 text-petroleo" strokeWidth={1.6} aria-hidden="true" /> {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Llamado final */}
      <section className="contenedor">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-petroleo p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">¿Hablamos?</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Contanos qué estás buscando o qué querés hacer con tu propiedad y te asesoramos sin compromiso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkWhatsapp("Hola, quería hacer una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="boton-whatsapp"
            >
              <IconoWhatsapp /> WhatsApp
            </a>
            <Link href="/contacto" className="boton bg-white text-marino hover:bg-petroleo-suave">
              Ver datos de contacto <IconoFlecha className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
