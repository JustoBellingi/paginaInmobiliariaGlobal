import Link from "next/link";
import { linkTelefono, sitio } from "@/lib/config";
import { IconoMail, IconoPin, IconoTelefono } from "./Iconos";
import { Logo } from "./Logo";
import { MenuMovil } from "./MenuMovil";

const enlaces = [
  { href: "/propiedades?operacion=venta", label: "Comprar" },
  { href: "/propiedades?operacion=alquiler", label: "Alquilar" },
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30">
      <div className="hidden bg-selva text-xs text-white/75 md:block">
        <div className="contenedor flex h-9 items-center justify-between">
          <p className="flex items-center gap-1.5">
            <IconoPin className="h-3.5 w-3.5" /> {sitio.direccion}, {sitio.ciudad}, {sitio.provincia}
          </p>
          <div className="flex items-center gap-5">
            <a href={linkTelefono} className="flex items-center gap-1.5 hover:text-white">
              <IconoTelefono className="h-3.5 w-3.5" /> {sitio.telefono}
            </a>
            <a href={`mailto:${sitio.email}`} className="flex items-center gap-1.5 hover:text-white">
              <IconoMail className="h-3.5 w-3.5" /> {sitio.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-linea bg-white/95 backdrop-blur">
        <div className="contenedor flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${sitio.nombre} - Inicio`}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
            {enlaces.slice(0, 4).map((e) => (
              <Link key={e.href} href={e.href} className="text-tinta/80 transition hover:text-tierra">
                {e.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contacto" className="boton-primario hidden lg:inline-flex">
              Contactanos
            </Link>
            <MenuMovil />
          </div>
        </div>
      </div>
    </header>
  );
}
