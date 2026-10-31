import Image from "next/image";
import Link from "next/link";
import { formatSuperficie, precioConPeriodo, tipoLabel, type Propiedad } from "@/lib/propiedades";
import { IconoBano, IconoCama, IconoCamara, IconoPin, IconoSuperficie } from "./Iconos";

export function EtiquetaOperacion({ operacion }: { operacion: Propiedad["operacion"] }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.12em] uppercase ${
        operacion === "venta" ? "bg-marino text-white" : "bg-petroleo text-white"
      }`}
    >
      {operacion}
    </span>
  );
}

export function TarjetaPropiedad({ propiedad: p }: { propiedad: Propiedad }) {
  return (
    <Link
      href={`/propiedades/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(15,47,38,0.08)] ring-1 ring-linea transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(15,47,38,0.25)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-crema">
        <Image
          src={p.fotos[0]}
          alt={p.titulo}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <EtiquetaOperacion operacion={p.operacion} />
          <span className="flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <IconoCamara className="h-3.5 w-3.5" /> {p.fotos.length}
          </span>
        </div>
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-1 text-[11px] font-semibold text-gris">
          {tipoLabel[p.tipo]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[22px] font-bold tracking-tight text-marino">{precioConPeriodo(p)}</p>
        <h3 className="mt-1 line-clamp-2 font-semibold leading-snug text-tinta group-hover:text-petroleo">{p.titulo}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm text-gris">
          <IconoPin className="h-4 w-4 shrink-0 text-petroleo" /> {p.barrio}, {p.ciudad}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 border-t border-linea pt-4 text-sm text-gris [&>span]:flex [&>span]:items-center [&>span]:gap-1.5">
          {p.dormitorios > 0 && (
            <span title="Dormitorios"><IconoCama className="h-4 w-4" /> {p.dormitorios} dorm.</span>
          )}
          {p.banos > 0 && (
            <span title="Baños"><IconoBano className="h-4 w-4" /> {p.banos}</span>
          )}
          <span title={p.superficieCubierta ? "Superficie cubierta" : "Superficie total"}>
            <IconoSuperficie className="h-4 w-4" /> {formatSuperficie(p.superficieCubierta || p.superficieTotal)}
          </span>
        </div>
      </div>
    </Link>
  );
}
