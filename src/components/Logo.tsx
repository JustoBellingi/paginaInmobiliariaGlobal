/** Isotipo de Global Inmobiliaria (casa + G). Redibujado en SVG a partir de public/logo.png. */
export function Isotipo({ claro = false, className = "h-10 w-10" }: { claro?: boolean; className?: string }) {
  const casa = claro ? "#6fb7c0" : "#0b5b66";
  const g = claro ? "#ffffff" : "#19212c";
  return (
    <svg viewBox="30 20 264 266" className={className} aria-hidden="true">
      <path
        d="M38 148 L140 46 Q162 24 184 46 L286 148"
        fill="none"
        stroke={casa}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M213 75 L213 48 A20 20 0 0 1 253 48 L253 115 Z" fill={casa} />
      <path d="M69 166 L69 141 L150 60 Q162 48 174 60 L255 141 L255 166 L198 166 A36 36 0 0 0 126 166 Z" fill={casa} />
      <path d="M70 172 A94 94 0 1 0 256 172 L162 172 L162 196 L226.2 196 A64 64 0 1 1 100.5 172 Z" fill={g} />
    </svg>
  );
}

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Isotipo claro={claro} className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`block font-display text-[22px] font-semibold tracking-tight ${claro ? "text-white" : "text-marino"}`}>
          Global
        </span>
        <span className={`block text-[9.5px] font-bold tracking-[0.32em] ${claro ? "text-petroleo-claro" : "text-petroleo"}`}>
          INMOBILIARIA
        </span>
      </span>
    </span>
  );
}
