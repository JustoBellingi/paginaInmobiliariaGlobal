import Link from "next/link";
import { sitio } from "@/lib/config";
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
      <div className="border-b border-linea bg-white/95 backdrop-blur">
        <div className="contenedor flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${sitio.nombre} - Inicio`}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
            {enlaces.slice(0, 4).map((e) => (
              <Link key={e.href} href={e.href} className="text-tinta/80 transition hover:text-petroleo">
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
