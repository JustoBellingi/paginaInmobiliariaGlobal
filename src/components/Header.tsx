import Link from "next/link";
import { sitio } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-linea bg-white/90 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-semibold text-marca">
          {sitio.nombre.split(" ")[0]}
          <span className="text-acento"> {sitio.nombre.split(" ").slice(1).join(" ")}</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-4">
          <Link href="/propiedades?operacion=venta" className="hidden px-2 py-1 hover:text-marca-claro sm:block">
            Venta
          </Link>
          <Link href="/propiedades?operacion=alquiler" className="hidden px-2 py-1 hover:text-marca-claro sm:block">
            Alquiler
          </Link>
          <Link href="/propiedades" className="px-2 py-1 hover:text-marca-claro sm:hidden">
            Propiedades
          </Link>
          <Link
            href="/tasaciones"
            className="rounded-full bg-marca px-4 py-2 text-white transition hover:bg-marca-claro"
          >
            Tasá tu propiedad
          </Link>
        </nav>
      </div>
    </header>
  );
}
