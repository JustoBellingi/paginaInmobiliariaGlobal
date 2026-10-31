import Link from "next/link";
import { linkTelefono, linkWhatsapp, sitio } from "@/lib/config";
import { getCiudades } from "@/lib/propiedades";
import { IconoMail, IconoPin, IconoReloj, IconoTelefono } from "./Iconos";
import { Logo } from "./Logo";

export function Footer() {
  const ciudades = getCiudades().slice(0, 6);

  return (
    <footer className="mt-24 bg-marino text-sm text-white/70">
      <div className="contenedor grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo claro />
          <p className="mt-5 max-w-xs leading-relaxed">{sitio.descripcion}</p>
          <div className="mt-5 flex gap-3">
            <a href={sitio.instagram} className="rounded-full border border-white/20 px-4 py-1.5 hover:border-white hover:text-white">
              Instagram
            </a>
            <a href={sitio.facebook} className="rounded-full border border-white/20 px-4 py-1.5 hover:border-white hover:text-white">
              Facebook
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-white uppercase">Propiedades</p>
          <ul className="space-y-2.5">
            <li><Link href="/propiedades?operacion=venta" className="hover:text-white">En venta</Link></li>
            <li><Link href="/propiedades?operacion=alquiler" className="hover:text-white">En alquiler</Link></li>
            <li><Link href="/propiedades?tipo=terreno" className="hover:text-white">Terrenos</Link></li>
            <li><Link href="/propiedades?tipo=chacra" className="hover:text-white">Chacras</Link></li>
            <li><Link href="/tasaciones" className="hover:text-white">Tasaciones</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-white uppercase">Localidades</p>
          <ul className="space-y-2.5">
            {ciudades.map((c) => (
              <li key={c.nombre}>
                <Link href={`/propiedades?ciudad=${encodeURIComponent(c.nombre)}`} className="hover:text-white">
                  {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-white uppercase">Contacto</p>
          <ul className="space-y-3">
            <li className="flex gap-2.5"><IconoPin className="mt-0.5 h-4 w-4 shrink-0 text-petroleo-claro" />{sitio.direccion}, {sitio.ciudad}, {sitio.provincia}</li>
            <li className="flex gap-2.5"><IconoTelefono className="mt-0.5 h-4 w-4 shrink-0 text-petroleo-claro" /><a href={linkTelefono} className="hover:text-white">{sitio.telefono}</a></li>
            <li className="flex gap-2.5"><IconoMail className="mt-0.5 h-4 w-4 shrink-0 text-petroleo-claro" /><a href={`mailto:${sitio.email}`} className="break-all hover:text-white">{sitio.email}</a></li>
            <li className="flex gap-2.5"><IconoReloj className="mt-0.5 h-4 w-4 shrink-0 text-petroleo-claro" />{sitio.horario}</li>
          </ul>
          <a href={linkWhatsapp("Hola, quería hacer una consulta.")} className="boton-whatsapp mt-5">
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="contenedor flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p>© {sitio.nombre} · {sitio.matricula}</p>
            <p>
              Las fotos, medidas y precios son orientativos y pueden variar sin previo aviso. ·{" "}
              <Link href="/creditos" className="hover:text-white hover:underline">Créditos</Link>
            </p>
          </div>
          <p>
            Sitio web por{" "}
            <a
              href="https://webpmarg.com.ar"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
            >
              webpmarg
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
