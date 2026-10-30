import Image from "next/image";
import Link from "next/link";
import { precioConPeriodo, tipoLabel, type Propiedad } from "@/lib/propiedades";

export function TarjetaPropiedad({ propiedad: p }: { propiedad: Propiedad }) {
  return (
    <Link
      href={`/propiedades/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-linea bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-linea">
        <Image
          src={p.fotos[0]}
          alt={p.titulo}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            p.operacion === "venta" ? "bg-marca text-white" : "bg-acento text-marca"
          }`}
        >
          {p.operacion}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xl font-bold text-marca">{precioConPeriodo(p)}</p>
        <h3 className="mt-1 line-clamp-2 font-semibold leading-snug">{p.titulo}</h3>
        <p className="mt-1 text-sm text-gris">
          {tipoLabel[p.tipo]} · {p.zona}
        </p>
        <div className="mt-auto flex gap-4 border-t border-linea pt-3 text-sm text-gris">
          <span>{p.ambientes} amb.</span>
          <span>{p.dormitorios} dorm.</span>
          <span>{p.banos} baño{p.banos > 1 ? "s" : ""}</span>
          <span>{p.superficieCubierta} m²</span>
        </div>
      </div>
    </Link>
  );
}
