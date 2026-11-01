import type { LucideIcon } from "lucide-react";

/** Ícono de Lucide dentro de un círculo petróleo: el mismo estilo para pilares, valores, servicios y pasos. */
export function IconoDestacado({ icono: Icono, sobreOscuro = false }: { icono: LucideIcon; sobreOscuro?: boolean }) {
  return (
    <span
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-petroleo to-petroleo-oscuro text-white shadow-[0_8px_20px_-8px_rgba(11,91,102,0.7)] ring-4 ${
        sobreOscuro ? "ring-white/10" : "ring-petroleo-suave"
      }`}
    >
      <Icono className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
